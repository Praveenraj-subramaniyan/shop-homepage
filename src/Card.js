import React from "react";
import "./Card.css";

function Card(data) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mt-3 mb-3 text-center carddiv">
      <div class="card">
        <img class="card-img-top" src={data.imageurl} alt="Card image" />
        <div class="card-body cardbodydiv">
          <h4 class="card-title">{data.heading}</h4>
          {data.isRating && (
            <div>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
            </div>
          )}
          <p class="card-text">{data.money}</p>
          <a href="#" class={`btn btn-outline-dark ${!data.isRating? "mt-4 mb-3" : "mb-3" }`}>
            {data.btnContent}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
