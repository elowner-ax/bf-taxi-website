/**
 * Branche un champ de saisie sur l'autocomplétion d'adresses.
 *
 * Partagé par le simulateur et le formulaire de devis : un seul comportement
 * à corriger, et une seule implémentation du clavier et de l'accessibilité.
 */
import { lireReponse, type Suggestion } from './adresses.ts';

export type Point = { label: string; lat: number; lon: number };

type Options = {
  input: HTMLInputElement;
  liste: HTMLElement;
  /** Bouton d'effacement, masqué tant que le champ est vide. */
  vider?: HTMLButtonElement | null;
  /** URL de recherche, à laquelle la requête encodée est ajoutée. */
  urlApi: string;
  /** Appelé quand le visiteur retient une adresse, ou l'efface (null). */
  onChoix: (point: Point | null) => void;
  /** Délai avant interrogation de l'API, le temps de finir de taper. */
  delai?: number;
};

export function brancherAutocompletion(o: Options): (p: Point) => void {
  const { input, liste, vider, urlApi, onChoix, delai = 260 } = o;
  let minuteur: number | undefined;
  let index = -1;
  let suggestions: Suggestion[] = [];

  const fermer = () => {
    liste.hidden = true;
    liste.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
    index = -1;
  };

  const message = (texte: string) => {
    liste.innerHTML = `<li data-etat>${texte}</li>`;
    liste.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  };

  const afficher = () => {
    if (!suggestions.length) {
      message('Aucune adresse trouvée. Précisez la rue et la commune.');
      return;
    }
    liste.innerHTML = suggestions
      .map((s, i) => {
        // Le libellé de la Base Adresse Nationale contient déjà la commune :
        // on la détache pour la mettre en seconde ligne.
        const detail = `${s.codePostal} ${s.ville}`.trim();
        const rue = detail ? s.label.replace(detail, '').trim() : s.label;
        return `<li role="option" data-i="${i}" aria-selected="${i === index}">${rue || s.label}${
          detail ? `<small>${detail}</small>` : ''
        }</li>`;
      })
      .join('');
    liste.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  };

  const choisir = (p: Point) => {
    input.value = p.label;
    if (vider) vider.hidden = false;
    fermer();
    onChoix(p);
  };

  input.addEventListener('input', () => {
    onChoix(null);
    if (vider) vider.hidden = input.value.length === 0;
    window.clearTimeout(minuteur);

    const q = input.value.trim();
    if (q.length < 3) {
      fermer();
      return;
    }

    minuteur = window.setTimeout(async () => {
      try {
        const r = await fetch(urlApi + encodeURIComponent(q));
        if (!r.ok) throw new Error(String(r.status));
        suggestions = lireReponse(await r.json());
        afficher();
      } catch {
        // L'annuaire d'adresses est injoignable : on n'empêche pas le
        // visiteur d'avancer, on l'oriente vers un canal humain.
        message('Recherche d’adresse indisponible — appelez-nous ou décrivez le trajet.');
      }
    }, delai);
  });

  liste.addEventListener('mousedown', (e) => {
    const li = (e.target as HTMLElement).closest<HTMLLIElement>('li[data-i]');
    if (!li) return;
    e.preventDefault(); // évite que le blur ferme la liste avant le clic
    const s = suggestions[Number(li.dataset.i)];
    if (s) choisir({ label: s.label, lat: s.lat, lon: s.lon });
  });

  input.addEventListener('keydown', (e) => {
    if (liste.hidden || !suggestions.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      index = (index + (e.key === 'ArrowDown' ? 1 : -1) + suggestions.length) % suggestions.length;
      afficher();
    } else if (e.key === 'Enter' && index >= 0) {
      e.preventDefault();
      const s = suggestions[index];
      choisir({ label: s.label, lat: s.lat, lon: s.lon });
    } else if (e.key === 'Escape') {
      fermer();
    }
  });

  input.addEventListener('blur', () => window.setTimeout(fermer, 120));

  vider?.addEventListener('click', () => {
    input.value = '';
    if (vider) vider.hidden = true;
    fermer();
    input.focus();
    onChoix(null);
  });

  return choisir;
}
