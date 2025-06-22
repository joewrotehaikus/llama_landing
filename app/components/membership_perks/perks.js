import './perks.css';
import Image from "next/image";
import appImg from "@/public/images/Launchpad.svg";
import studentImg from "@/public/images/Student.svg";
import designImg from "@/public/images/Responsive.svg";
import moreImg from "@/public/images/More.svg";

export default function Perks(){
    return(
    <div className="main membership-perks">
        <h2>Our Services</h2>
        <div className="perkcontainer">
            <div className="perk"><Image src={appImg} alt="Custom app logo"></Image><h3>Development</h3></div>
            <div className="perk"><Image src={studentImg} alt="mentoring and tutoring"></Image><h3>Mentoring</h3></div>
            <div className="perk"><Image src={designImg} alt="website and logo design"></Image><h3>Design</h3></div>
            <div className="perk"><Image src={moreImg} alt="More services"></Image><h3>More</h3></div>
        </div>
    </div>
);
} 