import axios from "axios";
import { POKEMON_BASE_URL } from "../utils/contant";
import type { PokemonDetailResponse } from "../interface/pokemonDetail";
import type { IResponse } from "../utils/้handleResponse";

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data: PokemonDetailResponse;
}

export const pokemonDetailService = {
  getPokemonDetail: async (
    name: string,
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
      return {
        status: response.status,
        data: response.data, // ✅ ส่ง data ออกไป
      };
    } catch (error: any) {
      return {
        status: error.response?.status,
        data: error.response?.data,
      };
    }
  },
};
