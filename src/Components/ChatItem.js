import React from 'react'
import styles from "./styles.module.css"

export default function ChatItem({item}) {
  return (
    <div className={styles.chatItem}>
      {item.message}
    </div>
  )
}
