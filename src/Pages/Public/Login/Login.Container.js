import React from 'react'

import {Formik} from 'formik'
import LoginView from './Login.Component'
const initValue = {
    userName : null,
    passWord : null,

}
const LoginContainer = () => {
    return (
        <div>
            <Formik initialValues={initValue} children={(props)=>{
                return <LoginView {...props}/>
            }}/>
        </div>
    )
}

export default LoginContainer
