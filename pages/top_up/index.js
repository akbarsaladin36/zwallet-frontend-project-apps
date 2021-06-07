import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/TopUp.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default function TopUp() {
  return (
    <Layout title="Top Up">
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
            <p className="mt-3">How To Top Up</p>
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>1</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">
                      Go to the nearest ATM or you can use E-Banking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>2</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">
                      Type your security number on the ATM or E-Banking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>3</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">Select “Transfer” in the menu</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>4</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">
                      Type the virtual account number that we provide you at the
                      top.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>5</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">
                      Type the amount of the money you want to top up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>6</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">Read the summary details</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>7</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">Press transfer / top up</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-1">
                    <p>8</p>
                  </div>
                  <div className="col-8">
                    <p className="text-muted">
                      You can see your money in Zwallet within 3 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
