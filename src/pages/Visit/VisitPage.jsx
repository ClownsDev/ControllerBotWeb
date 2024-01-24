import React, { useMemo } from "react";
import SimpleButton from "../../components/UI/SimpleButton/SimpleButton";
import styles from "./VisitPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
            <h1 className={styles.title}>Создавайте всё, что пожелаете</h1>
            <h3 className={styles.subtitle}>Многофункциональный бот для Discord, предназначенный расширить возможности управления и модерирования сообществ.</h3>
            <SimpleButton className={styles.btn}>Add your Discord</SimpleButton>
          </div>
        </div>
      </div>
      <div className={styles.visitDescr}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1}
          navigation={{
            prevEl: ".visitSliderBtnPrev",
            nextEl: ".visitSliderBtnNext",
          }}
          className={styles.sliderSlider}
        >
          <SwiperSlide className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/01.png" alt="" />
            </div>
            <div className={styles.slideTextWrap}>
              <h2 className={styles.descrTitle}>Модерирование</h2>
              <p className={styles.descrSubtitle}>
              Простые и удобные команды, журнал действий, автомодерирование, уведомления о потенциальных нарушителях, жалобы на пользователей и многое другое. Не оставляйте своё сообщество без защиты.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/02.png" alt="" />
            </div>
            <div className={styles.slideTextWrap}>
              <h2 className={styles.descrTitle}>Поведение</h2>
              <p className={styles.descrSubtitle}>
              Настройте поведение бота с помощью JavaScript. Создавайте пользовательские команды и задачи автоматизации, чтобы придать волшебство своему сообществу.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.sliderSlide}>
            <div>
              <img src="/visitPage/03.png" alt="" />
            </div>
            <div className={styles.slideTextWrap}>
              <h2 className={styles.descrTitle}>Полезные функции</h2>
              <p className={styles.descrSubtitle}>
              Интерактивные сообщения и реакции, временные голосовые каналы, приветственные сообщения и многое другое!
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
