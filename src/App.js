import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Scroll from "./components/scroll/scroll.components";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setVaule]
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);

  // Only fetch once during during first render
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=493")
      .then((response) => response.json())
      .then((response) =>
        Promise.all(
          response.results.map((element) =>
            fetch({ url: element.url }.url).then((response) => response.json())
          )
        )
      )
      .then((finalPokemonData) => setPokemon(finalPokemonData));
  }, []);

  // only excute if pokemon or searchField changes
  useEffect(() => {
    const newFilteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPokemon(newFilteredPokemon);
  }, [pokemon, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Ultimate Pokédex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="search pokémon"
        className="pokemon-search-box"
      />
      <Scroll>
        <CardList pokemon={filteredPokemon} />
      </Scroll>
    </div>
  );
};

export default App;
