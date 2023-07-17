import React from 'react';

export default function SidebarProject() {
  return (
    <div>
      <div className="flex-shrink-0 p-3 sidebar sidebar-project">
        <ul className="list-unstyled ps-0">
          <li>
            <p>Không gian làm việc của Phương Nam</p>
          </li>
          <hr className="my-3" />
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-trello px-2"></i>
              Bảng
            </button>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-person px-2"></i>
              Thành viên
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle w-100 text-start sidebar-btn-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Weekly
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Monthly
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-gear px-2"></i>
              Các cài đặt không gian làm việc
            </button>
            <div className="collapse" id="orders-collapse"></div>
          </li>
          <li className="border-top my-3" />
        </ul>
        <ul className="list-unstyled ps-0">
          <li>
            <p>Dạng xem không gian làm việc</p>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-table px-2"></i>
              Bảng
            </button>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-calendar px-2"></i>
              Lịch
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle w-100 text-start sidebar-btn-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Weekly
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Monthly
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded">
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled ps-0">
          <li>
            <p>Các bảng của bạn</p>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-trello px-2"></i>
              Bảng
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
