import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthSupport from './AuthSupport';

export default function SignIn() {
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
                  <h5 className="mb-5 mt-5">Đăng nhập vào trello</h5>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Nhập Email"
                    />
                  </div>

                  {/* Checkbox */}
                  <button type="button" className="btn btn-success w-100">
                    Tiếp tục
                  </button>
                  <p className="mt-4 mb-4">Hoặc</p>
                  <AuthSupport />
                  <hr className="my-4"></hr>
                  <div>
                    <a href="">Không thể đăng nhập?</a>
                    <span>.</span>
                    <NavLink to={'/signUp'}>Đăng kí tài khoản</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
