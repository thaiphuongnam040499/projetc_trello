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
                <div className="dropdown ">
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
                    <i className="bi bi-card-image me-2"></i>
                    Ảnh bìa
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
              <div className="ms-3 ps-2 px-2 mb-2">
                <p>Thao tác</p>
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Di chuyển
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
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sao chép
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
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tạo mẫu
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
                <div className="dropdown">
                  <button
                    className="btn btn-light w-100 border rounded mb-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lưu trữ
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
