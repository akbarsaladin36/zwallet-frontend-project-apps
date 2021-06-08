import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/Profile.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default function Profile() {
  return (
    <Layout title="Profile">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
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
                  <Link href="/profile/:id">
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
                  <Link href="#">
                    <a className={styles.left_column_menu_text}>
                      <i>
                        <FiLogOut />
                      </i>
                      {"  "}Logout
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <div className="row mt-5">
              <div className="col text-center">
                <Image
                  src="/img/default-profile-picture.jpg"
                  alt="profile user"
                  width={60}
                  height={60}
                />
                <br />
                <Link href="#">
                  <a className="text-muted">Edit</a>
                </Link>
                <p>Robert Chandler</p>
                <p>+6281-1234-5678</p>
              </div>
            </div>
            {/* *********** */}
            <div className="row">
              <div className="col text-center">
                <div
                  className={`${styles.right_column_link_1} col mx-auto mb-3`}
                >
                  <Link href="/profile/personal_information">
                    <a className={`${styles.right_column_link_2}`}>
                      Personal Information
                    </a>
                  </Link>
                </div>
                <div
                  className={`${styles.right_column_link_1} col mx-auto mb-3`}
                >
                  <Link href="/profile/change_password">
                    <a className={styles.right_column_link_2}>
                      Change Password
                    </a>
                  </Link>
                </div>
                <div
                  className={`${styles.right_column_link_1} col mx-auto mb-3`}
                >
                  <Link href="/profile/change_PIN">
                    <a className={styles.right_column_link_2}>Change PIN</a>
                  </Link>
                </div>
                <div
                  className={`${styles.right_column_link_1} col mx-auto mb-3`}
                >
                  <Link href="/logout">
                    <a className={styles.right_column_link_2}>Logout</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
