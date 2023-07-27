import React, { useEffect } from 'react';
import { TaskType } from '../../types/task.type';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/reducer/taskSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { findAllMember, updateMember } from '../../redux/reducer/memberSlice';
import { MemberId } from '../../types/member.type';

interface TaskOptionProps {
  task: TaskType;
}

export default function TaskOption({ task }: TaskOptionProps) {
  const members = useSelector((state: RootState) => state.members.members);
  const dispatch = useDispatch();

  const memberItem: MemberId | undefined = members.find(
    (member) => member.taskId === task.id
  );

  useEffect(() => {
    dispatch(findAllMember());
  }, []);

  const handleClick = (
    e: React.FormEvent<HTMLButtonElement>,
    member: MemberId
  ) => {
    e.preventDefault();
    if (member.taskId == '') {
      dispatch(
        updateMember({
          ...member,
          taskId: task.id,
        })
      );
    }
  };

  const handleDeleteTask = (
    id: string,
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    dispatch(deleteTask(id));
  };

  return (
    <div className="d-flex option align-items-center">
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
        {!memberItem ? (
          <button
            className="btn btn-light fs-6 m-1 "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-add"></i>
          </button>
        ) : (
          members.map((member) => {
            if (member.taskId === task.id) {
              return (
                <div key={member.id}>
                  <img src={member.imageUrl} alt="" className="member-input" />
                </div>
              );
            }
          })
        )}

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <p className="text-center">Thành viên</p>
          </li>
          <li className="mb-2 mt-2">
            <input
              type="text"
              className="w-100 border rounded list-member-input"
              placeholder="Tìm kiếm các thành viên"
            />
          </li>
          <li>
            <p className="fs-6">Thành viên của bảng</p>
          </li>
          <li className="mb-2 mt-2">
            {members.map((member) => {
              return (
                <div key={member.id}>
                  <button
                    key={member.id}
                    className="d-flex align-items-center mb-2 btn btn-light w-100"
                    onClick={(e) => handleClick(e, member)}
                  >
                    <img
                      src={member.imageUrl}
                      alt=""
                      className="member-input"
                    />
                    <p className="ms-2">{member.email}</p>
                  </button>
                </div>
              );
            })}
          </li>
        </ul>
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
