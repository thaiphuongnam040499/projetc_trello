import { NavLink, useNavigate } from 'react-router-dom';
import useCutomeHook from '../../redux/contants/useCutomeHook';
import { useState } from 'react';

export default function () {
  const navigate = useNavigate();
  const { userLogin } = useCutomeHook();

  const handleSignOut = () => {
    localStorage.removeItem('userLogin');
    navigate('/');
  };

  const [isShowUser, setIsShowUser] = useState(false);
  const handleShowOption = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShowUser(true);
  };

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-home">
        <div className="container-fluid">
          <i className="bi bi-trello"></i>
          <NavLink className="navbar-brand ms-2" to={'/home/contentBoard'}>
            Trello
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link fs-6"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Các không gian làm việc
                  <i className="bi bi-chevron-down ms-1 fs-6"></i>
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link fs-6"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gần đây
                  <i className="bi bi-chevron-down ms-1 fs-6"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link fs-6"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Đã đánh dấu sao
                  <i className="bi bi-chevron-down ms-1 fs-6"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link fs-6"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mẫu
                  <i className="bi bi-chevron-down ms-1 fs-6"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="notification">
                <i className="bi bi-bell ms-2 fs-5"></i>
              </div>
              <div className="question">
                <i className="bi bi-question-circle ms-2 fs-5"></i>
              </div>
              <div className="themes">
                <i className="bi bi-circle-half ms-2 fs-5"></i>
              </div>
              <div>
                {userLogin ? (
                  <div className="dropdown">
                    <button
                      style={{ backgroundImage: `url(${userLogin.imageUrl})` }}
                      onClick={(e) => handleShowOption(e)}
                      className="border rounded-circle ms-2 fs-5 profile-img btn"
                    ></button>
                    {isShowUser ? (
                      <ul className="profile-menu border rounded p-3">
                        <li className="mb-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="text-dark mb-2 p-0">Tài khoản</p>
                            <button
                              onClick={() => setIsShowUser(false)}
                              className="btn btn-light"
                            >
                              <i className="bi bi-x-lg text-dark "></i>
                            </button>
                          </div>
                          <div className="d-flex">
                            <img
                              src={userLogin.imageUrl}
                              alt=""
                              className="profile-img border rounded-circle"
                            />
                            <a className="dropdown-item" href="#">
                              {userLogin.name}
                            </a>
                          </div>
                        </li>
                        <li>
                          <button className=" btn btn-light w-100 text-start">
                            Thông tin tài khoản
                          </button>
                        </li>
                        <li>
                          <button className=" btn btn-light w-100 text-start">
                            Cài đặt
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={handleSignOut}
                            className=" btn btn-light w-100 text-start"
                          >
                            Đăng xuất
                          </button>
                        </li>
                      </ul>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
