import { BiBell } from "react-icons/bi";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <a className={`${styles.navbar_brand_text} navbar-brand`} href="/">
            Zwallet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mt-3">
                <div className="row">
                  <div className="col-4">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={`${styles.profile_user_text} col-8`}>
                    <p>M. Akbar Saladin</p>
                    <p>+6281-1234-5678</p>
                  </div>
                </div>
              </li>
              <li className="nav-item mt-3">
                <a className="nav-link" href="#">
                  <i>
                    <BiBell />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
