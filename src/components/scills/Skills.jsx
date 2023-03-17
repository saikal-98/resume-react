import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Skills = () => {
  return (
    <div>
      <center>
        <h2
          style={{
            fontStyle: "italic",
            fontFamily: "Dancing Script",
          }}
        >
          My Skills
        </h2>
      </center>
      <Carousel>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="d-block w-50"
              src="https://i.pinimg.com/564x/90/fc/25/90fc2530fab94dd7c6d56bdfd9271889.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="d-block w-50"
              src="https://i.pinimg.com/564x/ae/14/86/ae14867570c56ffc461b917135a655f0.jpg"
              alt="Second slide"
            />
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="d-block w-40"
              src="https://i.pinimg.com/564x/5a/10/dc/5a10dc26f67f4217c22136dbd69dbc47.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="d-block w-75"
              src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="d-block w-40"
              src="https://i.pinimg.com/564x/fc/97/e5/fc97e5a86e33afbc91c41c05d5553a8d.jpg"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Skills;
