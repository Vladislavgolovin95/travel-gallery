import React from "react";
import Heading from "../Heading/Heading";
import GalleryCard from "./GalleryCard";
import tbilisiImg from "../../assets/tbilisi.png";
import istanbulImg from "../../assets/istanbul.png";
import dubaiImg from "../../assets/dubai.png";
import phuketImg from "../../assets/phuket.png";

const trips = [
  {
    title: 'Тбилиси',
    month: 'апрель',
    expenses: '83.000',
    img: tbilisiImg,
    transport: 'на автобусе',
    people: 10,
  },
  {
    title: 'Стамбул',
    month: 'март',
    expenses: '110.000',
    img: istanbulImg,
    transport: 'на самолете',
    people: null,
  },
  {
    title: 'Дубай',
    month: 'июнь',
    expenses: '220.000',
    img: dubaiImg,
    transport: 'на самолете',
    people: 15,
  },
  {
    title: 'Пхукет',
    month: 'сентябрь',
    expenses: '135.000',
    img: phuketImg,
    transport: 'самолет + паром',
    people: 13,
  },
];

function GallerySection() {
  return (
    <>
      <Heading />
      { trips.map(trip => {
        return(
          <GalleryCard 
            title={trip.title}
            month={trip.month}
            expenses={trip.expenses}
            img={trip.img}
            transport={trip.transport}
            people={trip.people} 
          />
        )
      }) }
    </>
  );
}

export default GallerySection;