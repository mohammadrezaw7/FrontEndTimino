import './forget-password.css'
import axios from 'axios'
import qs from "qs";
import {notification} from 'antd';
import 'antd/dist/antd.css';

let email;
let code;
let page1 = true;
let page2 = false;
let page3 = false;

const handleSubmit = (event) => {
    event.preventDefault();
    let res = qs.stringify({
        'email': event.target.elements.email.value,
    })
    var config = {
        method: 'post',
        url: 'https://timino.iran.liara.run//api/auth/forgot-password/send-email',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: res
    };


    axios(config)
        .then(function (response) {
            notification.open({
                message: 'ثبت موفق',
                description: ' ثبت شد.',
                type: 'success',
            });
            email = event.target.elements.email.value;
            page1=false;
            page2=true;
            this.forceUpdate();
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            notification.open({
                message: 'ثبت ناموفق',
                description: 'ناموفق',
                type: 'error',
            });
            console.log(error.response.data);
        });


    // axios.post(config.url, res)
}

const handleSubmit2 = (event) => {
    event.preventDefault();
    let res = qs.stringify({
        'email': email,
        'code': event.target.elements.code.value,

    })
    var config = {
        method: 'post',
        url: 'https://timino.iran.liara.run//api/auth/forgot-password/verify-password',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: res
    };


    axios(config)
        .then(function (response) {
            notification.open({
                message: 'ثبت موفق',
                description: ' ثبت شد.',
                type: 'success',
            });
            code = event.target.elements.code.value;
            page2=false;
            page3=true;
            this.forceUpdate()
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            notification.open({
                message: 'ثبت ناموفق',
                description: 'ناموفق',
                type: 'error',
            });
            console.log(error.response.data);
        });


    // axios.post(config.url, res)
}

const handleSubmit3 = (event) => {
    event.preventDefault();
    let res = qs.stringify({
        'email': event.target.elements.email.value,
        'code': event.target.elements.code.value,
        'password': event.target.elements.password.value,
    })
    var config = {
        method: 'post',
        url: 'https://timino.iran.liara.run//api/auth/forgot-password/send-email',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: res
    };


    axios(config)
        .then(function (response) {
            notification.open({
                message: 'ثبت موفق',
                description: ' ثبت شد.',
                type: 'success',
            });
            email = event.target.elements.email.value;
            page3=false;
            page1=true;
            this.forceUpdate();
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            notification.open({
                message: 'ثبت ناموفق',
                description: 'ناموفق',
                type: 'error',
            });
            console.log(error.response.data);
        });


    // axios.post(config.url, res)
}

const ForgetPassword = () => {
    return (
        <>
            <div className='card-test'>
                <div className='card-signup2'>
                    {(() => {
                        if (page1) {
                            return (
                                <form className='form-style' onSubmit={handleSubmit}>
                                    <h5>فراموشی رمز عبور</h5>

                                    <div className="form-group mt-2">
                                        <label>ایمیل</label>
                                        <input type="text" name='email' className="form-control"
                                               placeholder="ایمیل خود را وارد کنید..."/>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mt-3">ثبت</button>
                                </form>
                            )
                        } else if (page2) {
                            return (
                                <form className='form-style' onSubmit={handleSubmit2}>
                                    <h5>تایید کد</h5>

                                    <div className="form-group mt-2">
                                        <label>کد ارسال شده را وارد کنید</label>
                                        <input type="text" name='code' className="form-control"
                                               placeholder="کد ارسال شده را وارد کنید"/>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mt-3">ثبت</button>
                                </form>
                            )
                        } else if(page3) {
                            return (
                                <form className='form-style' onSubmit={handleSubmit3}>
                                    <h5>رمز جدید</h5>

                                    <div className="form-group mt-2">
                                        <label>رمز جدید</label>
                                        <input type="password" name='password' className="form-control"
                                               placeholder="رمز جدید"/>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mt-3">ثبت</button>
                                </form>
                            )
                        }
                    })()}

                </div>
            </div>
        </>
    )
}
export default ForgetPassword;