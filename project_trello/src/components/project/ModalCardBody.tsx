import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ListTask } from '../../types/listTask.type';
import { useDispatch } from 'react-redux';
import { findAllListTask } from '../../redux/reducer/listTaskSlice';
import Task from './Task';
import { createTask, findAllTask } from '../../redux/reducer/taskSlice';
import { TaskType } from '../../types/task.type';

interface ModalCardBodyProps {
  cardId: string;
}
const initialState = {
  id: '',
  listTaskId: '',
  name: '',
  status: false,
};

export default function ModalCardBody({ cardId }: ModalCardBodyProps) {
  const [isShowComment, setIsShowComment] = useState(false);
  const [isShowDis, setIsShowDis] = useState(false);
  const dispatch = useDispatch();

  const handleShowComment = () => {
    setIsShowComment(true);
  };

  const handleShowDis = () => {
    setIsShowDis(true);
  };

  useEffect(() => {
    dispatch(findAllListTask());
  }, []);

  const listTask = useSelector((state: RootState) => state.listTask.listTask);

  return (
    <form className="card-modal-body">
      <div className="ms-3 ps-2 px-2 mb-2">
        <p>Thông báo</p>
        <button
          type="button"
          className="btn btn-light border rounded"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-eye"></i>
          Theo dõi
        </button>
      </div>
      <div className="ps-2 px-2 mb-2">
        <div className="d-flex">
          <i className="bi bi-justify-left me-2"></i>
          <h6>Mô tả</h6>
        </div>
        {isShowDis ? (
          <div>
            <input
              type="text"
              className="input-dis m-3"
              placeholder="Thêm mô tả chi tiết hơn..."
            />
            <div className="d-flex ms-3 mb-3">
              <button className="btn btn-primary me-2">Lưu</button>
              <button
                className="btn btn-light"
                onClick={() => setIsShowDis(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleShowDis}
            className="btn btn-light border rounded w-100 mb-3"
          >
            Thêm mô tả chi tiết hơn
          </button>
        )}
        {listTask.map((listTask: ListTask) => {
          if (listTask.cardId === cardId) {
            return (
              <div key={listTask.id}>
                <div className="ps-2 px-2 mb-2">
                  <div className="d-flex justify-content-between  ">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check2-square me-2"></i>
                      <h6 className="m-0 p-0">{listTask.name}</h6>
                    </div>
                    <div>
                      <button className="btn btn-light border rounded me-2">
                        Ẩn danh sách đã chọn
                      </button>
                      <button className="btn btn-light border rounded">
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
                <Task listTask={listTask} />
              </div>
            );
          }
        })}
      </div>
      <div className="ps-2 px-2 mb-2">
        <div className="d-flex">
          <i className="bi bi-body-text me-2"></i>
          <h6>Hoạt động</h6>
        </div>
        {isShowComment ? (
          <div className="">
            <input
              type="text"
              className="input-comment m-3"
              placeholder="Hãy viết bình luận của bạn"
            />
            <div className="d-flex align-items-center ms-3">
              <button className="btn btn-primary me-2">Lưu</button>
              <input type="checkbox" className="ms-3" />
              <p className="ms-2">Theo dõi</p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-light border rounded w-100 mb-5"
            onClick={handleShowComment}
          >
            Viết bình luận...
          </button>
        )}
      </div>
    </form>
  );
}
