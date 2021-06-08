import styles from "../../../../styles/SuccessAddPIN.module.css";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function SuccessAddPIN() {
  return (
    <>
      <div className="row">
        <div className={`${styles.left_column} col`}>
          <div className={styles.zwallet_text}>
            <h2>Zwallet</h2>
          </div>
          <div className={styles.image_header_position_2}>
            <Image
              src="/img/header-zwallet-line-app.png"
              alt="zwallet header image"
              width={850}
              height={850}
            />
          </div>
          <div className={styles.image_header_position}>
            <Image
              src="/img/header-zwallet-app.png"
              alt="zwallet header image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.zwallet_text_2}>
            <h3>App that Covering Banking Needs.</h3>
          </div>
          <div className={styles.zwallet_text_3}>
            <p>
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
        <div className="col-5">
          <div className={`${styles.logo_confirm_1} rounded-circle mt-5 ms-3`}>
            <i className={styles.logo_confirm_check_1}>
              <FiCheck className={`${styles.logo_confirm_check_2} mt-2 ms-2`} />
            </i>
          </div>
          <h4 className={`${styles.signup_text} mt-3 ms-4 pt-5`}>
            Your PIN Was Successfully Created
          </h4>
          <p className={`${styles.signup_text_2} text-muted ms-4 mt-4`}>
            Your PIN was successfully created and you can now access all the
            features in Zwallet. Login to your new account and start exploring!
          </p>
          <button className={`${styles.signin_button_2} btn mt-4 ms-4`}>
            Login Now
          </button>
        </div>
      </div>
    </>
  );
}
