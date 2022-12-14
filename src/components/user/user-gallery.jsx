import React from 'react'
import { useFetch } from '../../hooks'
import { Container } from '../container'
import { UserCard } from './user-card'
import styles from './user-gallery.module.scss'

const USER_PROFILE_URL = 'images?limit=10'

export const UserGallery = () => {
  const { data } = useFetch(USER_PROFILE_URL)
  return (
    <section className={styles['user-gallery-container']}>
      <Container display={'grid'}>
        {
          data && data.map(user => (
            <UserCard user={user} key={user.id}/>
          ))
        }
      </Container>
    </section>
  )
}
