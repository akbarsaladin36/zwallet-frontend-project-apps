import styles from "../../../styles/AddPIN.module.css";
import Image from "next/image";

export default function AddPIN() {
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
          <h4 className={`${styles.signup_text} mt-5 ms-4 pt-5`}>
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </h4>
          <p className={`${styles.signup_text_2} text-muted ms-4 mt-4`}>
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
          </p>
          <form className={`${styles.form_size} mt-5 ms-4`}>
            <div className="row text-center">
              <div className="col-2">
                <div className="mb-3">
                  <input
                    type="password"
                    name="Pin1"
                    id="exampleInputPassword1"
                    maxLength="1"
                    size="2"
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <input
                    type="password"
                    name="Pin2"
                    id="exampleInputPassword1"
                    maxLength="1"
                    size="2"
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <input
                    type="password"
                    name="Pin3"
                    id="exampleInputPassword1"
                    maxLength="1"
                    size="2"
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <input
                    type="password"
                    name="Pin4"
                    id="exampleInputPassword1"
                    maxLength="1"
                    size="2"
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <input
                    type="password"
                    name="Pin5"
                    id="exampleInputPassword1"
                    maxLength="1"
                    size="2"
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <input
                    type="password"
                    name="Pin6"
                    id="exampleInputPassword1"
                    maxLength="1"
                    size="2"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.signin_button} btn mt-4`}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
