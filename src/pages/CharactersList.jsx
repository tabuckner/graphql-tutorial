import { useCharacters } from '../hooks/useCharacters';


const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (error) {
    return <div><h2>Error!</h2><p>{error}</p></div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>
    {data.characters.results.map(character => {
      return <div key={character.id}>
        <h2>{character.name}</h2>
        <img src={character.image} alt="character.name" />
      </div>
    })}
  </div>;
}

export default CharactersList;