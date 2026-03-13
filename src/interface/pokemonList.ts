export interface PokemonListResponse {
  count: number;
  next: string | null;
  previos: null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}
