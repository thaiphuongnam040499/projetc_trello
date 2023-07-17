import { render } from '@testing-library/react';
import { log } from 'console';
import React, { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthSupport from './AuthSupport';
export default function SignUp() {
  const [email, setEmail] = useState({
    email: '',
  });
  const EMAIL_PATTERN = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setEmail({ ...email, [name]: value });
  };
  const changeButton = () => {
    if (EMAIL_PATTERN.test(email.email)) {
      return (
        <button type="button" className="btn btn-success w-100">
          Tiếp tục
        </button>
      );
    }
    return (
      <button disabled type="button" className="btn btn-secondary w-100">
        Tiếp tục
      </button>
    );
  };
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#fffff' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow shadow-2-strong"
                style={{ borderRadius: '1rem' }}
              >
                <div className="card-body p-5 text-center">
                  <img
                    src="https://images.ctfassets.net/rz1oowkt5gyp/13zrkgNeK4xNziAQIfM3BT/44c6750e80104e3a38a61881c21a0923/trello-logo-blue.svg"
                    alt=""
                  />
                  <h5 className="mb-5 mt-5">Đăng kí tài khoản</h5>
                  <div className="form-outline mb-4">
                    <input
                      name="email"
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Nhập Email"
                      value={email.email}
                      onChange={handleChange}
                    />
                    <label
                      className="form-label mt-4"
                      htmlFor="typeEmailX-2"
                      style={{ fontSize: 14 }}
                    >
                      Bằng việc nhấp vào “Tiếp tục” bên dưới, bạn đồng ý với{' '}
                      <a href="">Điều khoản dịch vụ Atlassian Cloud</a> của
                      Atlassian và chấp nhận <a href="">Chính sách bảo mật.</a>
                    </label>
                  </div>

                  {/* Checkbox */}
                  {changeButton()}
                  <p className="mt-4 mb-4">Hoặc</p>
                  <AuthSupport />
                  <hr className="my-4"></hr>
                  <NavLink to={'/signIn'}>
                    Bạn đã có tài khoản? Đăng nhập
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
