import React, { useState, useEffect, createContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ListTask } from '../../types/listTask.type';
import { useDispatch } from 'react-redux';
import * as listTaskSlice from '../../redux/reducer/listTaskSlice';
import Task from './Task';
import * as dateTimeSlice from '../../redux/reducer/dateTimeSlice';
import { DateTime } from '../../types/dateTime.type';

import CreateDescription from './CreateDescription';
import { MemberId, MemberType } from '../../types/member.type';
import { BgColor } from '../../types/bColor.type';

interface ModalCardBodyProps {
  cardId: string;
  bgColors: BgColor[];
  boardId: string;
}
const initialState = {
  id: '',
  listTaskId: '',
  name: '',
  status: false,
};

export default function ModalCardBody({
  cardId,
  bgColors,
  boardId,
}: ModalCardBodyProps) {
  const [isShowComment, setIsShowComment] = useState(false);
  const [isShowDis, setIsShowDis] = useState(false);
  const dispatch = useDispatch();
  const listTask = useSelector((state: RootState) => state.listTask.listTask);
  const dateTimes = useSelector((state: RootState) => state.dateTime.dateTimes);
  const cards = useSelector((state: RootState) => state.card.listCard);
  const members = useSelector((state: RootState) => state.members.members);

  useEffect(() => {
    dispatch(dateTimeSlice.findAllDateTime());
  }, []);

  useEffect(() => {
    dispatch(listTaskSlice.findAllListTask());
  }, []);

  const handleShowComment = () => {
    setIsShowComment(true);
  };

  const handleShowDis = () => {
    setIsShowDis(true);
  };

  const handleOffShowDis = () => {
    setIsShowDis(false);
  };

  const handleDeleteListTask = (
    e: React.FormEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    dispatch(listTaskSlice.deleteListTask(id));
  };

  const handleChangeStatus = (
    dateTime: DateTime,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCheckedValue = e.target.checked;
    let uDateTime = {
      ...dateTime,
      status: newCheckedValue,
    };
    dispatch(dateTimeSlice.updateDateTime(uDateTime));
  };

  return (
    <form className="card-modal-body">
      <div className="ms-3 ps-2 px-2 mb-2 d-flex flex-wrap">
        <div className="me-3 mt-2 mb-2">
          <div>
            <p>Thành viên</p>
          </div>
          <div className="d-flex">
            {members.map((item) => {
              if (item.cardId === cardId) {
                return (
                  <div key={item.id}>
                    <img src={item.imageUrl} alt="" className="member-input" />
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="me-3 mt-2 mb-2">
          <div>
            <p>Nhãn</p>
          </div>
          <div className="d-flex">
            {bgColors.map((bgColor) => {
              if (bgColor.status === true) {
                return (
                  <button
                    style={{ backgroundColor: bgColor.backgroundColor }}
                    className="btn btn-bgColor me-1"
                  ></button>
                );
              }
            })}
          </div>
        </div>
        {dateTimes.map((dateTime: DateTime) => {
          if (dateTime.cardId === cardId) {
            let date = new Date(dateTime.expirationDate);
            return (
              <div className="mt-2 mb-2" key={dateTime.id}>
                <p>Ngày hết hạn</p>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={dateTime.status}
                  onChange={(e) => handleChangeStatus(dateTime, e)}
                />
                <button type="button" className="btn btn-light border rounded">
                  {`${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()} lúc ${date.getHours()}:${date.getMinutes()}`}
                  {dateTime.status ? (
                    <span className="bg-success ms-2 text-white">Hoàn tất</span>
                  ) : (
                    <p></p>
                  )}
                </button>
              </div>
            );
          }
        })}
      </div>
      <div className="ps-2 px-2 mb-2">
        <div className="d-flex">
          <i className="bi bi-justify-left me-2"></i>
          <h6>Mô tả</h6>
        </div>
        {cards.map((card) => {
          if (card.id === cardId) {
            return (
              <p className="ms-5 mb-2" key={card.id}>
                {card.description}
              </p>
            );
          }
        })}

        {isShowDis ? (
          <CreateDescription
            handleOffShowDis={handleOffShowDis}
            cardId={cardId}
          />
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
                      <button
                        className="btn btn-light border rounded"
                        onClick={(e) => handleDeleteListTask(e, listTask.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>

                <Task boardId={boardId} listTask={listTask} />
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
