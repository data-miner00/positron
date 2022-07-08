import { RiMoonClearFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import AccountInfo from "./AccountInfo";
import ImgButton from "./ImgButton";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <span>Positron+</span>
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
              {/* <li>
                <a href="#">
                  <ImgButton img={<AiFillGithub />} />
                </a>
              </li> */}
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
