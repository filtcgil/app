import { Folder, FileItem } from '../models/Folder';

export const getRootFolders = async (): Promise<Folder[]> => {
  // Mock: struttura iniziale Drive
  return [
    { id: '1', name: 'Biblioteca', children: [], files: [] },
    { id: '2', name: 'Contratti', children: [], files: [] },
    { id: '3', name: 'Welfare', children: [], files: [] },
    { id: '4', name: 'OO.SS.', children: [], files: [] },
    { id: '5', name: 'Tempo Libero', children: [], files: [] },
  ];
};

export const getFolderContents = async (folderId: string): Promise<{ folders: Folder[], files: FileItem[] }> => {
  // Mock semplice: cartelle vuote
  return { folders: [], files: [] };
};
