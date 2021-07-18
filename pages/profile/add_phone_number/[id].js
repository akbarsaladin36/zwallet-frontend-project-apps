import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/AddPhoneNumber.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser, FiPhone } from "react-icons/fi";
import axios from "../../../utils/axios";
import { authPage } from "../../../middleware/authorizationPage";
import LeftColumn from "../../../components/LeftColumn";

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

export default function AddPhoneNumber(props) {
  return (
    <Layout title="Add Phone Number">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p>Add Phone Number</p>
            <p className="text-muted">
              Add at least one phone number for the transfer ID so you can start
              transfering your money to another user.
            </p>
            <div className="row">
              <div className="col text-center">
                <form className={`${styles.form_size} mx-auto`}>
                  <div className="input-group mb-3 mt-5">
                    <span className="input-group-text" id="basic-addon1">
                      <FiPhone />
                      {"  "}+62
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      aria-label="Enter your phone number"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <button
                    className={`${styles.right_column_button_2} btn mt-3 mb-3`}
                  >
                    Add Phone Number
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
