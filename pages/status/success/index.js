import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/Status.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import LeftColumn from "../../../components/LeftColumn";

export default function StatusSuccess() {
  return (
    <Layout title="Transfer Success">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <div className="row">
              <div className="col text-center mt-5">
                <div
                  className={`${styles.right_column_confirm_1} rounded-circle mx-auto`}
                >
                  <i className={styles.right_column_check_1}>
                    <FiCheck
                      className={`${styles.right_column_check_2} mt-2`}
                    />
                  </i>
                </div>
                <p className="mt-3">Transfer Success</p>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Amount</p>
                    <h2>Rp100.000</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Balance left</p>
                    <h2>Rp20.000</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Date &amp; Time</p>
                    <h2>May 11, 2020 - 12.20</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Notes</p>
                    <h2>For buying some socks</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
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
            {/* ********** */}
            <button
              className={`${styles.right_column_button_1} btn float-end mt-3 mb-3`}
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
