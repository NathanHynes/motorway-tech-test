import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {FormErrorMessage} from './form-error-message'
import {Container} from '../container'
import styles from './form.module.scss'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const Form = () => {
  const [salary, setSalary] = useState('0')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      dob: '',
      favouriteColor: '',
      salary: '0'
    }
  })
  const onSubmit = (data) => console.log(data)
  const onError = (data) => console.log('ERROR', data)

  const validationSchema = {
    name: {
      required: 'Please enter your full name'
    },
    email: {
      required: 'Please enter your email',
      pattern: {
        value: EMAIL_REGEX,
        message: 'Please ensure you have entered your email correctly'
      }
    },
    dob: {
      required: 'Please enter your date of birth'
    },
    favouriteColor: {
      required: 'Please enter your favourite colour'
    },
    salary: {
      required: 'Please provided a salary',
      min: {
        value: 70000,
        message: 'Please provide a figure higher than £70000'
      }
    }
  }

  return (
    <section className={styles['form-container']}>
      <Container>
        <form className={styles['user-form']} onSubmit={handleSubmit(onSubmit, onError)}>
          <label className={styles['user-form-label']}>Full name</label>
          <input
            {...register('name', validationSchema.name)}
            placeholder='Full name'
            className={styles['user-form-input']}
          />
          <FormErrorMessage errors={errors} name={'name'}/>

          <label className={styles['user-form-label']}>Email</label>
          <input
            type='input'
            {...register('email', validationSchema.email)}
            placeholder='Email'
            className={styles['user-form-input']}
          />
          <FormErrorMessage errors={errors} name={'email'}/>

          <label className={styles['user-form-label']}>Date of birth</label>
          <input
            type='date'
            {...register('dob', validationSchema.dob)}
            className={styles['user-form-input']}
          />
          <FormErrorMessage errors={errors} name={'dob'}/>

          <label className={styles['user-form-label']}>Favourite Colour</label>
          <input
            {...register('favouriteColor', validationSchema.favouriteColor)}
            placeholder='Favourite Colour'
            className={styles['user-form-input']}
          />
          <FormErrorMessage errors={errors} name={'favouriteColor'}/>

          <label className={`${styles['user-form-label']} ${styles['salary']}`}>Salary
            <p>£{salary}</p>
          </label>
          <input
            type='range'
            min='0'
            max='100000'
            step='1000'
            {...register('salary', validationSchema.salary)}
            onChange={(e) => setSalary(e.target.value)}
            className={styles['user-form-input']}
            style={{
              background: `linear-gradient(to right, #3d5a5b 0%, #3d5a5b ${salary / 1000}%, #fff ${salary / 1000}%, white 100%)`
            }}
          />
          <FormErrorMessage errors={errors} name={'salary'}/>

          <input type='submit'/>
        </form>
      </Container>
    </section>
  )
}
