import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/Transfer.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default function Transfer() {
  return (
    <Layout title="Transfer">
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
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Transfer Money</p>
            <div className="row">
              <div className={`${styles.right_column_1} col mt-5 shadow`}>
                <div className="row">
                  <div className="col-2">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="col-8">
                    <p>Nama</p>
                    <p className="text-muted">No Hp</p>
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles.right_column_text_1} text-muted mt-3`}>
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="row mt-5">
              <div className="col d-flex justify-content-center">
                <div className="row">
                  <div className="col-12 text-center mx-auto">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className={styles.right_column_input_1}
                          id="exampleFormControlInput1"
                          placeholder="00.0"
                          size="10"
                        />
                      </div>
                      <p>Rp.120.000 Available</p>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Add some notes"
                          size="10"
                        />
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button
                            type="submit"
                            className={`${styles.right_column_button_1} btn mb-3 mt-5`}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
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
