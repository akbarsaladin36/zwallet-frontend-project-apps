import { useState } from "react";
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
import Cookie from "js-cookie";

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

export default function EditProfile(props) {
  console.log(props);
  const token = Cookie.get("token");
  axios.setToken(token);

  const [form, setForm] = useState({
    userName: props.user.user_name,
    userPhone: props.user.user_phone,
  });

  const changeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserProfileImage = (event) => {
    const formData = new FormData();
    formData.append("userImage", URL.createObjectURL(event.target.files[0]));
    axios.axiosApiIntances
      .patch("users/update-image", formData)
      .then((res) => {
        console.log(res);
        router.push("/profile");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleUpdateProfile = () => {
    axios.axiosApiIntances
      .patch("users/update-profile", form)
      .then((res) => {
        console.log(res);
        router.push("/profile");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Layout title="Edit Profile">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Edit Your Profile</p>
            <p className="text-muted">
              You can edit your profile to make completed information as user.
            </p>
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Full Name"
                        name="userName"
                        value={form.userName}
                        onChange={(event) => changeText(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Phone Number"
                        name="userPhone"
                        value={form.userPhone}
                        onChange={(event) => changeText(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Profile Image</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Profile Image"
                        onChange={(event) => handleUserProfileImage(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ************** */}
            <button
              className={`${styles.right_column_button_1} btn float-end mt-3 mb-3`}
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
            {/* ************** */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
