import React from "react";
import "./style.css";
import "./media.css";

import DefaultStructure from "../../components/DefaultStructure";
import mario003 from "../../assets/images/mario003.avif";
import CallToAction from "../../components/CallToAction";

const About = () => {
    return (
        <DefaultStructure>
            <section id="main-about">
                <img id="main-about-img" src={mario003} alt="Mario with Friends" />
                <p>Long ago, MyGameList was just a shared dream among four college friends who were all grappling with the same dilemma: a growing collection of games and no efficient way to keep track of their progress. Frustrated by the disorganization and lack of visibility into their games, they decided to join forces and create the solution all gamers had been waiting for. What began as a college project quickly turned into an incredible journey, and thus, MyGameList was born.</p>
                <p>Our mission is simple yet powerful: to empower every gamer to take full control of their gaming journey. We want every gamer, from newcomers to veterans, to enjoy a richer and more organized gaming experience. With MyGameList, you can finally organize your collection, track your progress in every title, and discover new amazing games. We are committed to providing the best platform for gamers worldwide, a community where you can share, explore, and celebrate your passion for gaming. Join us on this exciting journey, and let's elevate your gaming to a whole new level!</p>
            </section>

            <CallToAction />
        </DefaultStructure>
    );
};

export default About;
