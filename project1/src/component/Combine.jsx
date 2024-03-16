import React from 'react'
import Left from './Left'
import Right from './Right'
import styles from './Combine.module.css'
function Combine() {
  return (
    <div className={styles.container}>
        <Left/>
        <Right/>
    </div>
  )
}

export default Combine