import './hero.css'

export default function Hero() {
    return (
        <div className="main heroblock">
            <div className="mainsvg">
                <img src="images/heroimg.svg" alt="Alpaca interface"></img>
            </div>
            <div className="info">
                <h1>Alpaca Now Open!</h1>
                <p>Capture notes, organize ideas, and create custom quizzes to turn what you read into what you remember.Capture notes, organize ideas, and create custom quizzes to turn what you read into what you remember.Capture notes, organize ideas, and create custom quizzes to turn what you read into what you remember.</p>
                <a href="https://alpaca.llamacoop.dev/" target='_blanck'>Try Alpaca</a>
            </div>
        </div>
    )
}