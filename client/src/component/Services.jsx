import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaWater } from "react-icons/fa";
import "../style/services.css"
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Free refreshment point for the customers, enjoy the good Cocktails"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Hotel Offers hiking assistant to get experience of joy in mountains"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Transportation are free for the customer, to solve problems of getting late in work"
      },
      {
        icon: <FaWater />,
        title: "Swimming Pool",
        info:
          "There is swiming pool out there, for absolutely stanig environments"
      }
    ]
  };

  render() {
    return (
      <section className="services" data-aos="fade-up">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
