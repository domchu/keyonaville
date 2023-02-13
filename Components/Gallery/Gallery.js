import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";


const images = [
  { id: "1", imageName: "1.jpg", tag: "playground" },
  { id: "2", imageName: "2.jpg", tag: "excursion" },
  { id: "3", imageName: "3.jpg", tag: "ict" },
  { id: "4", imageName: "4.jpg", tag: "library" },
  { id: "5", imageName: "5.jpg", tag: "students" },
  { id: "6", imageName: "6.jpg", tag: "events" },
  { id: "7", imageName: "7.jpg", tag: "playground" },
  { id: "8", imageName: "8.jpg", tag: "excursion" },
  { id: "9", imageName: "9.jpg", tag: "ict" },
  { id: "10", imageName: "10.jpg", tag: "library" },
  { id: "11", imageName: "11.jpg", tag: "students" },
  { id: "12", imageName: "12.jpg", tag: "events" },
  { id: "13", imageName: "13.jpg", tag: "playground" },
  { id: "14", imageName: "14.jpg", tag: "excursion" },
  { id: "15", imageName: "15.jpg", tag: "ict" },
  { id: "16", imageName: "16.jpg", tag: "library" },
  { id: "17", imageName: "17.jpg", tag: "students" },
  { id: "18", imageName: "18.jpg", tag: "events" },
  { id: "19", imageName: "19.jpg", tag: "playground" },
  { id: "20", imageName: "20.jpg", tag: "excursion" },
  { id: "21", imageName: "21.jpg", tag: "ict" },
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
      <Box>
        <Box className="title">
          <h2>
            <span>/</span>KEYONAVILLE GALLERY &#8594;
          </h2>
        </Box>
        <div className="app" handleSetTag={setTag}>
          <Box className="btn-tag">
            <TagButton name="all" handleSetTag={setTag} />
            <TagButton name="playground" handleSetTag={setTag} />
            <TagButton name="excursion" handleSetTag={setTag} />
            <TagButton name="ict" handleSetTag={setTag} />
            <TagButton name="library" handleSetTag={setTag} />
            <TagButton name="students" handleSetTag={setTag} />
            <TagButton name="events" handleSetTag={setTag} />
          </Box>
          <div className="gallery-container">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <Image
                  // the images must be in public
                  src={`/assets/${image.imageName}`}
                  alt="Gallery Images"
                  height={200}
                  width={200}
                  className="gallery-images"
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button className="tags" onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;
