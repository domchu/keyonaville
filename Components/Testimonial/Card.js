import React from "react";
import Image from "next/image";

import nature20 from "../../public/images/nature20.jpg";
import nature17 from "../../public/images/nature17.jpg";

const Card = ({ img }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
        <img
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          alt="Testimonial 1"
          style={{
            height: 120,
            width: 120,
            border: "1px solid lightgrey",
            padding: 7,
          }}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          magni tempore vel, earum quidem facilis soluta numquam, illum
          excepturi voluptatem possimus illo. Obcaecati quas dolores sit quod id
          magnam laudantium?
        </p>
        <p style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: 600, color: "red" }}>Ochu DOMINIC</span>,
          Software engineer
        </p>
      </div>
    </>
  );
};
export default Card;
