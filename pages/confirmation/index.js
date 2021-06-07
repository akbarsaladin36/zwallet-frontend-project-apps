import { useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/Confirmation.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export default function Confirmation() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <Layout title="Confirmation">
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
            <p className="mt-3">Transfer To</p>
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
            <p className="mt-5">Details</p>
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
            <Button
              variant="primary"
              onClick={handleShowModal}
              className={`${styles.right_column_button_1} float-end mt-3 mb-3`}
            >
              Continue
            </Button>
            {/* **Modal*** */}
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Enter PIN to Transfer
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="text-muted">
                  Enter your 6 digits PIN for confirmation to continue
                  transferring money.
                </p>
                <form>
                  <div className="row text-center">
                    <div className="col-1">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin1"
                          id="exampleInputPassword1"
                          maxlength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin2"
                          id="exampleInputPassword1"
                          maxlength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin3"
                          id="exampleInputPassword1"
                          maxlength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin4"
                          id="exampleInputPassword1"
                          maxlength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin5"
                          id="exampleInputPassword1"
                          maxlength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="mb-3">
                        <input
                          type="password"
                          name="Pin6"
                          id="exampleInputPassword1"
                          maxlength="1"
                          size="2"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  onClick={handleCloseModal}
                  className={styles.right_column_button_1}
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
            {/* ********** */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
