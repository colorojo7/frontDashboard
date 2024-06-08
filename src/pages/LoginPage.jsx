import React from 'react'
import FrameForm from '../components/layouts/FrameForm'
import LoginForm from '../components/forms/LoginForm'
import { Link } from 'react-router-dom'
import routes from '../routers/routes'

const LoginPage = () => {
  return (
    <FrameForm title="LABOUR CONNECT">
        <LoginForm/>
        <Link to={routes.register} className='underline text-center text-blue-600'>Don't have an account yet?</Link>
    </FrameForm>

  )
}

export default LoginPage