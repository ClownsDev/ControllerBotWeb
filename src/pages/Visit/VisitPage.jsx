import React, { useMemo } from "react";
import SimpleButton from "../../components/UI/SimpleButton/SimpleButton";
import styles from "./VisitPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          className={styles.sliderSlider}
          navigation={{
            prevEl: ".visitSliderBtnPrev",
            nextEl: ".visitSliderBtnNext",
          }}
        >
          <SwiperSlide className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/01.png" alt="" />
            </div>
            <div className={styles.slideTextWrap}>
              <h2 className={styles.descrTitle}>Explore The World Of Art</h2>
              <p className={styles.descrSubtitle}>
                CloseSea Is A Great Platform For Discover Largest NFTs And Other
                Stuff !!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/02.png" alt="" />
            </div>
            <div className={styles.slideTextWrap}>
              <h2 className={styles.descrTitle}>Start Your Own NFT Gallery</h2>
              <p className={styles.descrSubtitle}>
                CloseSea Is A Great Platform For Discover Largest NFTs And Other
                Stuff !!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/03.png" alt="" />
            </div>
            <div className={styles.slideTextWrap}>
              <h2 className={styles.descrTitle}>Discover Largest NFT Market</h2>
              <p className={styles.descrSubtitle}>
                CloseSea Is A Great Platform For Discover Largest NFTs And Other
                Stuff !!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.sliderButtons}>
          <button className="visitSliderBtnPrev">
            <img src="./visitPage/arrowPrev.svg" alt="arrow prev" />
          </button>
          <div className={styles.btnsSeparator}></div>
          <button className="visitSliderBtnNext">
            <img src="./visitPage/arrowNext.svg" alt="arrow nex" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisitPage;
