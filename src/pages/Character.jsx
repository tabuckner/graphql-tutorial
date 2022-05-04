import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>
    <h1>{data.character.name}</h1>
    <img src={data.character.image} alt={data.character.name} />
  </div>;
}

export default Character;