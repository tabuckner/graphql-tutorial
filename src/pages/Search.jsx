import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: {name: $name}) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState('');
  const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
      name,
    }
  });

  console.warn({ called, loading, error, data })

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
    </div>
  );
}

export default Search;