import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      image
    }
  }
}`;

const CharactersList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  console.warn(error, data, loading);

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>
    {data.characters.results.map(character => {
      return <div>
        <h2>{character.name}</h2>
        <img src={character.image} alt="character.name" />
      </div>
    })}
  </div>;
}

export default CharactersList;