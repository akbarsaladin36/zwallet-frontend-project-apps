import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={`${styles.footer_background} mt-5 py-2`}>
          <div className="container">
            <div className="row">
              <div className="col mt-3">
                <p>2020 Zwallet. All right reserved.</p>
              </div>
              <div className="col d-flex justify-content-end mt-3">
                <div className="row">
                  <div className="col-7">
                    <p>+62 5637 8882 9901</p>
                  </div>
                  <div className="col-5">
                    <p>contact@zwallet.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
