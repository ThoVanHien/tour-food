import React from 'react'

import {Layout} from "antd"
import "./PrivateLayout.scss"

const {Header, Content, Footer} = Layout

const PrivateLayout = ({children}) => {
    return (
        <Layout className="pl-layout">
            {/* header de tam thoi - sau nay design rieng co them notification & user setting  */}
            <Header className="pl-layout_header"/>
            <Content>{children}</Content>
            <Footer className="pl-layout_footer">
                {"Travel & Food Social by Pum"} 
            </Footer>
        </Layout>
    )
}

export default PrivateLayout
