import { useLayoutEffect, useState } from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import AccountInfo from "./components/AccountInfo";
import ImgButton from "common/components/ImgButton";

import "./Header.css";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (_: Event) => {
        setIsPageScrolled(window.scrollY > 50);
      });
    }
  }, []);

  return (
    <div className={`header-wrapper ${isPageScrolled ? "scrolled" : ""}`}>
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
                <Link className="link" to="/transactions">
                  Transactions
                </Link>
              </li>
              <li>
                <a
                  className="link"
                  href="https://etherscan.io/"
                  target="_blank"
                  rel="noreferrer"
                >
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
