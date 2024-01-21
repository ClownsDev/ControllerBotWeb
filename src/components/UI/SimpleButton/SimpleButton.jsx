import React from 'react'
import styles from './SimpleButton.module.scss'
function SimpleButton({children}) {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default SimpleButton