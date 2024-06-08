import React from 'react'
import FrameForm from '../components/layouts/FrameForm'
import RegisterForm from '../components/forms/RegisterForm'
import { Link } from 'react-router-dom'
import routes from '../routers/routes'

const RegisterPage = () => {
  return (
    <FrameForm title="LABOUR CONNECT">
        <RegisterForm/>
        <Link to={routes.login} className='underline text-center text-blue-600'>have an account alredy?</Link>
    </FrameForm>
  )
}

export default RegisterPage