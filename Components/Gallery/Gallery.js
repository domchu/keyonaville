import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { Box } from "@chakra-ui/react";

const images = [
  { id: "1", imageName: "1.jpg", tag: "playground" },
  { id: "2", imageName: "2.jpg", tag: "excursion" },
  { id: "3", imageName: "3.jpg", tag: "ict" },
  { id: "4", imageName: "4.jpg", tag: "library" },
  { id: "5", imageName: "5.jpg", tag: "students" },
  { id: "6", imageName: "5.jpg", tag: "events" },
  { id: "7", imageName: "6.jpg", tag: "playground" },
  { id: "8", imageName: "7.jpg", tag: "excursion" },
  { id: "9", imageName: "8.jpg", tag: "ict" },
  { id: "10", imageName: "9.jpg", tag: "library" },
  { id: "11", imageName: "10.jpg", tag: "students" },
  { id: "12", imageName: "11.jpg", tag: "events" },
  { id: "13", imageName: "12.jpg", tag: "playground" },
  { id: "14", imageName: "13.jpg", tag: "excursion" },
  { id: "15", imageName: "14.jpg", tag: "ict" },
  { id: "16", imageName: "15.jpg", tag: "library" },
  { id: "17", imageName: "16.jpg", tag: "students" },
  { id: "18", imageName: "17.jpg", tag: "events" },
  { id: "19", imageName: "18.jpg", tag: "playground" },
  { id: "20", imageName: "19.jpg", tag: "excursion" },
  { id: "21", imageName: "20.jpg", tag: "ict" },
];

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <>
      <div className="app" handleSetTag={setTag}>
        <TagButton name="all" handleSetTag={setTag} />
        <TagButton name="playground" handleSetTag={setTag} />
        <TagButton name="excursion" handleSetTag={setTag} />
        <TagButton name="ict" handleSetTag={setTag} />
        <TagButton name="library" handleSetTag={setTag} />
        <TagButton name="students" handleSetTag={setTag} />
        <TagButton name="events" handleSetTag={setTag} />
        <div>
          {filteredImages.map((image) => (
            <div key={image.id}>
              <Image
                // src={`/assets/${image.imageName}`}the images must be in public
                src={`/assets/${image.imageName}`}
                alt="Gallery Images"
                height={200}
                width={200}
                className="gallery-images"
              />
              {/* {image.imageName} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button onClick={() => handleSetTag(name)}>{name.toUpperCase()} </button>
  );
};
export default Gallery;
