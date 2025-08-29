import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Story from "./components/story/Story";
import Itinerary from "./components/itinerary/Itinerary";
import Footer from "./components/footer/Footer";
import Countdown from "./components/countdown/Countdown";

const Home = () => {
  return (
    <div>
      <Header />
      <Story />
      <Itinerary />
      <Countdown />
    </div>
  );
};

export default Home;
