import LogoPlus from "../Logos/LogoPlus.png";
import { PhotosList } from "../Datas/PhotosList";
import PhotoItem from "./PhotoItem";
import "../Styles/Main.css";

function Main() {
  return (
    <div className="JJ-Main">
      <ul className="JJ-Photos">
        {PhotosList.map(({ id, cover, name, year, location }) => (
          <div key={id}>
            <PhotoItem
              id={id}
              cover={cover}
              name={name}
              year={year}
              location={location}
            />
          </div>
        ))}
        <div>
          <img className="JJ-Add-Photos" src={LogoPlus} alt="+"></img>
          <p>Ajouter une Photo</p>
        </div>
      </ul>
    </div>
  );
}

export default Main;
