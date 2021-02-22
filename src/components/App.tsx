import { FormEvent, useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypesSelector";

const App = () => {
  const [term, setTerm] = useState("");
  const { searchRepositoriesAction } = useAction();

  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositoriesAction(term);
  };
  return (
    <div>
      <h1>Search For Packages</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}

      {!error && !loading && data.map((name) => <p key={name}>{name}</p>)}
    </div>
  );
};

export default App;
