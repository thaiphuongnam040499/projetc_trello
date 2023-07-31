import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MemberId } from '../../types/member.type';
import { updateMember } from '../../redux/reducer/memberSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card } from 'react-trello-ts/dist/types/Board';

interface CreateMemberProps {
  cardId: string;
  cards: Card[];
  boardId: string;
  memberArr?: MemberId[];
}

export default function CreateMember({
  cardId,
  cards,
  boardId,
  memberArr,
}: CreateMemberProps) {
  const cardDetail = cards.find((item) => item.id === cardId);
  const members = useSelector((state: RootState) => state.members.members);
  const [memberId, setMemberId] = useState('');

  const dispatch = useDispatch();

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

  return (
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
                <img src={member.imageUrl} alt="" className="member-input" />
                <p className="ms-2">{member.email}</p>
              </button>
            );
          }
        })}
      </li>
    </ul>
  );
}
