import React, { useState, useEffect } from 'react';
import { ListTask } from '../../types/listTask.type';
import { useDispatch } from 'react-redux';
import { createListTask } from '../../redux/reducer/listTaskSlice';

interface CreateListTaskProps {
  cardId: string;
}

const initialState = {
  id: '',
  cardId: '',
  name: '',
  status: false,
};

export default function CreateListTask({ cardId }: CreateListTaskProps) {
  const [listTask, setListTask] = useState<ListTask>(initialState);

  const dispatch = useDispatch();

  useEffect(() => {
    setListTask({
      ...listTask,
      cardId: cardId,
    });
  }, []);

  const handleAddList = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(createListTask(listTask));
  };
  return (
    <div className="dropdown">
      <button
        className="btn btn-light w-100 border rounded mb-2 text-start "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-check2-square me-2"></i>
        Thêm công việc
      </button>
      <ul
        className="dropdown-menu list-task"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="p-2">
          <p className="mb-2">Tiêu đề</p>
          <input
            type="text"
            className="w-100 mb-2 input-list-task"
            placeholder="nhập tiêu đề..."
            value={listTask.name}
            onChange={(e) =>
              setListTask((prev: ListTask) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <button className="btn btn-primary" onClick={handleAddList}>
            Thêm
          </button>
        </li>
      </ul>
    </div>
  );
}
