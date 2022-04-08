import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://mockend.com/Karelus/discbase-frontend/posts")
      .then((response) => console.log(response))
      .catch((e) => console.error(e))
      .finally(() => console.log("something went wrong"));
  }, []);

  return (
    <div className="App">
      <h2>Foo</h2>
    </div>
  );
}

export default App;
