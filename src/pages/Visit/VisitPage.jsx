import React, { useMemo } from "react";
import SimpleButton from "../../components/UI/SimpleButton/SimpleButton";
import styles from "./VisitPage.module.scss";
function VisitPage() {
  return (
    <div
      className={styles.visitWrap}
      style={{ height: "100vh", overflowY: "hidden" }}
    >
      <div className={styles.visitRegistr}>
        <div className={styles.logo}>
          <img src="./logo.svg" alt="waves" />
        </div>
        <div className={styles.visitFormWrap}>
          <div className={styles.visitForm}>
            <h1 className={styles.title}>Link this!</h1>
            <h3 className={styles.subtitle}>Subtitle</h3>
            <SimpleButton className={styles.btn}>Add your Discord</SimpleButton>
          </div>
        </div>
      </div>
      <div className={styles.visitDescr}>

        <div className={styles.sliderSlider}>
          <div className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/01.png" alt="" />
            </div>
            <h2 className={styles.descrTitle}>Explore The World Of Art</h2>
            <p className={styles.descrSubtitle}>
              CloseSea Is A Great Platform For Discover Largest NFTs And Other
              Stuff !!
            </p>
          </div>
        </div>

        <div className={styles.sliderButtons}>
          <div className={styles.sliderBtnPrev}>
            <img src="./visitPage/arrowPrev.svg" alt="arrow prev" />
          </div>
          <div className={styles.btnsSeparator}></div>
          <div className={styles.sliderBtnNext}>
            <img src="./visitPage/arrowNext.svg" alt="arrow nex" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitPage;
