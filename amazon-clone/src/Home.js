import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1234"
          title="Echo Plus (2nd Gen), Charcoal Fabric + Philips Hue White bulb E27"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91%2B3HHJDGKL._AC_SY355_.jpg"
        />
        <Product
          id="1234"
          title="Klarstein DryFy Connect 40 Dehumidifier - WiFi Interface, Dehumidification Capacity 40L / 24h, 360 m³ / h, Rooms of 35-45 m²"
          price={219.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Vxla4gqXL._AC_SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="All-New Fire HD 8 Tablet,HD display, 32 GB, Black with Special Offers, designed for portable entertainment"
          price={64.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61LiWfgmKqL._AC_SX522_.jpg"
        />
        <Product
          id="1234"
          title="New Apple iPhone SE (64GB) - White"
          price={419}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/817NmEWIdwL._AC_SX679_.jpg"
        />
        <Product
          id="1234"
          title="Oral-B Smart 4 4000 W 3D White Electric Toothbrush Rechargeable Powered By Braun, 1 Pink"
          price={49.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81hHEo5qdlL._AC_SX569_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="ECOVACS ROBOTICS N79S Robot Vacuum Cleaner High Suction, Auto Self-Charging Robotic Vacuum Cleaner, Drop Sensor, Alexa & App Connect, Works On Hard Floor & Low Pile Carpet, Pet Hair -2 Year Warranty"
          price={219.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61Cg-bBqGjL._AC_SY355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
