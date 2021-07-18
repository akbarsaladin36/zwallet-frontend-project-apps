import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/ManagePhoneNumber.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { WiDirectionUp } from "react-icons/wi";
import { BiPlus } from "react-icons/bi";
import { FiUser, FiTrash } from "react-icons/fi";
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

export default function ManagePhoneNumber(props) {
  return (
    <Layout title="Manage Phone Number">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p>Manage Phone Number</p>
            <p className="text-muted">
              You can only delete the phone number and then you must add another
              phone number.
            </p>
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col">
                    <p>Primary</p>
                    <h5>+62 812 3456 7890</h5>
                  </div>
                  <div className="col">
                    <p className="float-end mt-3">
                      <i className="text-muted">
                        <FiTrash />
                      </i>
                    </p>
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
