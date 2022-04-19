import "./card.styles.css";

const Card = ({ pokemon }) => {
  const { id, name, height, weight, types } = pokemon;
  const newName = name[0].toUpperCase() + name.substring(1);
  return (
    <div className="card-container">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}
      >
        <img
          alt={`pokemon ${name}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          width="150px"
        />
        <h2>{newName}</h2>
        <div className="info-box">
          <p>{`Pokédex Number: #${id}`}</p>
          <p>{`Type: ${types.map((type) => type.type.name).join(" & ")}`}</p>
          <p>{`Height: ${height / 10} m`}</p>
          <p>{`Weight: ${weight / 10} kg`}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
