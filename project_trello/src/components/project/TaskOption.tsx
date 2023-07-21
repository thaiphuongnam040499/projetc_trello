import React from 'react';
import { TaskType } from '../../types/task.type';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/reducer/taskSlice';

interface TaskOptionProps {
  task: TaskType;
}

export default function TaskOption({ task }: TaskOptionProps) {
  const dispatch = useDispatch();

  const handleDeleteTask = (
    id: string,
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    dispatch(deleteTask(id));
  };

  return (
    <div className="d-flex option">
      <div className="dropdown">
        <button
          className="btn btn-light fs-6 m-1 "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-clock fs-6"></i>
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        ></ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-light fs-6 m-1 "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-person-add"></i>
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        ></ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-light fs-6 m-1 "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-three-dots"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="text-center">
            <p>Thao tác mục</p>
          </li>
          <hr className="my-2" />
          <li className="p-2">
            <button
              className=" border rounded btn btn-light w-100"
              onClick={(e) => handleDeleteTask(task.id, e)}
            >
              Xóa
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
