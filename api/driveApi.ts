import { Folder, FileItem } from '../models/Folder';

/**
 * STEP 4A – MOCK (ora)
 * STEP 4B – Drive API reale (stessa firma)
 */

export async function getRootFolders(): Promise<Folder[]> {
  return [
    { id: 'welfare', name: 'Welfare' },
    { id: 'biblioteca', name: 'Biblioteca' },
    { id: 'contratti', name: 'Contratti' },
    { id: 'oo.ss', name: 'OO.SS.' },
    { id: 'tempo-libero', name: 'Tempo Libero' }
  ];
}

export async function getFolderContents(
  folderId: string
): Promise<{ folders: Folder[]; files: FileItem[] }> {
  return {
    folders: [
      { id: `${folderId}-1`, name: 'Sottocartella 1' },
      { id: `${folderId}-2`, name: 'Sottocartella 2' }
    ],
    files: [
      { id: `${folderId}-file-1`, name: 'Documento.pdf', mimeType: 'application/pdf' }
    ]
  };
}
