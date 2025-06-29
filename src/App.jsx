// used this shortcut rafce for arrow functional compotent export default
import React from "react";

const App = () => {
  const username = "John";

  const names = ["Brad", "Mary", "Joe", "Sarah"];
  return (
    <div>
      <h1 className="text-5xl">{username}</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
