import { usePokemonListStore } from "../../store/pokemonList";
import SearchForm from "../../components/SearchForm";
import PokemonCard from "../../components/PokemonCard";

const HomePage = () => {
  const { pokemon, fetchPokemon } = usePokemonListStore();

  return (
    <div className="w-[90%] m-[auto] max-w-[1100px]">
      <div className="flex justify-center">
        <img
          src="/public/images/logo.webp"
          className="max-h-[80px] mt-[20px]"
          alt=""
        />
      </div>
      <SearchForm />

      {fetchPokemon.loading && (
        <div className="justify-center items-center flex h-[800px]">
          <div className="w-20 h-20 border-6 border-[#4CAFEB] border-t-transparent rounded-full animate-spin " />
        </div>
      )}
      {!fetchPokemon.loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px] justify-center">
          {pokemon.data?.map((item) => {
            return (
              <PokemonCard
                key={`pokemon-${item.id}`}
                image={item.image || ""}
                name={item.name}
                id={item.id}
                types={item.types}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
