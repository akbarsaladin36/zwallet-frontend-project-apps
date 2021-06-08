import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/ChangePIN.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";

export default function ChangePIN() {
  return (
    <Layout title="Change PIN">
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
            <p>Change PIN</p>
            <p className="text-muted">
              Enter your current 6 digits Zwallet PIN below to continue to the
              next steps.
            </p>
            <div className="row">
              <div className="col text-center">
                <form className={`${styles.form_size} mx-auto`}>
                  <div className="row text-center">
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin1"
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin2"
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin3"
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin4"
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin5"
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin6"
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className={`${styles.right_column_button_2} btn mt-3 mb-3`}
                  >
                    Change PIN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
