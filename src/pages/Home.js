import React from "react";
import InfoCard from "../components/InfoCard";
import Bin from "../recycle-bin.png"
import Helper from "../helper.png"
import Plane from "../plane.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Home() {

  const cards = 
    [
      {
        image: Bin,
        alt: "recycling bin",
        text: "We only source our products from sustainable companies."
      },
      {
        image: Plane,
        alt: "aeroplane",
        text: "We ship to anywhere within Europe, North America and Aisa."
      },
      {
        image: Helper,
        alt: "customer assistant",
        text: "We offer life time customer service and a minimum 3 year warranty."
      }
    ]

  return (
    <main className="home">
      <section className="tagline">
        <div className="hero">
          <div className="hero-left">
            <h1><small>don't want it</small><br /> electronit</h1>
          </div>
          <div className="hero-right"> 
            <FontAwesomeIcon icon={faRocket} size="2x"/>
          </div>
        </div>
      </section>
      <section className="values">
        <div className="cards">
          {cards.map((card, index) => (
            <InfoCard key={index} image={card.image} alt={card.alt} text={card.text} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home