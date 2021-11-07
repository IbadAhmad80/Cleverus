import React from "react";
import "../css/style.css";
import { AiFillStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { useHistory } from "react-router";

const SimilarPlaces = () => {
  const history = useHistory();
  const place = {
    id: "FmGF1B-Rpsjq1f5b56qMwg",
    name: "Molinari Delicatessen",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/4gRY9rVs8JyHvngljSzXyA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/molinari-delicatessen-san-francisco?adjust_creative=K48vvtnDxdSaEsCq-_p7mw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=K48vvtnDxdSaEsCq-_p7mw",
    review_count: 1193,

    rating: 4.5,
    price: "$$",
    location: {
      address1: "373 Columbus Ave",
      address2: "",
      address3: "",
      city: "San Francisco",
      zip_code: "94133",
      country: "US",
      state: "CA",
      display_address: ["373 Columbus Ave", "San Francisco, CA 94133"],
    },
    reviews: [
      {
        id: "qHtTiTCMK_EFue2dsaOFaA",
        url: "https://www.yelp.com/biz/north-india-restaurant-san-francisco?adjust_creative=K48vvtnDxdSaEsCq-_p7mw&hrid=qHtTiTCMK_EFue2dsaOFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=K48vvtnDxdSaEsCq-_p7mw",
        text: "Great place to be! \n\nDelicious food! I definitely recommend this place to enjoy Indian food.",
        rating: 5,
        time_created: "2021-10-01 22:18:06",
        user: {
          id: "pnuKRp63Udfukh4PahUycQ",
          profile_url:
            "https://www.yelp.com/user_details?userid=pnuKRp63Udfukh4PahUycQ",
          image_url: null,
          name: "Moein S.",
        },
      },
      {
        id: "sE4E7JOtix59681fn8LcHw",
        url: "https://www.yelp.com/biz/north-india-restaurant-san-francisco?adjust_creative=K48vvtnDxdSaEsCq-_p7mw&hrid=sE4E7JOtix59681fn8LcHw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=K48vvtnDxdSaEsCq-_p7mw",
        text: "Found this place late on Tuesday. Food was good and service was quick which is appreciated! Warriors were playing on all tvs with good sound system which is...",
        rating: 4,
        time_created: "2021-10-19 21:56:49",
        user: {
          id: "5qmD5ZAW7WAx32BKkxGX-w",
          profile_url:
            "https://www.yelp.com/user_details?userid=5qmD5ZAW7WAx32BKkxGX-w",
          image_url: null,
          name: "Komal G.",
        },
      },
      {
        id: "PRJ1cYcCqzRMJz0_t_Bkpw",
        url: "https://www.yelp.com/biz/north-india-restaurant-san-francisco?adjust_creative=K48vvtnDxdSaEsCq-_p7mw&hrid=PRJ1cYcCqzRMJz0_t_Bkpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=K48vvtnDxdSaEsCq-_p7mw",
        text: "Came here on a Thursday night, opens late in the neighborhood, quick to get seated, attentive service, and the food hit the spot. All at a very reasonable...",
        rating: 4,
        time_created: "2021-09-30 21:39:01",
        user: {
          id: "j8Md6J5mQVTdGbRCbGoGDw",
          profile_url:
            "https://www.yelp.com/user_details?userid=j8Md6J5mQVTdGbRCbGoGDw",
          image_url: null,
          name: "Ming Fai L.",
        },
      },
    ],
    total: 1921,
    possible_languages: ["en", "fr", "tr"],
    phone: "+14154212337",
    display_phone: "(415) 421-2337",
    distance: 1465.2460213942109,
  };
  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
                <div class="hotel-card_images">
                  <div>
                    <img
                      src={place?.image_url}
                      className="similar-place-img"
                      alt="Hotel Image"
                    />
                  </div>
                </div>
              </div>
              <div class="hotel-card_info  pt-3 pb-4 px-2">
                <div class="d-flex align-items-center mb-0">
                  <h6
                    class="mb-0 location-name"
                    onClick={() =>
                      history.push({
                        pathname: "/places-details",
                        state: { place },
                      })
                    }
                  >
                    {place?.name}
                  </h6>
                </div>
                <div class=" mx-2">
                  <i class="fa fa-star text-warning">
                    <AiFillStar />
                  </i>
                  <i class="fa fa-star text-warning">
                    <AiFillStar />
                  </i>
                  <i class="fa fa-star text-warning">
                    <AiFillStar />
                  </i>
                  <i class="fa fa-star text-warning">
                    <AiFillStar />
                  </i>
                  <i class="fa fa-star text-warning">
                    <AiFillStar />
                  </i>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="hotel-card_details">
                    <div class="text-black mb-2">
                      <i class="fas fa-map-marker-alt">
                        <FiMapPin />
                      </i>
                      <span className="small-text mx-2">
                        {place?.location.address1}, {place?.location.city}
                      </span>
                    </div>
                    {/*here goes that section*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimilarPlaces;

// <div className="mt-0 mb-0">
// <i className="quote-icon">
//   <FaQuoteRight />
// </i>
// <span className=" mx-2 review text-muted">
//   <span>
//     " {place?.reviews[0]?.text.slice(0, 70)} ....
//   </span>
// </span>
// </div>
