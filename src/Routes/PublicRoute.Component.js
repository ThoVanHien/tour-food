import React from 'react'
import {Route} from "react-router-dom"

import {PublicLayout} from "Layouts"

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => (
            <PublicLayout>
                <Component {...props} />
            </PublicLayout>
        )}
        />
    )
}

export default PublicRoute
