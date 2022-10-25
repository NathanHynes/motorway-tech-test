import React from "react"
import styles from './container.module.scss'

export const Container = ({
  children,
  className = '',
  display = 'flex'
}) => {
  return (
    <div className={`${styles[`${display}-container`]} ${className}`}>
      {children}
    </div>
  )
}
