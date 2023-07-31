import React from 'react';

export default function Filter() {
  return (
    <div className="dropdown me-3">
      <button
        className="btn btn-light btn-filter"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-filter me-2"></i>
        Lọc
      </button>
      <ul
        className="dropdown-menu p-3 filter-dropdown"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <p>Từ khóa</p>
          <input
            type="text"
            className="w-100 input-date border rounded mt-1 mb-1 p-2"
          />
          <p>Tìm kiếm các thẻ, các nhãn, các thành viên </p>
        </li>
        <li className="mt-2">
          <p className="">Thành viên</p>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input type="checkbox" className="me-2" />
            <div>
              <i className="bi bi-person me-2"></i>Không có thành viên
            </div>
          </div>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input type="checkbox" className="me-2" />
            <div>
              {' '}
              <img src="" alt="" className="me-2 member-filter" />
              Các thẻ đã chỉ định cho tôi
            </div>
          </div>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input type="checkbox" className="me-2" />
            <div className="select-filter">
              <select className="select-filter border rounded" id="">
                <option value="">Chọn thành viên</option>
                <option value="">Nhân tíc</option>
              </select>
            </div>
          </div>
        </li>
        <li className="mt-2">
          <p>Nhãn</p>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input type="checkbox" className="me-2" />
            <div>
              <i className="bi bi-person me-2"></i>Không có thành viên
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
