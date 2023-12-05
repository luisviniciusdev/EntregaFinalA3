import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import './media.css';

import DefaultStructure from "../../components/DefaultStructure";
import mario001 from "../../assets/images/mario001.png";
import mario002 from "../../assets/images/mario002.png";
import CallToAction from "../../components/CallToAction";

const Home = () => {
    return (
        <DefaultStructure>

            {/* MAIN HOME */}
            <section id="main-home">
                <aside id="main-home-aside">
                    <div>
                        <h2 className="main-home-title"><span>Organize your game library!</span></h2>
                        <p className="main-home-title">Control all progress</p>
                    </div>
                    <p id="main-home-text">Always take care of your progress: Organize, track, and level up your gaming journey with MyGameList.</p>
                    <button id="main-home-button"><Link to="/register" className="main-home-button-link">Get Started</Link></button>
                </aside>

                <article id="main-home-article">
                    <img id="main-home-img" src={mario001} alt="Mario with Yoshi" />
                </article>
            </section>

            {/* BENEFITS SECTION */}
            <section id="benefits">
                <h3 id="benefits-title">Benefits</h3>

                <div id="benefits-box">
                    <article className="benefits-item">
                        <h4 className="benefits-item-title">Extensive Catalog</h4>
                        <p className="benefits-item-text">Offers a vast game database to help you quickly add titles to your collection.</p>
                    </article>

                    <article className="benefits-item">
                        <h4 className="benefits-item-title">Simple organization</h4>
                        <p className="benefits-item-text">Makes it easy to organize your game collection by platform, genre, progress status, and more.</p>
                    </article>

                    <article className="benefits-item">
                        <h4 className="benefits-item-title">Multiplatform Availability</h4>
                        <p className="benefits-item-text">Access it on any platform through web browsers whenever you want.</p>
                    </article>
                </div>
            </section>

            {/* AVALIATIONS */}
            <section id="avaliations">
                <h5 id="avaliations-title">What people are saying</h5>

                <div id="avaliations-principal-box">
                    <img id="avaliations-img" src={mario002} alt="Mario pointing" />

                    <div id="avaliations-box">
                        <article className="avaliations-item">
                            <p>"MyGameList has been a game-changer for me. Now, I can easily catalog my games and track my progress. The community is amazing too!"</p>
                            <p>Sarah</p>
                        </article>

                        <article className="avaliations-item">
                            <p>"MyGameList is a must-have for serious gamers. It helps me organize my collection, focus on unfinished games, and share opinions with the community. I can't live without it!"</p>
                            <p>Alex</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <CallToAction />

        </DefaultStructure>
    );
};

export default Home;
