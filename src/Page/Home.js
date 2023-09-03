import React from "react";
import Header from "../Components/Header";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieValue = Cookies.get("auth_token");
        const loginDataFromCookie = cookieValue
          ? JSON.parse(cookieValue)
          : null;
        const items = await axios.get("http://localhost:3000/" + "home", {
            headers: {
              Authorization: `Bearer ${loginDataFromCookie}`,
            },
          });
        if (items === "login") {
          alert("Session Expired");
          navigate("/");
        }
        setCardData(items);
      } catch (error) {
        console.error(error);
      }
      fetchData()
    };})
  useEffect(() => {
    setCardData([
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Fancy Product",
        isRating: false,
        money: "$40.00 - $80.00",
        btnContent: "View option",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Special Item",
        isRating: true,
        money: "$20.00 $18.00",
        btnContent: "Add to cart",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Sale Item",
        isRating: false,
        money: "$20.00 $18.00",
        btnContent: "Add to cart",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Popular Item",
        isRating: true,
        money: "$40.00 - $80.00",
        btnContent: "Add to cart",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Sale Item",
        isRating: false,
        money: "$40.00 - $80.00",
        btnContent: "Add to cart",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Fancy Product",
        isRating: false,
        money: "$40.00 - $80.00",
        btnContent: "view Option",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Special Item",
        isRating: true,
        money: "$40.00 - $80.00",
        btnContent: "Add to cart",
      },
      {
        imageurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        heading: "Popular Item",
        isRating: true,
        money: "$40.00 - $80.00",
        btnContent: "Add to cart",
      },
    ]);
  }, []);
  return (
    <div>
      <Header />
      <div className="Shopinstyle bg-dark mb-5">
        <h1>Shop in style</h1>
        <h5>With this shop hompeage template</h5>
      </div>
      <div className="container">
        <div className="row">
          {cardData.map((data) => {
            return (
              <Card
                imageurl={data.imageurl}
                heading={data.heading}
                isRating={data.isRating}
                money={data.money}
                btnContent={data.btnContent}
              />
            );
          })}
        </div>
      </div>
      <footer className="mb-0 mt-5">
        <div className="bg-dark">
          <h5 className="mb-0 mt-5">Copyright © Your Website 2023</h5>
        </div>
      </footer>
    </div>
  );
}

export default Home;
