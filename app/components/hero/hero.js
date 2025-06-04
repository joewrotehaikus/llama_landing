import './hero.css'

export default function Hero() {
    return (
        <div className="main heroblock">
            <div className="mainsvg">
                <img src="images/heroimg.svg" alt="Alpaca interface"></img>
            </div>
            <div className="info">
                <h1>Alpaca Now Open!</h1>
                <p>Turn knowledge into lasting memory. With Alpaca, you can capture notes, organize ideas, and build custom quizzes—all in one place. Whether you're studying, researching, or just learning for fun, Alpaca helps you retain what matters most.</p>
                <a href="https://alpaca.llamacoop.dev/" target='_blanck'>Try Alpaca</a>
            </div>
        </div>
    )
}