import React from 'react';
import { Card } from 'react-trello-ts/dist/types/Board';
import CreateListTask from './CreateListTask';
import ModalCardBody from './ModalCardBody';
import { Lane } from '../../types/lanes.type';
import CreateDateTime from './CreateDateTime';

interface ModalCardProps {
  cardId: string;
  close: () => void;
  cards: Card[];
  lanes: Lane[];
}

export default function ModalCard({
  cardId,
  close,
  cards,
  lanes,
}: ModalCardProps) {
  const cardDetail = cards.find((item) => item.id === cardId);

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
            <ModalCardBody cardId={cardId} />
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
                      <div className="d-flex align-items-center">
                        <img
                          src="https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/279907275_4922290994548164_1826307093755862115_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2nuP9mxtn-EAX9I3szN&_nc_ht=scontent.fhan1-1.fna&oh=00_AfCTND7OFGoLy9fVnbBo37PVKERY2S642Jxo0gPcjijxiw&oe=64C3ECE4"
                          alt=""
                          className="member-input"
                        />
                        <p className="ms-2">Phương Nam Thái(phngnamthai)</p>
                      </div>
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
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
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
