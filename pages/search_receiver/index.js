import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/SearchReceiver.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import LeftColumn from "../../components/LeftColumn";

export default function SearchReceiver() {
  return (
    <Layout title="Search Receiver">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Search Receiver</p>
            <form>
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  Search
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search receiver here"
                  aria-label="Search receiver here"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
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
            {/* *************** */}
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
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
