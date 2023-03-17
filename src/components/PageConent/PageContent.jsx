import { useEffect, useState } from "react";
import "./PageContent.css";
import GenerateSeedPhrase from "../info";

export default function PageContent() {
  const [reload, setReload] = useState(false);

  const seed = GenerateSeedPhrase(12);
  const phrase = seed.split(" ");
  const result = phrase.join(", ");
  const word = result.split(", ");

  function generatePhrase() {
    setReload(true);
    reload && seed();
  }

  useEffect(() => {
    const regenerate = setTimeout(() => {
      setReload(false);
    }, 1000);
    return () => {
      clearTimeout(regenerate);
    };
  }, [reload, seed]);
  return (
    <div className="page">
      <div className="page__container">
        <h1 className="page__title">Seed Phrase Generator</h1>
        {reload ? (
          <div className="loader__img"><img src="../../../loader.gif" alt="" /></div>
        ) : (
          <p>Your codes has been generated</p>
        )}

        {(<div className="seed__phrases">
          {word.map((phrase, index) => {
            return (
              !reload && <div key={index} className="seed__container">
                <p>{phrase}</p>
              </div>
            );
          })}
        </div>)}
        <button className="seed__btn" onClick={generatePhrase}>
          Generate
        </button>
      </div>
    </div>
  );
}
