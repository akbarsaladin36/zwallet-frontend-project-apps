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
import Cookie from "js-cookie";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
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
  const router = useRouter();
  const token = Cookie.get("token");
  axios.setToken(token);

  const [showImage, setShowImage] = useState(
    `${process.env.BASE_IMAGE_URL}${props.user.user_image}`
  );

  const goToEditProfile = () => {
    const id = Cookie.get("user");
    router.push(`/profile/edit_profile/${id}`);
  };

  const handleUserProfileImage = (event) => {
    const formData = new FormData();
    formData.append("userImage", event.target.files[0]);
    axios.axiosApiIntances
      .patch("users/update-image", formData)
      .then((res) => {
        console.log(res);
        setShowImage(`${process.env.BASE_IMAGE_URL} ${props.user.user_image}`);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Layout title="Profile">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <div className="row mt-5">
              <div className="col text-center">
                <div className={styles.image_upload}>
                  <label htmlFor="file-input">
                    {showImage ? (
                      <img
                        src={`http://localhost:5000/backend4/api/${props.user.user_image}`}
                        alt="profile user"
                        className={`${styles.profile_picture_size} rounded-circle`}
                      />
                    ) : (
                      <Image
                        src="/img/default-profile-picture.jpg"
                        alt="profile user"
                        width={60}
                        height={60}
                      />
                    )}
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleUserProfileImage(event)}
                  />
                </div>

                <br />
                <div>
                  <button
                    className="btn btn-outline-primary"
                    onClick={goToEditProfile}
                  >
                    Edit
                  </button>
                </div>
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
                  <Link href={"/profile/personal_information"}>
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
