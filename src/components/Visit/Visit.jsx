import React from "react";

import SimpleButton from "../../components/UI/SimpleButton/SimpleButton";
import SwiperBlock from "../../components/UI/Swiper/SwiperBlock";
import styles from "./Visit.module.scss";

function Visit({ setUser }) {
  const reg = () => {
    setUser(true);
  };
  return (
    <div className={styles.visitWrap}>
      <div className={styles.visitRegistr}>
        <div className={styles.logo}>
          <img src="./logo.svg" alt="waves" />
        </div>
        <div className={styles.visitFormWrap}>
          <div className={styles.visitForm}>
            <h1 className={styles.title}>Создавайте всё, что пожелаете</h1>
            <h3 className={styles.subtitle}>
              Многофункциональный бот для Discord, предназначенный расширить
              возможности управления и модерирования сообществ.
            </h3>
            <SimpleButton
              path="/servers"
              className={styles.btn}
              onClick={reg}
              children={"Add to Discord"}
            />
          </div>
        </div>
      </div>
      <div className={styles.visitDescr}>
        <SwiperBlock />
      </div>
    </div>
  );
}

export default Visit;
