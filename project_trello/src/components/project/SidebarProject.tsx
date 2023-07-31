import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { findAllBoard } from '../../redux/reducer/boardSlice';
import { BoardType } from '../../types/board.type';
import { findAllBackground } from '../../redux/reducer/backgroundSlice';

export default function SidebarProject() {
  const boards = useSelector((state: RootState) => state.board.listBoard);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const bgImage = useSelector(
    (state: RootState) => state.backgrounds.backgrounds
  );

  useEffect(() => {
    dispatch(findAllBackground());
  }, []);

  const handleClick = () => {
    navigate('/table', {
      state: {
        workingSpaceId: location.state.workingSpaceId,
        boardId: location.state.board.id,
      },
    });
  };

  const handleClickBtn = (
    e: React.FormEvent<HTMLButtonElement>,
    board: BoardType
  ) => {
    e.preventDefault();
    navigate(`project/${board.id}`, {
      state: {
        board: board,

        workingSpaceId: location.state.workingSpaceId,
      },
    });
  };

  useEffect(() => {
    dispatch(findAllBoard());
  }, []);
  return (
    <div>
      <div className="flex-shrink-0 p-3 sidebar sidebar-project border-end">
        <ul className="list-unstyled ps-0">
          <li>
            <p>Không gian làm việc của Phương Nam</p>
          </li>
          <hr className="my-3" />
          <li className="mb-1">
            <button
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed  "
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
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed "
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
              className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed "
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
              onClick={handleClick}
            >
              <i className="bi bi-table px-2"></i>
              Bảng
            </button>
          </li>
        </ul>
        <ul className="list-unstyled ps-0 ">
          <li>
            <p>Các bảng của bạn</p>
          </li>

          <div className="boards scrollbar scrollbar-indigo bordered-black thin">
            {boards.map((board) => {
              if (board.workingSpaceId === location.state.workingSpaceId) {
                return (
                  <li key={board.id} className="mb-1 ">
                    {bgImage.map((bg) => {
                      if (bg.id === board.backgroundId) {
                        return (
                          <button
                            className="btn btn-toggle w-100 text-start sidebar-btn align-items-center rounded collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse"
                            aria-expanded="false"
                            onClick={(e) => handleClickBtn(e, board)}
                          >
                            <img src={bg.url} alt="" className="image-board" />
                            {board.name}
                          </button>
                        );
                      }
                    })}
                  </li>
                );
              }
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
