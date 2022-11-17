import "../Styles/Footer.css";
import { ReseauxList } from "../Datas/RéseauxList";

function Footer() {
  return (
    <div className="JJ-Footer">
      <ul className="JJ-Reseaux">
        <p className="JJ-Contact">Contacts</p>
        <div className="JJ-Res-List">
          {ReseauxList.map(({ name, id, icon, lien }) => (
            <li>
              <a href={`${lien}`}>
                <img
                  key={id}
                  className="JJ-Res-Icon"
                  src={icon}
                  alt={`${name} logo`}
                ></img>
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Footer;
