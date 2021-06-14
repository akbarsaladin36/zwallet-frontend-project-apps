import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/PersonalInformation.module.css";
// import Link from "next/link";
import LeftColumn from "../../../components/LeftColumn";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import axios from "../../../utils/axios";
import { authPage } from "../../../middleware/authorizationPage";
import Link from "next/link";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err);
      return {};
    });

  return {
    props: { user },
  };
}

export default function PersonalInformation(props) {
  console.log(props);
  return (
    <Layout title="Personal Information">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Personal Information</p>
            <p className="text-muted">
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </p>
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <p>First Name</p>
                    <h5>{props.user.user_name}</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <p>Last Name</p>
                    <h5>-</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <p>Verfied E-mail</p>
                    <h5>{props.user.user_email}</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <p>Phone Number</p>
                    <h5>{props.user.user_phone}</h5>
                  </div>
                  <div className="col">
                    <Link href="/profile/manage_phone_number">
                      <a className="float-end mt-3">Manage</a>
                    </Link>
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
