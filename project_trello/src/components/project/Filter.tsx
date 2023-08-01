import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  findAllCard,
  findCardByTitle,
  getCardFilter,
} from '../../redux/reducer/cardSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MemberId, MemberType } from '../../types/member.type';
import { Role } from '../../enums/Role';

interface FilterProps {
  listMember: MemberId[];
  boardId: string;
}

export default function Filter({ listMember, boardId }: FilterProps) {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.card.listCard);
  const member = listMember.find((item) => item.boardId === boardId);
  const [isCheckedMemberMe, setIsCheckedMemberMe] = useState(false);
  const [isCheckedMember, setIsCheckedMember] = useState(false);

  const [check, setCheck] = useState(false);
  const [isCheckedNoMember, setIsCheckedNoMember] = useState(false);
  const [isShowMember, setIsShowMember] = useState(false);
  const members = listMember.filter((item) => item.boardId === boardId);

  useEffect(() => {
    let cardFilter = [];
    if (isCheckedMember) {
      for (let i = 0; i < members.length; i++) {
        if (members[i].cardId) {
          let card = cards.find((item) => item.id === members[i].cardId);
          cardFilter.push(card);
        }
      }
      console.log(cardFilter);

      dispatch(getCardFilter(cardFilter));
    } else {
      dispatch(findAllCard());
    }
  }, [isCheckedMember]);

  useEffect(() => {
    let cardFilter = [];
    if (isCheckedMemberMe) {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].id === member?.cardId) {
          let cardFind = {
            title: cards[i].title,
            id: cards[i].id,
            laneId: cards[i].laneId,
            order: cards[i].order,
            description: cards[i].description,
          };
          cardFilter.push(cardFind);
        }
      }
      dispatch(getCardFilter(cardFilter));
    } else {
      dispatch(findAllCard());
    }
  }, [isCheckedMemberMe]);

  useEffect(() => {
    let cardFilter = [];
    if (isCheckedNoMember) {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].id != member?.cardId) {
          let cardNoMember = {
            title: cards[i].title,
            id: cards[i].id,
            laneId: cards[i].laneId,
            order: cards[i].order,
            description: cards[i].description,
          };
          cardFilter.push(cardNoMember);
        }
      }
      dispatch(getCardFilter(cardFilter));
    } else {
      dispatch(findAllCard());
    }
  }, [isCheckedNoMember]);

  const handleChangeSearchCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(findCardByTitle(e.target.value));
  };

  const handleSearchCardByMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedMemberMe(e.target.checked);
  };

  const handleShowMember = () => {
    if (isShowMember) {
      setIsShowMember(false);
    } else {
      setIsShowMember(true);
    }
  };

  return (
    <div className="dropdown me-3">
      <button
        className="btn btn-light btn-filter"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-filter me-2"></i>
        Lọc
      </button>
      <ul
        className="dropdown-menu p-3 filter-dropdown"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <p>Từ khóa</p>
          <input
            type="text"
            className="w-100 input-date border rounded mt-1 mb-1 p-2"
            onChange={(e) => {
              handleChangeSearchCard(e);
            }}
          />
          <p>Tìm kiếm các thẻ, các nhãn, các thành viên </p>
        </li>
        <li className="mt-2">
          <p className="">Thành viên</p>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input
              type="checkbox"
              className="me-2"
              checked={isCheckedNoMember}
              onChange={(e) => setIsCheckedNoMember(e.target.checked)}
            />
            <div>
              <i className="bi bi-person me-2"></i>Không có thành viên
            </div>
          </div>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input
              type="checkbox"
              className="me-2"
              checked={isCheckedMemberMe}
              onChange={handleSearchCardByMe}
            />
            {listMember.map((member) => {
              if (member.boardId === boardId && member.role === Role.ADMIN) {
                return (
                  <div key={member.id}>
                    {' '}
                    <img
                      src={member.imageUrl}
                      alt=""
                      className="me-2 member-filter"
                    />
                    Các thẻ đã chỉ định cho tôi
                  </div>
                );
              }
            })}
          </div>
          <div className="d-flex align-items-center ms-2 mt-3">
            <input type="checkbox" className="me-2 align-items-center" />
            <div className="select-filter">
              <button
                className="btn btn-light w-100 btn-show-member"
                onClick={handleShowMember}
              >
                <input
                  type="text"
                  value={'Chọn thành viên'}
                  className="w-100 input-date p-2 input-member-cursor"
                />
                <i className="bi bi-chevron-compact-down icon-select"></i>
              </button>
            </div>
            {isShowMember ? (
              <div className="ms-2 mt-3 member-filter-input border rounded p-3 pb-0">
                {listMember.map((member) => {
                  if (
                    member.boardId === boardId &&
                    member.role === Role.MEMBER
                  ) {
                    return (
                      <div
                        key={member.id}
                        className="d-flex mb-3 align-items-center"
                      >
                        <input
                          type="checkbox"
                          className="me-3"
                          // checked={
                          //   isCheckedMember.stat &&
                          //   isCheckedMember.id === member.id
                          //     ? true
                          //     : false
                          // }
                          onChange={(e) => setIsCheckedMember(e.target.checked)}
                        />
                        <div className="d-flex ">
                          <img
                            src={member.imageUrl}
                            alt=""
                            className="me-2 member-filter"
                          />
                          <p className="member-name">{member.email}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              ''
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}
