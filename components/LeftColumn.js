import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/LeftSide.module.css";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import axios from "../utils/axios";
import Cookie from "js-cookie";

export default function LeftColumn() {
  const router = useRouter();

  const handleLogout = () => {
    axios.setToken("");
    Cookie.remove("token");
    Cookie.remove("user");
    router.push("/login");
  };

  return (
    <div className={`${styles.left_column} col-3 shadow`}>
      <div className="row">
        <div className="col-8 mx-3 my-4">
          <div className="col mx-3 my-4">
            <Link href="/">
              <a className={styles.left_column_menu_text}>
                <i>
                  <RiDashboardLine />
                </i>
                {"  "}Dashboard
              </a>
            </Link>
          </div>
          <div className="col mx-3 my-4">
            <Link href="/search_receiver">
              <a className={styles.left_column_menu_text}>
                <i>
                  <WiDirectionUp />
                </i>
                {"  "}Transfer
              </a>
            </Link>
          </div>
          <div className="col mx-3 my-4">
            <Link href="/top_up">
              <a className={styles.left_column_menu_text}>
                <i>
                  <BiPlus />
                </i>
                {"  "}Top Up
              </a>
            </Link>
          </div>
          <div className="col mx-3 my-4">
            <Link href="/profile">
              <a className={styles.left_column_menu_text}>
                <i>
                  <FiUser />
                </i>
                {"  "}Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 mx-3 my-4">
          <div className="col mx-3 my-4">
            <p onClick={handleLogout} style={{ cursor: "pointer" }}>
              <a className={styles.left_column_menu_text}>
                <i>
                  <FiLogOut />
                </i>
                {"  "}Logout
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
