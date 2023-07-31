import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import WorkingSpace from '../yourBoard/WorkingSpace';
import { useDispatch, useSelector } from 'react-redux';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import { RootState } from '../../redux/store';
import { findAllWorkingSpace } from '../../redux/reducer/workingSpaceSlice';
import { UserId } from '../../types/user.type';
import { match } from 'assert';

export default function Sidebar() {
  const user = localStorage.getItem('userLogin');
  const [userLogin, setUserLogin] = useState<UserId>();
  const dispatch = useDispatch();
  const listWorkingSpace = useSelector(
    (state: RootState) => state.workingSpace.listWorkingSpace
  );

  const colorCodes = [
    '#FF5733',
    '#4B0082',
    '#00FF7F',
    '#800080',
    '#FFD700',
    '#FF1493',
    '#00BFFF',
    '#FF4500',
    '#008080',
    '#FF6347',
    '#4682B4',
    '#FF69B4',
    '#20B2AA',
    '#EE82EE',
    '#7B68EE',
    '#CD5C5C',
    '#00CED1',
    '#9370DB',
    '#8A2BE2',
    '#F08080',
    '#00FA9A',
    '#C71585',
    '#66CDAA',
  ];
  const [charColors, setCharColors] = React.useState<string[]>([]);

  const getRandomCharColor = () => {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[randomIndex];
  };

  useEffect(() => {
    const charColorsArray: string[] = [];
    if (listWorkingSpace && listWorkingSpace.length > 0) {
      listWorkingSpace.forEach((workingSpace: WorkingSpaceType) => {
        charColorsArray.push(getRandomCharColor());
      });
    }
    setCharColors(charColorsArray);
  }, [listWorkingSpace]);

  useEffect(() => {
    if (user) {
      setUserLogin(JSON.parse(user).user);
    }
  }, [user]);

  useEffect(() => {
    dispatch(findAllWorkingSpace());
  }, []);

  return (
    <div className="ms-5 pt-5">
      <div className="flex-shrink-0 p-3 sidebar border-secondary">
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
            <div className="collapse" id="dashboard-collapse"></div>
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
            <div className="d-flex justify-content-around align-items-center mb-2">
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
                  if (workingSpace.userId === userLogin?.id) {
                    return (
                      <div key={index}>
                        <button
                          className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed mb-3 d-flex"
                          data-bs-toggle="collapse"
                          data-bs-target={`#account-collapse_${workingSpace.id}`}
                          aria-expanded="false"
                        >
                          <div
                            className="charAt"
                            style={{
                              backgroundColor: charColors[index],
                            }}
                          >
                            <p className="text-center text-white">
                              {workingSpace.name.charAt(0).toUpperCase()}
                            </p>
                          </div>
                          <p className="ms-2">{workingSpace.name}</p>
                        </button>
                        <div
                          className="collapse"
                          id={`account-collapse_${workingSpace.id}`}
                        ></div>
                      </div>
                    );
                  }
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
