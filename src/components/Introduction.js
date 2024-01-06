import './Introduction.css';
import landingbackground from '../media/landing_background.png';
import IntroSlideshow from './IntroSlideshow'

export default function Introduction() {

    return (
        <div className="introduction">
            <div className="image-gallery">
                <div className="trade-discover">
                    <h1>Trade, Discover, <br />  and Track <span className="nft-text">NFTs </span>
                        <br />Ordinals!</h1>
                    <button className="trade-button">Trade</button>
                </div>
                <img className='intro_background' src={landingbackground} alt="Background" />
                <IntroSlideshow />
            </div>
        </div>
    );
}
