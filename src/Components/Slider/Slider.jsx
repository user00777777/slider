import React from 'react'
import ImageSlider from './ImageSlider';

export default function Slider() {
    const slides = [
        { url: "https://drive.google.com/file/d/1dyUxqKPzAUVY_4ZdtqMBaTWur48-HbNK/view?usp=sharing", title: "boat" },
        { url: "https://img.freepik.com/free-photo/beautiful-architecture-building_74190-6332.jpg?size=626&ext=jpg", title: "boat" },
        { url: "https://img.freepik.com/free-photo/japan-street-daytime_23-2148942935.jpg?size=626&ext=jpg", title: "forest" },
        { url: "https://img.freepik.com/free-photo/new-york-city-skyline-black-and-white_649448-4625.jpg?size=626&ext=jpg", title: "city" },
        { url: "https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?size=626&ext=jpg", title: "italy" },
        { url: "https://fitnesscity.com.ua/wp-content/uploads/2018/06/1-1.jpg", title: "italy" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
      return (
        <div>
          <h1>Hello Yurii!!</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>
      );
}
