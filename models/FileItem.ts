export type FileType = 'pdf' | 'image' | 'link';

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  url?: string;
}
