import React from 'react'
import {Route, Redirect} from "react-router-dom"

import { PrivateLayout } from 'Layouts';
import {ROUTERS} from "Constants/Common.Constant"

//rest la resp parameter es6
// {component: Component, ...rest} - { } la destructoring cua object = {component, ...rest} 
// {component: Component} la gan component = bien Component
const PrivateRoute = ({component: Component, ...rest}) => {

    // const isAuthentication = localStorage.getItem('isAuthentication') || false;
    const isAuthentication = true;
    return (
        <Route 
            {...rest}
            render={
                // nay la arrow function co {} param la destructoring param
                ({location}) => 
                //check da dang nhap, bien isAuthentication o tren la minh set tam
                // neu true thi vo component(minh boc private component bang private layout) 
                // - false thi tro ve trang login de dang nhap roi moi vo duoc
                isAuthentication ? (
                    <PrivateLayout>
                        <Component {...rest} />
                    </PrivateLayout>
                ):(
                    // redirect ve login page
                    <Redirect to={{
                        pathname: ROUTERS.LOGIN,
                        state: {fromt: location},
                    }} 
                    />
                )
            }
        />

        
    )
}

export default PrivateRoute
