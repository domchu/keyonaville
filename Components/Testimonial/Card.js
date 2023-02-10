import React from "react";
import Image from "next/image";
import nature19 from "../../public/images/nature19.jpg";

const Card = ({ img }) => {
  return (
    <>
      <div className="">
        <Image
          imgprops={{ style: { borderRadius: "50%" } }}
          src={img}
          alt="Testimonial"
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
        <p>
          <span>Ochu DOMINIC</span> Software engineer
        </p>
      </div>
    </>
  );
};
export default Card;
