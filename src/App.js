import { useEffect, useState } from "react";
import { CAT_IMG_API, CAT_PHRASE_API } from "./settings/settings";
import Fetch from "./services/Fetch";

function App() {
  const [phrase, setPhrase] = useState(null);
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    Fetch(CAT_PHRASE_API).then((res) => {
      if (res.err) {
        console.log(res);
      } else {
        const { fact } = res;
        setPhrase(fact);
      }
    });
  }, []);

  useEffect(() => {
    if (!phrase) return;
    let firstWord = phrase.split(" ", 3).join(" ");
    const url = `${CAT_IMG_API}/cat/says/${firstWord}?json=true`;
    Fetch(url).then((res) => setCatImage(res.url));
  }, [phrase]);

  return (
    <main>
      <h1>App de gatitos </h1>
      {phrase && <p>{phrase}</p>}
      {catImage && <img src={`${CAT_IMG_API}/${catImage}`} alt={phrase}></img>}
    </main>
  );
}

export default App;
