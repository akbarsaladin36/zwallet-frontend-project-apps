import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/History.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default function History() {
  return (
    <Layout title="Transaction History">
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
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p>Transaction History</p>
            <p className="text-muted">This Week</p>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="col-6">
                    <p>Samuel Suhi</p>
                    <p className="text-muted">Transfer</p>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end text-success">
                <p className="mt-4">+Rp.50.000</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="col-6">
                    <p>Samuel Suhi</p>
                    <p className="text-muted">Subscription</p>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end text-danger">
                <p className="mt-4">-Rp.149.000</p>
              </div>
            </div>
            <p className="text-muted mt-5">This Month</p>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="col-6">
                    <p>Samuel Suhi</p>
                    <p className="text-muted">Transfer</p>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end text-success">
                <p className="mt-4">+Rp.150.000</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-3">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="col-6">
                    <p>Samuel Suhi</p>
                    <p className="text-muted">Subscription</p>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end text-danger">
                <p className="mt-4">-Rp.249.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
