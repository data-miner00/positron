import { RiMoonClearFill } from "react-icons/ri";
import AccountInfo from "./components/AccountInfo";
import ImgButton from "../../../components/ImgButton";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <span>Positron+</span>
          </Link>
        </div>

        <div className="right">
          <nav className="nav">
            <ul>
              <li>
                <a className="link" href="#" rel="noopener noreferrer">
                  Documentation
                </a>
              </li>
              <li>
                <a className="link" href="#">
                  Explorer
                </a>
              </li>
              <li>
                <ImgButton img={<RiMoonClearFill />} />
              </li>
            </ul>
          </nav>
          <div className="divider"></div>
          <AccountInfo />
        </div>
      </header>
    </div>
  );
}

export default Header;
