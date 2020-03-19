/* icons */
import { faUser, faBuilding, IconDefinition } from '@fortawesome/free-solid-svg-icons';

/* Navs */
export interface Nav { url: string; icon: IconDefinition; content: string; }

export const navs: Nav[] = [
    { url: 'apartment-units', icon: faBuilding, content: 'Apartment' },
    { url: 'tenants', icon: faUser, content: 'Tenants' },

];
