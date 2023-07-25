import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { findAllLane } from '../../redux/reducer/laneSlice';
import { findAllCard } from '../../redux/reducer/cardSlice';
import { findAllMember } from '../../redux/reducer/memberSlice';
import {
  findUserByEmail,
  getUserByEmail,
  login,
} from '../../redux/reducer/userSlice';

export default function TableProject() {
  const cards = useSelector((state: RootState) => state.card.listCard);
  const lanes = useSelector((state: RootState) => state.lanes.lanes);
  const dispatch = useDispatch();
  const member = useSelector((state: RootState) => state.members.members);
  const userSearch = useSelector((state: RootState) => state.user.listUser);

  const [memberSearch, setMemberSearch] = useState('');

  useEffect(() => {
    dispatch(findAllLane());
  }, []);

  useEffect(() => {
    dispatch(findAllCard());
  }, []);

  useEffect(() => {
    dispatch(findUserByEmail(memberSearch));
  }, [memberSearch]);

  return (
    <div className="w-100 ms-3 table-project ">
      <h3 className="ms-3 mt-2">Bảng</h3>
      <table className="table ">
        <thead>
          <tr className="text-center">
            <th scope="col">Thẻ</th>
            <th scope="col">Danh sách</th>
            <th scope="col">Thành viên</th>
            <th scope="col">Ngày hết hạn</th>
          </tr>
        </thead>

        <tbody className="">
          {lanes.map((lane) => {
            return cards.map((card) => {
              if (lane.id === card.laneId) {
                return (
                  <tr key={card.id}>
                    <td scope="row text-start">{card.title}</td>
                    <td>
                      <div key={lane.id} className="dropdown">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {lane.title}
                        </button>
                        <ul
                          className="dropdown-menu p-2 list-member"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <p className="text-center">Thay đổi danh sách</p>
                          </li>
                          <hr className="my-2" />
                          <li>
                            <p></p>
                          </li>
                          <li className=" mt-2 mb-2">
                            <input
                              type="text"
                              placeholder="Tìm kiếm các danh sách"
                              className="list-member-input"
                            />
                          </li>
                          <li>
                            <p>{lane.title}</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-light w-100 text-start"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-plus-lg"></i>
                        </button>
                        <ul
                          className="dropdown-menu p-2 list-member"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <p className="text-center">Thành viên</p>
                          </li>
                          <hr className="my-2 p-0" />
                          <li className=" mt-2 mb-2">
                            <input
                              type="text"
                              placeholder="Tìm kiếm các danh sách"
                              className="list-member-input"
                              onChange={(e) => setMemberSearch(e.target.value)}
                            />
                          </li>
                          <li>
                            <p>Thành viên của bảng</p>
                          </li>
                          <li className="d-flex align-items-center mt-2 mb-2 ms-2">
                            <img src="" alt="" className="member-input" />
                            <p className="ms-2">Nhân Nguyễn</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-light w-100 mb-2 text-start"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-plus-lg"></i>
                        </button>
                        <ul
                          className="dropdown-menu date-time"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li className="text-center">Ngày</li>
                          <hr className="my-2" />
                          <li className="p-2">
                            <div>
                              <p className="mb-2">Ngày hết hạn:</p>
                              <input
                                type="datetime-local"
                                className="w-100 mb-2 input-date border rounded p-3"
                              />
                              <div>
                                <button className="btn btn-primary w-100 mb-2 mt-2">
                                  Lưu
                                </button>
                                <button className="btn btn-secondary w-100">
                                  Gỡ bỏ
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              }
            });
          })}
        </tbody>
      </table>
    </div>
  );
}
