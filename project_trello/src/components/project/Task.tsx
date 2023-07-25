import React, { useState, useEffect, useRef } from 'react';
import { ListTask } from '../../types/listTask.type';
import { TaskType } from '../../types/task.type';
import * as taskSlice from '../../redux/reducer/taskSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TaskOption from './TaskOption';

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
  const [isShowInputUp, setIsShowInputUp] = useState({ id: '', stat: false });
  const [task, setTask] = useState<TaskType>(initialState);
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);

  useEffect(() => {
    dispatch(taskSlice.findAllTask());
  }, []);

  const handleShowInput = () => {
    setIsInputCreate(true);
  };

  const handleOffInput = () => {
    setIsInputCreate(false);
  };

  const handleShowInputUp = (id: string) => {
    setIsShowInputUp({
      id: id,
      stat: true,
    });
  };

  const handleOffShowInputUp = (id: string) => {
    setIsShowInputUp({
      id: id,
      stat: false,
    });
  };

  const handleCreateTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(taskSlice.createTask(task));
    setTask({
      id: '',
      listTaskId: '',
      name: '',
      status: false,
    });
  };

  const handleChangeComplete = () => {
    let task = tasks.filter((task) => task.listTaskId === listTask.id);
    let tasksTrue = task.filter((task) => task.status === true);
    let complete = (tasksTrue.length / task.length) * 100;
    return complete;
  };

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
    dispatch(taskSlice.updateTask(uTask));
  };

  const handleUpdateTask = (
    e: React.FormEvent<HTMLButtonElement>,
    taskU: TaskType
  ) => {
    e.preventDefault();
    let taskUp = {
      ...taskU,
      name: task.name,
    };
    dispatch(taskSlice.updateTask(taskUp));
  };

  return (
    <div className="ps-2 px-2 mb-2">
      <span>{handleChangeComplete()}%</span>
      <div className="progress mb-2">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${handleChangeComplete()}%` }}
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {tasks.map((task) => {
        if (task.listTaskId === listTask.id) {
          return (
            <div key={task.id} className="d-flex justify-content-between tasks">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={task.status}
                  className="me-2 ms-2"
                  onChange={(e) => handleCheckboxChange(e, task.id)}
                />
                {isShowInputUp.stat && isShowInputUp.id === task.id ? (
                  <div>
                    <input
                      type="text"
                      className="input-dis m-3"
                      placeholder={task.name}
                      // value={task.name}
                      onChange={(e) =>
                        setTask((prev: TaskType) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                    <div className="d-flex ms-3 mb-3">
                      <button
                        onClick={(e) => handleUpdateTask(e, task)}
                        className="btn btn-primary me-2"
                      >
                        Lưu
                      </button>
                      <button
                        className="btn btn-light"
                        onClick={() => handleOffShowInputUp(task.id)}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  </div>
                ) : (
                  <p onClick={() => handleShowInputUp(task.id)}>{task.name}</p>
                )}
              </div>
              <TaskOption task={task} />
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
