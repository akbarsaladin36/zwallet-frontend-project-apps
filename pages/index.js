import Layout from "../components/Layout";
import Navbar from "../components/module/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default function Home() {
  return (
    <Layout title="Home">
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
                  <Link href="#">
                    <a className={styles.left_column_menu_text}>
                      <i>
                        <BiPlus />
                      </i>
                      {"  "}Top Up
                    </a>
                  </Link>
                </div>
                <div className="col mx-3 my-4">
                  <Link href="#">
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
          <div className="col-7 ms-3">
            <div className={`${styles.right_column_1} row shadow`}>
              <div className="col mt-3 ms-3">
                <p>Balance</p>
                <h1>120.000</h1>
                <p>+62813-1234-5678</p>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col d-flex justify-content-end mt-4">
                    <button className={`${styles.right_button_column_1} btn`}>
                      Transfer
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-end mt-3">
                    <button className={`${styles.right_button_column_1} btn`}>
                      Top Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={`${styles.right_column_3} col-6 shadow`}>
                Kiri
              </div>
              <div className={`${styles.right_column_2} col-5 shadow ms-4`}>
                <div className="row mt-3">
                  <div className={`${styles.right_column_2_text_1} col-7`}>
                    <p>Transaction History</p>
                  </div>
                  <div className="col-5 d-flex justify-content-end">
                    <Link href="/history">
                      <a className={styles.right_column_2_text_2}>See All</a>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <div className="row">
                      <div className="col-4">
                        <Image
                          src="/img/default-profile-picture.jpg"
                          alt="profile user"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="col-8">
                        <p className={styles.right_column_2_text_3}>
                          Samuel Suhi
                        </p>
                        <p
                          className={`${styles.right_column_2_text_3} text-muted`}
                        >
                          Transfer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 d-flex justify-content-end text-success">
                    <p className={`${styles.right_column_2_text_3} mt-3`}>
                      +Rp.50.000
                    </p>
                  </div>
                </div>
                {/* ****************** */}
                <div className="row">
                  <div className="col-7">
                    <div className="row">
                      <div className="col-4">
                        <Image
                          src="/img/default-profile-picture.jpg"
                          alt="profile user"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="col-8">
                        <p className={styles.right_column_2_text_3}>
                          Samuel Suhi
                        </p>
                        <p
                          className={`${styles.right_column_2_text_3} text-muted`}
                        >
                          Subcription
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 d-flex justify-content-end text-danger">
                    <p className={`${styles.right_column_2_text_3} mt-3`}>
                      -Rp.149.000
                    </p>
                  </div>
                </div>
                {/* ****************** */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
