import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box">
                                <h1>Đăng nhập</h1>
                                <p className="text-muted">TRANG ĐĂNG NHẬP!</p>
                                <input type="text" name placeholder="Username" />
                                <input type="password" name placeholder="Password" />
                                <a className="forgot text-muted" href="#">Quên mật khẩu</a>
                                <input type="submit" name defaultValue="Login" href="#" />
                                <div className="col-md-12">
                                    <ul className="social-network social-circle">
                                        <li>
                                            <a href="#" className="icoFacebook" title="Facebook">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus" /></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;