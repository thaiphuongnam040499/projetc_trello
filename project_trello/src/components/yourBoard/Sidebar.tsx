import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import WorkingSpace from '../yourBoard/WorkingSpace';
import { useDispatch, useSelector } from 'react-redux';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import { RootState } from '../../redux/store';
import { findAllWorkingSpace } from '../../redux/reducer/workingSpaceSlice';

export default function Sidebar() {
  const dispatch = useDispatch();

  const listWorkingSpace = useSelector(
    (state: RootState) => state.workingSpace.listWorkingSpace
  );

  useEffect(() => {
    dispatch(findAllWorkingSpace());
  }, []);

  return (
    <div className="">
      <div className="flex-shrink-0 p-3 sidebar border-end border-start border-secondary">
        <ul className="list-unstyled ps-0">
          <NavLink to={'/home/contentBoard'} className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn  align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-trello px-2"></i>
              Bảng
            </button>
          </NavLink>
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-box px-2"></i>
              Mẫu
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
          <NavLink to={'/home'} className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <i className="bi bi-activity px-2"></i>
              Trang chủ
            </button>
            <div className="collapse" id="orders-collapse"></div>
          </NavLink>
          <li className="border-top my-3" />
          <li className="mb-1">
            <div className="d-flex justify-content-around align-items-center">
              <p>Các không gian làm việc</p>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            {listWorkingSpace &&
              listWorkingSpace.map(
                (workingSpace: WorkingSpaceType, index: any) => {
                  return (
                    <div key={index}>
                      <button
                        className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target={`#account-collapse_${workingSpace.id}`}
                        aria-expanded="false"
                      >
                        Không gian làm việc của {workingSpace.name}
                      </button>
                      <div
                        className="collapse"
                        id={`account-collapse_${workingSpace.id}`}
                      >
                        <ul className="btn-toggle w-100 text-start sidebar-btn-nav small">
                          <li className="mb-3">
                            <NavLink
                              to={'/home/contentBoard'}
                              className="link-dark rounded  text-decoration-none"
                            >
                              <i className="bi bi-table me-2"></i>
                              Bảng
                            </NavLink>
                          </li>
                          <li className="mb-3">
                            <a className="link-dark rounded  text-decoration-none">
                              <i className="bi bi-heart me-2"></i>
                              Điểm nổi bật
                            </a>
                          </li>
                          <li className="mb-3">
                            <a className="link-dark rounded  text-decoration-none">
                              <i className="bi bi-border-all me-2"></i>
                              Hình
                            </a>
                          </li>
                          <li className="mb-3">
                            <a className="link-dark rounded  text-decoration-none">
                              <i className="bi bi-people-fill me-2"></i>
                              Thành viên
                            </a>
                          </li>
                          <li className="mb-3">
                            <a className="link-dark rounded  text-decoration-none">
                              <i className="bi bi-gear-wide-connected me-2"></i>
                              Cài đặt
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
          </li>
        </ul>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <WorkingSpace />
      </div>
    </div>
  );
}
