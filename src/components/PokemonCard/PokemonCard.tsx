import type {
  PokemonDetailResponse,
  Type,
} from "../../interface/pokemonDetail";
import { typeColor } from "../../utils/typesColor";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string;
  name: string;
  id: number;
  types: Type[];
}

function PokemonCard({ image, name, id, types }: PokemonCardProps) {
  return (
    <div className="bg-[#253641] p-4 block w-full max-w-[275px] m-auto border border-default rounded-xl shadow-xs overflow-hidden">
      <div className="flex justify-center items-center bg-[url('/images/poke-card-bg.png')] bg-center rounded-xl bg-cover bg-no-repeat aspect-square w-full min-h-[168px] min-w-[168px]">
        <Link to={`/detail/${name}`}>
          <img
            src={image}
            alt={name}
            className="h-[218px] w-full p-10 object-contain drop-shadow-lg "
          />
        </Link>
      </div>
      <div className="pt-4 ">
        <a href="#">
          <h5 className=" text-white mb-2 text-xl font-bold capitalize">
            {name}
          </h5>
        </a>

        <div className="flex gap-2 mb-3">
          {types.map((t) => (
            <span
              key={t.type.name}
              className={`font-bold text-xs px-2 py-1 rounded-full capitalize ${typeColor[t.type.name] || "bg-gray-100 text-gray-600"}`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <p className="text-gray-300 text-xm ml-1">
          #{String(id).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;
