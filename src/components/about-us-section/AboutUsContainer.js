import './style.css';
import littleLions from '../../images/littleLions.jpeg'

const AboutUsContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="about-us description__img-container">
                    <img src={littleLions} className="description__img"/>
                </div>
                <div className="about-us description-container">
                    <h1 className="description__title">About us</h1>
                    <p>Lion populations have declined by half in just a quarter century. Their loss signals the loss of
                        the wild in Africa. But, lions can return.
                    </p>
                    <p>If Africa’s parks and reserves were resourced and managed effectively and the communities around
                        them were supported, we could have three to four times the number of lions as we have today.
                        Lion recovery is within our grasp.</p>
                    <p>The Nat Geo Wild invests in the most innovative and effective projects across Africa that can recover lions and restore their landscapes. The NGW seeks, assesses, and invests in the best ideas for lion recovery from institutions large or small, with 100% of every dollar donated deployed directly on the ground.</p>
                </div>
            </div>
        </div>
    )
};

export default AboutUsContainer;
