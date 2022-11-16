import "../Styles/PhotoItem.css";

function PhotoItem({ id, name, cover, location, year }) {
  function PhotoZoom(e) {
    e.target.style.scale(2.5);
  }

  function PhotoZoomOut(e) {
    e.target.style.scale(1);
  }

  return (
    <li key={id} className="JJ-photo">
      <img
        className="JJ-cover"
        onMouseOver={PhotoZoom}
        onMouseOut={PhotoZoomOut}
        src={cover}
        alt={`${name} cover`}
      />
      {name}
      <div>
        {location}, {year}
      </div>
    </li>
  );
}

export default PhotoItem;
