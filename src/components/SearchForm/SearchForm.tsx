import React from "react";
import { generationList, typesList, sortList } from "../../utils/optionList";
import { useSearchForm } from "./SearchForm.hook";

const SearchForm = () => {
  const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
    useSearchForm();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="generation"
            className="block mb-2.5 text-mb font-medium text-heading text-white"
          >
            Generation
          </label>
          <select
            {...fieldGeneration}
            id="generation"
            className="block capitalize w-full px-3 py-2.5 bg-[#253641] border border-gray-300 text-heading text-sm text-white rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] "
          >
            {generationList.map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={`generation-key-${index}`}
                  value={index}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="type"
            className="block mb-2.5 text-mb font-medium text-heading text-white"
          >
            Types
          </label>
          <select
            {...fieldType}
            id="type"
            className="block capitalize w-full px-3 py-2.5 bg-[#253641] border border-gray-300 text-heading text-sm text-white rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] "
          >
            {typesList.map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={`type-key-${index}`}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="sort"
            className="block mb-2.5 text-mb font-medium text-heading text-white"
          >
            Sort By
          </label>
          <select
            {...fieldSort}
            id="sort"
            className="block capitalize w-full px-3 py-2.5 bg-[#253641] border border-gray-300 text-heading text-sm text-white rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] "
          >
            {sortList.map((item, index) => {
              return (
                <option
                  className="capitalize"
                  key={`sort-key-${index}`}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="search"
            className="block mb-2.5 text-mb font-medium text-heading text-white"
          >
            Search
          </label>
          <input
            {...fieldKeyword}
            type="text"
            id="search"
            className="block w-full px-3 py-2.5 bg-[#253641] border border-gray-300 text-heading text-sm text-white rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] "
          />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
