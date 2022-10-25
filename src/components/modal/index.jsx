import React from 'react'
import styles from './modal.module.scss'

export const Modal = ({
  show,
  title,
  children,
  onClose
}) => {
  return (
      <div className={`${styles.modal} ${show ? styles.show : ''}`} onClick={onClose}>
        <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
          <div className={styles['modal-header']}>
            <h4 className={styles['modal-title']}>{title}</h4>
          </div>
          <div className={styles['modal-body']}>{children}</div>
          <div className={styles['modal-footer']}>
            <button onClick={onClose} className='btn'>
              Close
            </button>
          </div>
        </div>
      </div>
  )
}
