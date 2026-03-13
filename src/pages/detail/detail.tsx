import PokemonCard from "../../components/PokemonCard";
import type { PokemonDetailResponse } from "../../interface/pokemonDetail";
import { pokemonListService, pokemonDetailService } from "../../service";
import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import { typeColor, typeBgColor } from "../../utils/typesColor";

type pokemonType = {
  data: PokemonDetailResponse | undefined;
  loading: boolean;
  error: null | any;
};

const DetailPage = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<pokemonType>({
    data: undefined,
    loading: true,
    error: null,
  });

  const callData = async (name: string) => {
    const response = await pokemonDetailService.getPokemonDetail(name);
    if (response.status === 200) {
      if (response.data)
        setPokemon({
          data: {
            ...response.data,
            image:
              response.data.sprites.other.dream_world.front_default ||
              response.data.sprites.other["official-artwork"].front_default,
          },
          loading: false,
          error: null,
        });
    } else {
      setPokemon({
        data: undefined,
        loading: false,
        error: response.error,
      });
    }
  };
  useEffect(() => {
    if (name) callData(name);
  }, [name]);

  const firstType = pokemon.data?.types[0]?.type.name || "";

  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/public/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>

      <div className="w-[90%] max-w-[500px] m-auto mt-5">
        <Link
          to={"/"}
          className="inline-flex items-center gap-1 border border-[#4CAFEB] hover:bg-[#4CAFEB] px-4 py-2 rounded-2xl font-semibold text-[#4CAFEB] hover:text-white text-m transition-colors"
        >
          ← Back
        </Link>

        {pokemon.data && (
          <div className=" p-4 block m-auto rounded-xl shadow-xs overflow-hidden">
            <div className=" relative flex justify-center items-center rounded-xl bg-cover bg-no-repeat aspect-square w-full h-[400px] ">
              <img
                src="/images/pokemon_bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain "
              />
              <img
                src={pokemon.data.image}
                alt={pokemon.data.name}
                className="relative z-10 w-[50%] h-[50%] object-contain drop-shadow-lg"
              />
            </div>
            <div className=" bg-[#253641] rounded-[20px] p-4 my-[20px]">
              <div className="pt-4 flex justify-between items-start flex-wrap gap-2.5">
                <h5 className=" text-white text-xl font-bold capitalize">
                  {pokemon.data.name}
                </h5>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-2 mb-3">
                    {pokemon.data.types.map((t) => (
                      <span
                        key={t.type.name}
                        className={`font-bold text-xm px-2 py-1 rounded-full capitalize ${typeColor[t.type.name] || "bg-gray-100 text-gray-600"}`}
                      >
                        {t.type.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 flex-wrap gap-2.5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-x-[10px]">
                    <div className="text-[#4CAFEB] font-semibold">Heigth</div>
                    <div className=" text-white">
                      {(pokemon.data.height / 10).toFixed(2)} m.
                    </div>
                  </div>
                  <div className="flex gap-x-[10px]">
                    <div className="text-[#4CAFEB] font-semibold">Weigth</div>
                    <div className=" text-white ">
                      {(pokemon.data.weight / 10).toFixed(2)} kg.
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-xl ml-1">
                  #{String(pokemon.data.id).padStart(3, "0")}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="text-white  mt-4">
                  <h5 className="font-semibold mb-2">Abilities</h5>
                  <div className="grid grid-cols-1  gap-3 mt-1 text-center ">
                    {pokemon.data.abilities.map((t) => {
                      return (
                        <div
                          className={`text-white font-semibold p-2 rounded-2xl capitalize ${typeBgColor[firstType] || "bg-gray-500"}`}
                        >
                          {t.ability.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-white  mt-4">
                  <h5 className="font-semibold mb-2">State</h5>
                  <div className="grid grid-cols-1 gap-2.5 mt-4">
                    {pokemon.data.stats.map((t) => {
                      return (
                        <div className="flex gap-x-[10px] justify-between">
                          <div className="text-[#4CAFEB] font-semibold capitalize">
                            {t.stat.name}
                          </div>
                          <div className=" text-white ">{t.base_stat}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
