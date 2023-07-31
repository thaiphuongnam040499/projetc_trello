import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../project/CreateBoard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { findAllWorkingSpace } from '../../redux/reducer/workingSpaceSlice';
import { findAllBoard } from '../../redux/reducer/boardSlice';
import { BoardType } from '../../types/board.type';
import { findAllBackground } from '../../redux/reducer/backgroundSlice';
import { BgType } from '../../types/bg.type';
import { User, UserId } from '../../types/user.type';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import Guest from './Guest';

export default function ContentBoard() {
  const user = localStorage.getItem('userLogin');
  const [userLogin, setUserLogin] = useState<UserId>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCreateBoard = useSelector(
    (state: RootState) => state.board
  ).board;

  useEffect(() => {
    if (user) {
      setUserLogin(JSON.parse(user).user);
    }
  }, [user]);

  useEffect(() => {
    dispatch(findAllWorkingSpace());
  }, []);

  const listWorkingSpace = useSelector((state: RootState) => {
    return state.workingSpace.listWorkingSpace;
  });

  useEffect(() => {
    dispatch(findAllBoard());
  }, []);

  const listBoard = useSelector((state: RootState) => state.board.listBoard);

  const handleClick = (
    board: BoardType,
    workingSpaceId: string,
    background: BgType
  ) => {
    navigate(`/project/${board.id}`, {
      state: {
        board: board,
        background: background,
        workingSpaceId: workingSpaceId,
      },
    });
  };

  const backgrounds = useSelector(
    (state: RootState) => state.backgrounds.backgrounds
  );

  useEffect(() => {
    dispatch(findAllBackground());
  }, []);

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
  const [charColors, setCharColors] = React.useState<any[]>([]);

  const getRandomCharColor = () => {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[randomIndex];
  };

  useEffect(() => {
    const charColorsArray: any[] = [];
    if (listWorkingSpace && listWorkingSpace.length > 0) {
      listWorkingSpace.forEach((workingSpace: WorkingSpaceType) => {
        charColorsArray.push(getRandomCharColor());
      });
    }
    setCharColors(charColorsArray);
  }, [listWorkingSpace]);

  return (
    <div className="ms-5 w-100">
      <div>
        <h5 className="mt-5">Các không gian làm việc của bạn</h5>
        {listWorkingSpace &&
          listWorkingSpace.map((workingSpace, index) => {
            if (workingSpace.userId === userLogin?.id) {
              return (
                <div key={workingSpace.id} className="history mt-4 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div
                        className="charAt me-2"
                        style={{
                          backgroundColor: charColors[index],
                        }}
                      >
                        <p className="text-center text-white">
                          {workingSpace.name.charAt(0).toUpperCase()}
                        </p>
                      </div>
                      <p className="m-0 fs-5 font">{workingSpace.name}</p>
                    </div>

                    <div>
                      <button className="btn btn-light border rounded me-2 btn-ws">
                        <i className="bi bi-kanban me-2 fs-6"></i>Bảng
                      </button>
                      <button className="btn btn-light border rounded me-2 btn-ws">
                        <i className="bi bi-columns-gap me-2 fs-6"></i>Dạng xem
                      </button>
                      <button className="btn btn-light border rounded me-2 btn-ws">
                        <i className="bi bi-people me-2 fs-6"></i>Thành viên
                      </button>
                      <button className="btn btn-light border rounded me-2 btn-ws">
                        <i className="bi bi-gear-wide me-2 fs-6"></i>Cài đặt
                      </button>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap mt-3">
                    {listBoard &&
                      listBoard.map((board: BoardType) => {
                        if (board.workingSpaceId === workingSpace.id) {
                          return backgrounds.map((background) => {
                            if (background.id === board.backgroundId) {
                              return (
                                <div
                                  onClick={() =>
                                    handleClick(
                                      board,
                                      workingSpace.id,
                                      background
                                    )
                                  }
                                  key={board.id}
                                  className="card text-white me-2 mb-2 board "
                                  style={{
                                    backgroundImage: `url(${background.url})`,
                                  }}
                                >
                                  <div className="card-img-overlay">
                                    <h5 className="card-title">{board.name}</h5>
                                  </div>
                                </div>
                              );
                            }
                          });
                        }
                      })}
                    <React.Fragment>
                      <div className="dropdown">
                        <button
                          className="btn btn-light btn-create-board "
                          type="button"
                          data-bs-target={`dropdownMenuButton1_${workingSpace.id}`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Tạo bảng mới
                        </button>
                        <Board
                          backgrounds={backgrounds}
                          workingSpace={workingSpace}
                        />
                      </div>
                    </React.Fragment>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <Guest />
    </div>
  );
}
