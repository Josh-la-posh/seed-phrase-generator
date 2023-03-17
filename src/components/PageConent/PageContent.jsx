import './PageContent.css';
import { word } from '../info';

export default function PageContent() {
  function generatePhrase() {
    window.location.reload()
  }
  return (
    <div className='page'>
      <div className="page__container">
        <h1 className="page__title">
          Seed Phrase Generator
        </h1>
        <p>Generate your 12 codes here</p>

        <div className="seed__phrases">
          {word.map((phrase, index) => {
            return (
              <div key={index} className="seed__container">
                <p>{phrase}</p>
              </div>
            )
          })}
        </div>
        <button className='seed__btn' onClick={generatePhrase}>Generate</button>
      </div>
    </div>
  )
}
