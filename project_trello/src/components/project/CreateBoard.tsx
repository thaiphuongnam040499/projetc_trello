import React, { useState, useEffect } from 'react';
import { BoardType } from '../../types/board.type';
import { useDispatch } from 'react-redux';
import { createBoard, reset } from '../../redux/reducer/boardSlice';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import { BgType } from '../../types/bg.type';
import { createMember, findAllMember } from '../../redux/reducer/memberSlice';
import { User, UserId } from '../../types/user.type';
import { Role } from '../../enums/Role';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const initialState: BoardType = {
  id: '',
  name: '',
  workingSpaceId: '',
  workingSpaceName: '',
  backgroundId: '',
};

interface BoardProps {
  backgrounds: BgType[];
  workingSpace: WorkingSpaceType | undefined;
}

export default function Board({ workingSpace, backgrounds }: BoardProps) {
  const dispatch = useDispatch();
  const [board, setBoard] = useState<BoardType>(initialState);
  const user = localStorage.getItem('userLogin');
  const [userLogin, setUserLogin] = useState<UserId>();
  const currentCreateBoard = useSelector(
    (state: RootState) => state.board
  ).board;

  useEffect(() => {
    if (user) {
      setUserLogin(JSON.parse(user).user);
    }
  }, [user]);

  const createMemberAd = () => {
    if (!userLogin) return;
    if (!currentCreateBoard) return;
    let member = {
      name: userLogin.name,
      email: userLogin.email,
      imageUrl: userLogin.imageUrl,
      boardId: currentCreateBoard.id,
      role: Role.ADMIN,
    };
    dispatch(createMember(member));
  };

  useEffect(() => {
    if (currentCreateBoard && workingSpace?.id === currentCreateBoard.id) {
      setTimeout(() => {
        createMemberAd();
      }, 150);
      dispatch(reset());
    }
  }, [currentCreateBoard]);

  const handleCreateBoard = () => {
    dispatch(
      createBoard({
        ...board,
        workingSpaceId: workingSpace?.id,
        backgroundId: board.backgroundId,
      })
    );
    setBoard(initialState);
  };

  return (
    <ul
      className="dropdown-menu btn-create-dropdown p-3"
      aria-labelledby={`dropdownMenuButton1${workingSpace?.id}`}
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
            value={workingSpace?.name}
            className="border rounded w-100 mb-2 create-board"
          >
            Không gian làm việc của {workingSpace?.name}
          </option>
        </select>
      </li>
      <li>
        <button
          onClick={() => handleCreateBoard()}
          className="btn btn-primary w-100"
        >
          Tạo bảng
        </button>
      </li>
    </ul>
  );
}
