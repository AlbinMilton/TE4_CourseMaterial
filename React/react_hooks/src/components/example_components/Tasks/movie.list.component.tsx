import { useState } from "react";

const MovieListComponent = () => {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addMovie = () => {
    if (!input.trim()) return;
    setList((prev) => [...prev, input]);
    setInput("");
  };

  const removeMovie = (index: number) => {
    const filtered = list.filter((_, i) => i !== index);
    setList(filtered);
  };
  return (
    <div>
      <h2> Exercise 6 </h2>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="New movie"
      />
      <button onClick={addMovie}>Add Movie</button>

      {list.length && (
        <ol>
          {list.map((movie, i) => (
            <li key={i}>
              {movie} <button onClick={() => removeMovie(i)}>X</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default MovieListComponent;
