import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [cardData, setCardData] = useState([]);
  useEffect(()=>{
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
  },[])
  
  return (
    <div className="App">
      <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="StartBootstrap ">Start Bootstrap</button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        All Products
                      </a>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex fullcart">
                <a className="nav-link " href="">
                  <button class="btn btn-outline-dark" type="">
                    <i class="fas fa-shopping-cart"></i>
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill">
                      0
                    </span>
                  </button>
                </a>
              </form>
            </div>
          </div>
        </nav>
      </header>
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

export default App;
