import "../Styles/PhotoItem.css";
import { useState } from "react";

function PhotoItem({ id, name, cover, location, year }) {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showImage = (cover) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(cover);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <li key={id} className="JJ-photo">
      <img
        onClick={() => showImage(cover)}
        className="JJ-cover"
        src={cover}
        alt={`${name} cover`}
      />
      {name}
      <div>
        {location}, {year}
      </div>
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <img id="lightbox-img" src={imageToShow} alt={`${name} cover`}></img>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

export default PhotoItem;
