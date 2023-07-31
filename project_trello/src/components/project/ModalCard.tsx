import React, { useState, useEffect } from 'react';
import { Card } from 'react-trello-ts/dist/types/Board';
import CreateListTask from './CreateListTask';
import ModalCardBody from './ModalCardBody';
import { Lane } from '../../types/lanes.type';
import CreateDateTime from './CreateDateTime';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MemberId, MemberType } from '../../types/member.type';
import { useDispatch } from 'react-redux';
import {
  findAllBgColor,
  updateBgColor,
} from '../../redux/reducer/backgroundSlice';
import { updateMember } from '../../redux/reducer/memberSlice';
import { BgColor } from '../../types/bColor.type';

interface ModalCardProps {
  cardId: string;
  close: () => void;
  cards: Card[];
  lanes: Lane[];
  boardId: string;
}

export default function ModalCard({
  cardId,
  close,
  cards,
  lanes,
  boardId,
}: ModalCardProps) {
  const cardDetail = cards.find((item) => item.id === cardId);
  const members = useSelector((state: RootState) => state.members.members);
  const [memberId, setMemberId] = useState('');
  const bgColors = useSelector(
    (state: RootState) => state.backgrounds.backgroundColors
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllBgColor());
  }, []);

  const handleClick = (
    e: React.FormEvent<HTMLButtonElement>,
    member: MemberId
  ) => {
    e.preventDefault();
    if (member.cardId === '') {
      dispatch(
        updateMember({
          ...member,
          cardId: cardId,
        })
      );
    } else {
      dispatch(
        updateMember({
          ...member,
          cardId: '',
        })
      );
    }
  };

  const handleChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    bgColor: BgColor
  ) => {
    const checkedValue = e.target.checked;
    dispatch(
      updateBgColor({
        ...bgColor,
        status: checkedValue,
      })
    );
  };

  return (
    <div className="showModal">
      <div className="modal-dialog card-modal ">
        <div className="modal-content card-modal-content ">
          <div className="modal-header">
            {lanes.map((lane) => {
              if (lane.id === cardDetail?.laneId) {
                return (
                  <div key={lane.id}>
                    <h5 className="modal-title" id="exampleModalLabel">
                      {cardDetail?.title}
                    </h5>
                    <p>Trong danh sách {lane.title}</p>
                  </div>
                );
              }
            })}

            <button
              type="button"
              onClick={close}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body modal-body-board d-flex">
            <ModalCardBody
              boardId={boardId}
              bgColors={bgColors}
              cardId={cardId}
            />
            <form className="create-tag">
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Thêm vào thẻ</p>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2 text-start"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person me-2"></i>
                    Thành viên
                  </button>
                  <ul
                    className="dropdown-menu p-2 member-list"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                        if (member.boardId === boardId) {
                          return (
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
                          );
                        }
                      })}
                    </li>
                  </ul>
                </div>
                <CreateListTask cardId={cardId} />
                <CreateDateTime cardId={cardId} />
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2  text-start"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-tags me-2"></i>
                    Nhãn
                  </button>
                  <ul
                    className="dropdown-menu tag p-2 border "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="mt-2 mb-2">
                      <p className="text-center">Nhãn</p>
                    </li>
                    <li className="mb-2">
                      <input
                        type="text"
                        placeholder="Tìm nhãn..."
                        className="border rounded list-member-input w-100"
                      />
                    </li>
                    <li className="mt-2 mb-2">
                      <p>Nhãn</p>
                    </li>
                    <li>
                      <div className="">
                        <div>
                          {bgColors.map((bgColor) => {
                            return (
                              <div
                                key={bgColor.id}
                                className="d-flex align-items-center mt-2 mb-2"
                              >
                                <input
                                  type="checkbox"
                                  className="ms-2"
                                  checked={bgColor.status}
                                  onChange={(e) =>
                                    handleChangeCheckbox(e, bgColor)
                                  }
                                />
                                <button
                                  style={{
                                    backgroundColor: bgColor.backgroundColor,
                                  }}
                                  className="tag-item btn border rounded ms-2 me-2"
                                ></button>
                                <button className="btn btn-edit-tag">
                                  <i className="bi bi-pen-fill pen-edit-tag "></i>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
