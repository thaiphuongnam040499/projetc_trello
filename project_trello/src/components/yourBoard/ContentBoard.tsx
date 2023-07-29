import React, { useEffect, useState } from 'react';
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
import WorkingSpaceBtn from './WorkingSpaceBtn';

export default function ContentBoard() {
  const user = localStorage.getItem('userLogin');
  const [userLogin, setUserLogin] = useState<UserId>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleClick = (id: any, workingSpaceId: string, background: BgType) => {
    // navigate('/project', { state: { boardId: id } });
    navigate(`/project/${id}`, {
      state: {
        boardId: id,
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

  return (
    <div className="ms-5 w-100">
      {listWorkingSpace &&
        listWorkingSpace.map((workingSpace) => {
          if (workingSpace.userId === userLogin?.id) {
            return (
              <div key={workingSpace.id} className="history mt-5 ">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="m-0 fs-5">
                    Không gian làm việc của {workingSpace.name}
                  </p>
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
                      {' '}
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
                                    board.id,
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

                  <WorkingSpaceBtn
                    backgrounds={backgrounds}
                    workingSpace={workingSpace}
                  />
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}
