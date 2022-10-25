import React, { useState } from 'react'
import { Modal } from '../modal'
import styles from './user-card.module.scss'

export const UserCard = ({ user }) => {
  const [ showModal, setShowModal ] = useState(false)

  const {
    username: userName,
    bio,
    location,
    profile_image: profileImage,
    total_collections: totalCollections,
    total_likes: totalLikes,
    total_photos: totalPhotos
  } = user.user

  return (
    <div className={styles.card}>
      <section className={styles.profile}>
        <img src={`${profileImage}.webp`} className={styles.thumbnail} alt=''/>
        <h3 className={styles.name}>{userName}</h3>
        <p className={styles.location}>{location}</p>
        <p className={styles.bio}>{bio}</p>
        <button type='button' className='btn' onClick={()=>setShowModal(true)}>Show Image</button>
      </section>
      <section className={styles['stat-container']}>
        <div className={styles['user-stat']}>
          <div className={styles.icon}>👍</div>
          <h4>{totalLikes}</h4>
          <p>Likes</p>
        </div>
        <div className={styles['user-stat']}>
          <div className={styles.icon}>📦</div>
          <h4>{totalCollections}</h4>
          <p>Collections</p>
        </div>
        <div className={styles['user-stat']}>
          <div className={styles.icon}>📸</div>
          <h4>{totalPhotos}</h4>
          <p>photos</p>
        </div>
      </section>
      {
        showModal && (
          <Modal
            onClose={()=>setShowModal(false)}
            title={`${userName}'s Pinned Image`}
            show={showModal}
          >
          <img className={styles['pinned-image']} src={`${user.url}.webp`} width='480' alt=''/>
        </Modal>
      )}
    </div>
  )
}
