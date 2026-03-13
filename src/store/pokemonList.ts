import { create } from "zustand";
import type { PokemonDetailResponse } from "../interface/pokemonDetail";

const initStore = {
  pokemon: {
    data: [],
    loading: false,
    error: null,
  },
  fetchPokemon: {
    data: [],
    loading: false,
    error: null,
  },
};

type pokemonType = {
  data: PokemonDetailResponse[];
  loading: boolean;
  error: null | any;
};

type UsePokemonListStore = {
  pokemon: pokemonType;
  fetchPokemon: pokemonType;
  setPokemonList: (value: pokemonType) => void;
  setFetchPokemonList: (value: pokemonType) => void;
  clearPokemon: () => void;
};

export const usePokemonListStore = create<UsePokemonListStore>((set) => ({
  ...initStore,
  setPokemonList: (value: pokemonType) => set({ pokemon: value }),
  setFetchPokemonList: (value: pokemonType) => set({ fetchPokemon: value }),
  clearPokemon: () => set({ ...initStore }),
}));
