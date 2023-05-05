import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

// storing all the images as json objects.
const images = [
  { id: "1", imageName: "1.jpeg", tag: "facilities" },
  { id: "2", imageName: "2.jpeg", tag: "excursion" },
  { id: "3", imageName: "3.jpg", tag: "sports" },
  { id: "4", imageName: "4.jpeg", tag: "cultural" },
  { id: "5", imageName: "5.jpeg", tag: "students" },
  { id: "6", imageName: "6.jpeg", tag: "events" },
  { id: "7", imageName: "7.jpeg", tag: "facilities" },
  { id: "8", imageName: "8.jpeg", tag: "excursion" },
  { id: "9", imageName: "9.jpg", tag: "sports" },
  { id: "10", imageName: "10.jpeg", tag: "cultural" },
  { id: "11", imageName: "11.jpeg", tag: "students" },
  { id: "12", imageName: "12.jpeg", tag: "events" },
  { id: "13", imageName: "13.jpeg", tag: "facilities" },
  { id: "14", imageName: "14.jpeg", tag: "excursion" },
  { id: "15", imageName: "15.jpg", tag: "sports" },
  { id: "16", imageName: "16.jpeg", tag: "cultural" },
  { id: "17", imageName: "17.jpeg", tag: "students" },
  { id: "18", imageName: "18.jpeg", tag: "events" },
  { id: "19", imageName: "19.jpeg", tag: "facilities" },
  { id: "20", imageName: "20.jpeg", tag: "excursion" },
  { id: "21", imageName: "21.jpg", tag: "sports" },
  { id: "22", imageName: "22.jpeg", tag: "cultural" },
  { id: "23", imageName: "23.jpeg", tag: "students" },
  { id: "24", imageName: "24.jpeg", tag: "events" },
  { id: "25", imageName: "25.jpg", tag: "facilities" },
  { id: "26", imageName: "26.jpeg", tag: "excursion" },
  { id: "27", imageName: "27.jpg", tag: "sports" },
  { id: "28", imageName: "28.jpeg", tag: "cultural" },
  { id: "29", imageName: "29.jpg", tag: "students" },
  { id: "30", imageName: "30.jpg", tag: "events" },
  { id: "31", imageName: "31.jpeg", tag: "facilities" },
  { id: "32", imageName: "32.jpeg", tag: "excursion" },
  { id: "33", imageName: "33.jpg", tag: "sports" },
  { id: "34", imageName: "34.jpeg", tag: "cultural" },
  { id: "35", imageName: "35.jpg", tag: "students" },
  { id: "36", imageName: "36.jpeg", tag: "events" },
  { id: "37", imageName: "37.jpg", tag: "facilities" },
  { id: "38", imageName: "38.jpeg", tag: "excursion" },
  { id: "39", imageName: "39.jpg", tag: "sports" },
  { id: "40", imageName: "40.jpeg", tag: "cultural" },
  { id: "41", imageName: "41.jpg", tag: "students" },
  { id: "42", imageName: "42.jpeg", tag: "events" },
  { id: "43", imageName: "43.jpeg", tag: "facilities" },
  { id: "44", imageName: "44.jpeg", tag: "excursion" },
  { id: "45", imageName: "45.jpg", tag: "sports" },
  { id: "46", imageName: "46.jpeg", tag: "cultural" },
  { id: "47", imageName: "47.jpg", tag: "students" },
  { id: "48", imageName: "48.jpg", tag: "events" },
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
        {/* all btns in the gallery page */}
        <div className="app" handleSetTag={setTag}>
          <Box className="btn-tag">
            <TagButton name="all" handleSetTag={setTag} />
            <TagButton name="facilities" handleSetTag={setTag} />
            <TagButton name="excursion" handleSetTag={setTag} />
            <TagButton name="sports" handleSetTag={setTag} />
            <TagButton name="cultural" handleSetTag={setTag} />
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
                  loading="lazy"
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
  // change all btns text to uppercase/capital letter
  return (
    <button className="tags" onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;
