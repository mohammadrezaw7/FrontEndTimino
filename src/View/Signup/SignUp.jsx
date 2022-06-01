import './Signup.css'

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.firstName.value) // from elements property
    console.log(event.target.elements.lastName.value) // from elements property
    console.log(event.target.elements.userName.value) // from elements property
    console.log(event.target.elements.email.value) // from elements property
    console.log(event.target.elements.password.value) // from elements property
    console.log(event.target.elements.confirmPassword.value) // from elements property
}

const SignUp = () => {
    return (
        <>
            <div className='card-test'>
                <div className='card-signup'>
                    <form className='form-style' onSubmit={handleSubmit}>
                        <h5>ثبت نام</h5>

                        <div className="form-group mt-2">
                            <label>نام</label>
                            <input type="text" name='firstName' className="form-control"
                                   placeholder="نام خود را وارد کنید..."/>
                        </div>

                        <div className="form-group mt-2">
                            <label>نام خانوادگی</label>
                            <input type="text" name='lastName' className="form-control"
                                   placeholder="نام خانوادگی خود را وارد کنید..."/>
                        </div>

                        <div className="form-group mt-2">
                            <label>نام کاربری</label>
                            <input type="text" name='userName' className="form-control"
                                   placeholder="نام کاربری خود را وارد کنید..."/>
                        </div>

                        <div className="form-group mt-2">
                            <label>ایمیل</label>
                            <input type="email" name='email' className="form-control"
                                   placeholder="ایمیل خود را وارد کنید..."/>
                        </div>

                        <div className="form-group mt-2">
                            <label>پسورد</label>
                            <input type="password" name='password' className="form-control"
                                   placeholder="پسورد خود را وارد کنید..."/>
                        </div>

                        <div className="form-group mt-2">
                            <label>تایید پسورد</label>
                            <input type="password" name='confirmPassword' className="form-control"
                                   placeholder="پسورد خود را تکرار کنید..."/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp;