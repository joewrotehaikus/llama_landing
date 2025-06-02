import './footer.css'

export default function Footer(){
    return(
        <div className="main footer">
            <div className="footer-Upper">
                <div className="footer-Upper-left">
                    <div className="footer-col">
                    <div className="footer-Heading">Projects</div>
                    <div className="foot-list">
                        <a href="#">Alpaca</a>
                        <a href="#">Scholar Programme</a>
                    </div>
                    </div>
                    <div className="footer-col">
                    <div className="footer-Heading">Quick Links</div>
                    <div className="foot-list">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                    </div>
                    </div>
                </div>
                <div className="footer-Upper-right"></div>
            </div>
            <div className="footer-Lower">LLAMA LLC based out of Virginia, USA</div>
        </div>
    )
}