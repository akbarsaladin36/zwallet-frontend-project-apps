import styles from "../../../styles/Login.module.css";
import Image from "next/image";
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";

export default function Register() {
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
            Start Accessing Bank Needs With All Device And All Platforms With
            30.000+ Users
          </h4>
          <p className={`${styles.signup_text_2} text-muted ms-4 mt-4`}>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form className={`${styles.form_size} mt-5 ms-4`}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BiUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text" id="basic-addon1">
                <BiEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text" id="basic-addon1">
                <BiLockAlt />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <button
              type="submit"
              className={`${styles.signin_button} btn mt-4`}
            >
              Register
            </button>
            <div className="text-center mt-4">
              <p>
                Already have an account? Let’s{" "}
                <a href="/login" className={styles.signup_text_link}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
