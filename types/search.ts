import { Song } from './shared';

export interface Artist {
  name: string;
  type: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  image: string;
}

export interface SearchResults {
  topResult: Artist;
  songs: Song[];
}
