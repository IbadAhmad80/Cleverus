import React from "react";
import NavBar from "../navbar";
import Footer from "../footer/index";
import axios from "axios";
import PlacesModal from "./pop-up";

axios.defaults.headers.common = {
  Authorization: `BEARER ${process.env.REACT_APP_API_KEY}`,
};

const Places = () => {
  const [places, setPlaces] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  // console.log("this is API Format", placesData);

  const getData = async () => {
    let {
      data: { businesses },
    } = await axios.get(
      "/v3/businesses/search?term=delis&limit=10&latitude=37.786882&longitude=-122.399972"
    );

    const placesDetails = await Promise.all(
      businesses?.map(async (place) => {
        return await axios.get(`/v3/businesses/${place.id}/reviews`);
      })
    );

    businesses?.map((place, index) => {
      businesses[index].reviews = placesDetails[index].data.reviews;
    });
    setPlaces(businesses);
    const bus = await shapePlacesObject(businesses);
    console.log(businesses, bus);
    // const res = await axios.post("/reviews", { data: businesses });
    // console.log("flask response", res);
  };

  // turning places objects into desired shape for backend
  const shapePlacesObject = (places) => {
    let businesses = [];
    let businsis = { name: null, google_ratings: null, reviews: [] };
    places.map((place) => {
      businsis.name = place.name;
      businsis.google_ratings = place.rating;
      businsis.reviews = [];
      place?.reviews.map((review) => {
        businsis.reviews.push(review.text);
      });
      // console.log("hhh", businsis);
      // console.log("seebled", businesses);
      businesses.push(businsis);
    });
    return businesses;
  };

  return (
    <div>
      <PlacesModal open={open} setOpen={setOpen} />
      <NavBar />
      <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: "150px 0 100px 0",
        }}
      >
        <h2>In Development Phase</h2>
        <button className="button" onClick={() => setOpen(true)}>
          Open big modal
        </button>

        <button
          style={{
            padding: "7px 15px",
            outline: "none",
            backgroundColor: "red",
            border: "1px solid white",
            color: "white",
            marginTop: "10px",
          }}
          onClick={getData}
        >
          Get Data
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Places;
