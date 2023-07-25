import React, { useState, useEffect } from 'react';
import { BoardType } from '../../types/board.type';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../redux/reducer/boardSlice';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { findAllBackground } from '../../redux/reducer/backgroundSlice';
import { BgType } from '../../types/bg.type';

const initialState: BoardType = {
  id: '',
  name: '',
  workingSpaceId: '',
  workingSpaceName: '',
  backgroundId: '',
};

interface BoardProps {
  workingSpace: WorkingSpaceType;
  backgrounds: BgType[];
}

export default function Board({ workingSpace, backgrounds }: BoardProps) {
  const dispatch = useDispatch();
  const [board, setBoard] = useState<BoardType>(initialState);

  useEffect(() => {
    setBoard({
      ...board,
      workingSpaceId: workingSpace.id,
      backgroundId: board.backgroundId,
    });
  }, [workingSpace]);

  const handleCreateBoard = () => {
    dispatch(createBoard(board));
  };

  return (
    <ul
      className="dropdown-menu btn-create-dropdown p-3"
      aria-labelledby="dropdownMenuButton1"
    >
      <li className="text-center mb-3">
        <p>Tạo bảng</p>
      </li>
      <li className="text-center mb-2">
        <img
          src="https://trello.com/assets/14cda5dc635d1f13bc48.svg"
          alt=""
          className="img-create-board"
        />
      </li>
      <li>
        <p>Phông nền</p>
        <div className="d-flex">
          {backgrounds.map((background) => {
            return (
              <input
                key={background.id}
                type="button"
                onClick={() =>
                  setBoard((prev) => ({ ...prev, backgroundId: background.id }))
                }
                className="btn-background ms-2 mb-2 mt-2 border rounded"
                style={{ backgroundImage: `url(${background.url})` }}
              />
            );
          })}
        </div>
      </li>
      <li>
        <p className="mb-2">Tiêu đề bảng</p>
        <input
          onChange={(e) =>
            setBoard((prev: BoardType) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          value={board.name}
          className="border rounded w-100 mb-2 title_input"
          type="text"
        />
      </li>
      <li>
        <p className="mb-2">Không gian làm việc</p>
        <select
          onChange={(e) =>
            setBoard((prev: BoardType) => ({
              ...prev,
              workingSpaceName: e.target.value,
            }))
          }
          className="border rounded w-100 mb-3 create-board"
        >
          <option value="">Chọn</option>
          <option
            value={workingSpace.name}
            className="border rounded w-100 mb-2 create-board"
          >
            Không gian làm việc của {workingSpace.name}
          </option>
        </select>
      </li>
      <li>
        <button onClick={handleCreateBoard} className="btn btn-primary w-100">
          Tạo bảng
        </button>
      </li>
    </ul>
  );
}
