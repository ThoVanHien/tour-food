import React from 'react'

import {Layout} from "antd";
import "./PublicLayout.scss"

const {Content, Footer} = Layout;

const PublicLayout = (props) => {
    return (
        // <div>
        //     Public Layout
        //     <br />
        //     {props.children}
        // </div>
        <Layout className="pp-layout">
            <Content className="pp-layout_content">{props.children}</Content>
            <Footer className="pp-layout_footer">
                {"Travel & Food Social by Pum"} 
            </Footer>
        </Layout>
    )
}

export default PublicLayout
