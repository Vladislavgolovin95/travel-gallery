import React from "react";
import peopleImg from "../../assets/people.png"
import "./GalleryCard.css";

function GalleryCard(props) {
  if (props.people == null) {
    return (
      <div className="gallery-card">
      <div className="card-label">
        <div className="card-label_transport">{props.transport}</div>
      </div>
      <img className="gallery-card_img" src={props.img} alt="" />
      <p className="gallery-card_text">{props.title}, {props.month} — {props.expenses}</p>
    </div>
    )
  }
  return (
    <div className="gallery-card">
      <div className="card-label">
        <div className="card-label_transport">{props.transport}</div>
        <div className="card-label_people">
          <div>{props.people}</div>
          <img className="card-label_peopleImg" src={peopleImg} alt="" />
        </div>
      </div>
      <img className="gallery-card_img" src={props.img} alt="" />
      <p className="gallery-card_text">{props.title}, {props.month} — {props.expenses}</p>
    </div>
  );
}

export default GalleryCard;