import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Board from '../project/CreateBoard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { findAllWorkingSpace } from '../../redux/reducer/workingSpaceSlice';
import { findAllBoard } from '../../redux/reducer/boardSlice';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import { BoardType } from '../../types/board.type';
import { findAllBackground } from '../../redux/reducer/backgroundSlice';
import { BgType } from '../../types/bg.type';

export default function ContentBoard() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      <div className="history mt-5">
        <h5>Đã xem gần đây</h5>
        <div className="d-flex">
          <NavLink
            to={'/project'}
            className="card bg-dark text-white me-2 history-project"
          >
            <div className="card-img-overlay">
              <h5 className="card-title">test project</h5>
            </div>
          </NavLink>
        </div>
      </div>

      {listWorkingSpace &&
        listWorkingSpace.map((workingSpace: WorkingSpaceType) => {
          return (
            <div key={workingSpace.id} className="history mt-5 ">
              <h5>Không gian làm việc của {workingSpace.name}</h5>
              <div className="d-flex flex-wrap">
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
                <div className="dropdown">
                  <button
                    className="btn btn-light btn-create-board"
                    type="button"
                    id="dropdownMenuButton1"
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
              </div>
            </div>
          );
        })}
    </div>
  );
}
