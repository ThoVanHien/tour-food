
import React from 'react'
import {useHistory} from "react-router-dom"
import { Button} from "antd"

import './Dashboard.scss'

//viet login thanh dang function component nhu vay (hook)
const Dashboard = () => {
    const history = useHistory()

    const handleLogOut = () => {
        localStorage.setItem("isAuthentication", false);
        history.push('sign-in')
    }
    return (
        <div className="dbd-container">
         
                    <span>Welcome to Dashboard Panel</span>
                    {" ---- "}
                    <Button onClick={handleLogOut}>Logout</Button>
             
               
            
           
        </div>
    )
}

export default Dashboard
