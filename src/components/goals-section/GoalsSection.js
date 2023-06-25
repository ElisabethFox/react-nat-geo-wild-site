import './style.css';
import lionsPair from '../../images/lionsPair.jpeg';

const GoalsSection = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="about-us description-container">
                    <h1 className="description__title">Our goals</h1>
                    <p>The lion population is estimated to have almost halved during the last quarter century. There are
                        only about 20,000 lions remaining in Africa. The NGW aspires to a doubling of the number of
                        lions, gaining back the half of lions we’ve lost in the past 25 years. Though ambitious, this
                        goal is achievable: recent research indicates that the protected area network alone could
                        support a population of lions three to four times the continental total if they were resourced
                        and managed better.</p>
                    <h5>The NGW has a three-pronged strategy for lion recovery:</h5>
                    <ul>
                        <li>
                            Expand the Conservation Footprint
                        </li>
                        <li>
                            Build the Will
                        </li>
                        <li>
                            Scale the Funding
                        </li>
                    </ul>

                </div>
                <div className="about-us description__img-container">
                    <img src={lionsPair} className="description__img"/>
                </div>
            </div>
        </div>
    )
};

export default GoalsSection;
