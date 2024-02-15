import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./SwiperBlock.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const SwiperBlock = () => {
  return (
    <>
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
              Простые и удобные команды, журнал действий, автомодерирование,
              уведомления о потенциальных нарушителях, жалобы на пользователей и
              многое другое. Не оставляйте своё сообщество без защиты.
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
              Настройте поведение бота с помощью JavaScript. Создавайте
              пользовательские команды и задачи автоматизации, чтобы придать
              волшебство своему сообществу.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderSlide}>
          <div>
            <img src="/visitPage/03.png" alt="" />
          </div>
          <div className={styles.slideTextWrap}>
            <h2 className={styles.descrTitle}>Функционал</h2>
            <p className={styles.descrSubtitle}>
              Интерактивные сообщения и реакции, временные голосовые каналы,
              приветственные сообщения и многое другое!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.sliderButtons}>
        <button className={`visitSliderBtnPrev ${styles.prev}`}>
          <img src="./visitPage/arrowPrev.svg" alt="arrow prev" />
        </button>
        <button className={`visitSliderBtnNext ${styles.next}`}>
          <img src="./visitPage/arrowNext.svg" alt="arrow next" />
        </button>
      </div>
    </>
  );
};

export default SwiperBlock;
