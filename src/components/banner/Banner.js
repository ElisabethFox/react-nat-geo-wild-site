
import lionBackground from "../../images/lionBackground.png";
import lionText from "../../images/LION.png";
const Banner = () => {
    return (
        <section className="promo">
            <img className="promo__image" src={lionBackground} width="1920" height="1080" alt="Львица лежит и смотрит вдаль" />

                    <div className="promo__controls">
                        <div className="promo__scroll"></div>
                        <button className="button" type="button">
                            Watch The Movie
                        </button>
                    </div>

                    <div className="promo__text">
                        <h2>Why killed animals</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam feugiat aliquam amet, enim
                            etiam mattis ac tortor.
                            Diam nunc, conguer</p>
                    </div>
        </section>
    )
};

export default Banner;