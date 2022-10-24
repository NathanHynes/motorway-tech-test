import { useFetch } from '../../hooks'
import { Container } from '../container'

const USER_PROFILE_URL = 'images?limit=10'

//<img src={`${img.url}.jpg`} alt=''/>
export const UserProfile = () => {
  const { data: images } = useFetch(USER_PROFILE_URL)

  console.log({sample: images[0]})
  return (
    <Container>
      {
        images && images.map(img => (
          <div key={img.id} >
            <img src={`${img.user.profile_image}.webp`} alt=''/>
          </div>
          ))
      }
    </Container>
  )
}
