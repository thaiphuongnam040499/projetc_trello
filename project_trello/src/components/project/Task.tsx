import React, { useState, useEffect } from 'react';
import { ListTask } from '../../types/listTask.type';
import { TaskType } from '../../types/task.type';
import {
  createTask,
  findAllTask,
  updateTask,
} from '../../redux/reducer/taskSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateListTask } from '../../redux/reducer/listTaskSlice';

interface TaskProps {
  listTask: ListTask;
}

const initialState = {
  id: '',
  listTaskId: '',
  name: '',
  status: false,
};

export default function Task({ listTask }: TaskProps) {
  const [isInputCreate, setIsInputCreate] = useState(false);
  const [task, setTask] = useState<TaskType>(initialState);
  const [complete, setComplete] = useState(0);

  const dispatch = useDispatch();

  const handleShowInput = () => {
    setIsInputCreate(true);
  };

  const handleOffInput = () => {
    setIsInputCreate(false);
  };

  const handleCreateTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(createTask(task));
    setTask({
      id: '',
      listTaskId: '',
      name: '',
      status: false,
    });
  };
  const tasks = useSelector((state: RootState) => state.task.tasks);

  useEffect(() => {
    dispatch(findAllTask());
  }, []);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newCheckedValue = e.target.checked;
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    let uTask = {
      ...task,
      status: newCheckedValue,
    };
    dispatch(updateTask(uTask));

    let count = tasks.filter((task) => task.listTaskId === listTask.id).length;
    if (newCheckedValue) {
      setComplete(complete + 100 / count);
    } else {
      setComplete(complete - 100 / count);
    }
  };

  return (
    <div className="ps-2 px-2 mb-2">
      <span>{complete}%</span>
      <div className="progress mb-2">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${complete}%` }}
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {tasks.map((task) => {
        if (task.listTaskId === listTask.id) {
          return (
            <div key={task.id} className="d-flex">
              <input
                type="checkbox"
                name="agreement"
                checked={task.status}
                className="me-2"
                onChange={(e) => handleCheckboxChange(e, task.id)}
              />
              <p className="">{task.name}</p>
            </div>
          );
        }
      })}
      {isInputCreate ? (
        <div>
          <input
            type="text"
            className="input-dis m-3"
            placeholder="Thêm mục mới..."
            onChange={(e) =>
              setTask((prev) => ({
                ...prev,
                name: e.target.value,
                listTaskId: listTask.id,
              }))
            }
            value={task.name}
          />
          <div className="d-flex ms-3 mb-3">
            <button className="btn btn-primary me-2" onClick={handleCreateTask}>
              Lưu
            </button>
            <button className="btn btn-light" onClick={handleOffInput}>
              Hủy
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-light border rounded m-3"
          onClick={handleShowInput}
        >
          Thêm một mục
        </button>
      )}
    </div>
  );
}