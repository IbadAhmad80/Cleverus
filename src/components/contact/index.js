import React from "react";
import Form from "./form";
import HeroSection from "./hero-section";
// const Map = setTimeout(() => import("./map"), {
//   loading: () => "Loading...",
// });
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Map from "./map";

export default function Contact() {
  const key =
    "pk.eyJ1IjoiaWJhZGFobWFkIiwiYSI6ImNra3JzNWt2ajBsOXQyb282YTkzNHZic2cifQ.Axi1cRU6bZqpLkvlduR9Cg";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${key}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, [url]);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Form />
      <Map locations={locations} />
      <Footer />
    </div>
  );
}
