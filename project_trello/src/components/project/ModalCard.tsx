import React from 'react';

export default function ModalCard() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog card-modal">
        <div className="modal-content card-modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Lập kế hoạch dự án
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex">
            <form className="card-modal-body">
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Thông báo</p>
                <button
                  type="button"
                  className="btn btn-light border rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-eye"></i>
                  Theo dõi
                </button>
              </div>
              <div className="ps-2 px-2 mb-2">
                <div className="d-flex">
                  <i className="bi bi-justify-left me-2"></i>
                  <h6>Mô tả</h6>
                </div>
                <button
                  type="button"
                  className="btn btn-light border rounded w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Thêm mô tả chi tiết hơn
                </button>
              </div>
              <div className="ps-2 px-2 mb-2">
                <div className="d-flex">
                  <i className="bi bi-body-text me-2"></i>
                  <h6>Hoạt động</h6>
                </div>
                <button
                  type="button"
                  className="btn btn-light border rounded w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Viết bình luận...
                </button>
              </div>
            </form>
            <form className="create-tag">
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Thêm vào thẻ</p>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Thành viên
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Nhãn
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Việc cần làm
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ngày
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Đính kèm
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ảnh bìa
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Trường tùy chỉnh
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Tiện ích bổ sung</p>
                <button
                  type="submit"
                  className="btn btn-light w-100 text-start"
                >
                  <i className="bi bi-plus-lg mx-2"></i>
                  Thêm tiện ích bổ sung
                </button>
              </div>
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Tự động hóa</p>
                <button
                  type="submit"
                  className="btn btn-light w-100 text-start"
                >
                  <i className="bi bi-plus-lg mx-2"></i>
                  Thêm nút
                </button>
              </div>
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Thao tác</p>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Di chuyển
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sao chép
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tạo mẫu
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lưu trữ
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
