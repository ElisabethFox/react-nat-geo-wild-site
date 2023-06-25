
import lionBackground from "../../images/lionBackground.png";
import lionText from "../../images/LION.png";
const Banner = () => {
    return (
        <section className="promo">
            <img className="promo__image" src={lionBackground} width="1920" height="1080" alt="Львица лежит и смотрит вдаль" />

                    {/*<div className="promo__controls">*/}
                    {/*    <div className="promo__scroll"></div>*/}
                    {/*    <button className="button" type="button">*/}
                    {/*        Watch The Movie*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    <div className="promo__text">
                        <h2>Why is the lion population in decline?</h2>
                        <p>Africa's lion population halved - killed by natural disasters and humans.</p>
                    </div>
        </section>
    )
};

export default Banner;
