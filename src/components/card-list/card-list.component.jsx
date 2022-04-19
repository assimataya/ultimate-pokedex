import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ pokemon }) => (
  <div className="card-list">
    {pokemon.map((pokemon) => {
      return <Card pokemon={pokemon} key={pokemon.id} />;
    })}
  </div>
);

export default CardList;
