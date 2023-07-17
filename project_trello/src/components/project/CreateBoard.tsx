import React, { useState, useEffect } from 'react';
import { BoardType } from '../../types/board.type';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../redux/reducer/boardSlice';
import { WorkingSpaceType } from '../../types/workingSpace.type';

const initialState: BoardType = {
  id: '',
  name: '',
  workingSpaceId: '',
  workingSpaceName: '',
};

interface BoardProps {
  workingSpace: WorkingSpaceType;
}

export default function Board({ workingSpace }: BoardProps) {
  const dispatch = useDispatch();

  const [board, setBoard] = useState<BoardType>(initialState);

  useEffect(() => {
    setBoard({
      ...board,
      workingSpaceId: workingSpace.id,
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
