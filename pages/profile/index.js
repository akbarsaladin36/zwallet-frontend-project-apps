import { useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/Profile.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import LeftColumn from "../../components/LeftColumn";
import { authPage } from "../../middleware/authorizationPage";
import axios from "../../utils/axios";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      // console.log(res);
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  return {
    props: { user },
  };
}

export default function Profile(props) {
  const [showImage, setShowImage] = useState(null);

  return (
    <Layout title="Profile">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <div className="row mt-5">
              <div className="col text-center">
                <Image
                  src={
                    showImage
                      ? `${process.env.BASE_IMAGE_URL}${props.user.user_image}`
                      : "/img/default-profile-picture.jpg"
                  }
                  alt="profile user"
                  width={60}
                  height={60}
                />
                <br />
                <Link href="/profile/edit_profile">
                  <a className="text-muted">Edit</a>
                </Link>
                <p>{props.user.user_name}</p>
                <p>{props.user.user_phone}</p>
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
                  <Link href="/profile/change_pin">
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
