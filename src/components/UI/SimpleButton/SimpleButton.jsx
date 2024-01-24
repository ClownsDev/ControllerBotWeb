import React from 'react'
import styles from './SimpleButton.module.scss'
function SimpleButton({children}) {
  return (
    <button className={styles.btn}>
      {children}
      {/* Hover elements */}
      <span></span><span></span><span></span><span></span>
    </button>
  )
}

export default SimpleButton