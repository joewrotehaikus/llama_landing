import './contribute.css'

export default function Contribute() {
    return(
        <div className="main contribute">
            <div className="contrisvg">
                <img src="images/img8.png" alt="Alpaca interface"></img>
            </div>
            <div className="contribute_info">
                <h1>Contribute Now</h1>
                <p>Help us shape the future of learning. You can support Alpaca by donating, contributing to our open-source code, or designing courses. Every effort brings us closer to accessible, community-driven education.
                Join our mission and leave a lasting impact on learners everywhere.</p>
                <div className="contribute_btns">
                    <a href="https://alpaca.llamacoop.dev/" target='_blanck'>Donate</a>
                    <a href="https://alpaca.llamacoop.dev/" target='_blanck'>Design a course</a>
                    <a href="https://alpaca.llamacoop.dev/" target='_blanck'>Open Source</a>
                </div>
            </div>
        </div>
    )
}