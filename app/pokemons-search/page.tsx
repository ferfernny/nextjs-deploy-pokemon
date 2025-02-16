"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PokemonsSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim()) {
      const params = new URLSearchParams({ name: search.toLowerCase() });
      router.push(`/pokemon?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon..."
        className="p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default PokemonsSearch;
