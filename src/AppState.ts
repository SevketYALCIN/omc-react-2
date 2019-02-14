export interface AppState {
	searchText: string;
  gifs: Gif[];
  user?: string;
  userInput?: string;
  modalOpen: boolean;
}

export interface Gif {
  id: string;
  title: string;
  embed_url: string;
}