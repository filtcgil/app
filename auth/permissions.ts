export interface UserProfile {
  azienda: string;
  ruolo: string;
  regione: string;
  impianto: string;
}

// Restituisce i folderId visibili per l'utente
export const getAccessibleFolders = (user: UserProfile, folders: any[]) => {
  if (user.azienda === 'Trenitalia') {
    return folders.filter(f => f.name !== 'RFI');
  }
  return folders;
};
