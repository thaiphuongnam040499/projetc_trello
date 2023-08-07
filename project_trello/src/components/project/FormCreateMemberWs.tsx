import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { findUserByEmail } from '../../redux/reducer/userSlice';
import { MemberWsType } from '../../types/memberWs.type';
import { User } from '../../types/user.type';
import { Role } from '../../enums/Role';
import { createMemberWs } from '../../redux/reducer/memberWsSlice';
import { toast } from 'react-hot-toast';
import useCutomeHook from '../../redux/contants/useCutomeHook';

interface CreateMemberWsProps {
  workingSpaceId: string;
}
const initialState = {
  name: '',
  email: '',
  imageUrl: '',
  role: Role.MEMBER,
  workingSpaceId: '',
};

export default function FormCreateMemberWs({
  workingSpaceId,
}: CreateMemberWsProps) {
  const users = useSelector((state: RootState) => state.user.listUser);
  const [userSearch, setUserSearch] = useState('');
  const [members, setMembers] = useState<MemberWsType[]>([]);
  const dispatch = useDispatch();
  const memberWs = useSelector((state: RootState) => state.memberWs.memberWs);
  const { userLogin } = useCutomeHook();
  const [showCreateMember, setShowCreateMember] = useState({
    id: '',
    start: false,
  });

  useEffect(() => {
    dispatch(findUserByEmail(userSearch));
  }, [userSearch]);

  const handleAddMember = (user: User) => {
    if (!checkExits(user, members)) {
      setMembers([
        ...members,
        {
          name: user.name,
          email: user.email,
          imageUrl: user.imageUrl,
          role: Role.MEMBER,
          workingSpaceId: workingSpaceId,
        },
      ]);
    }
  };
  const member = memberWs.find(
    (memberWs) => memberWs.workingSpaceId === workingSpaceId
  );

  const checkExits = (user: User, members: MemberWsType[]) => {
    return members.find((item) => item.email === user.email);
  };

  const handleCreateMember = () => {
    const isExits = memberWs.find((item) => item.email === member?.email);

    if (isExits) {
      toast.error('Bạn đã thêm người này!!!');
      return;
    } else {
      for (let i = 0; i < members.length; i++) {
        if (userLogin?.email != members[i].email) {
          dispatch(createMemberWs(members[i]));
          toast.success('thêm mới thành công');
          setUserSearch('');
          setMembers([]);
        }
      }
    }
  };
  const countMember = memberWs.filter(
    (memberWs) => memberWs.workingSpaceId === workingSpaceId
  );

  return (
    <div className="dropdown">
      <button
        className="btn btn-light border rounded me-2 btn-ws"
        type="button"
        onClick={() =>
          setShowCreateMember({
            id: workingSpaceId,
            start: true,
          })
        }
      >
        <i className="bi bi-people me-2 fs-6"></i>
        Thành viên {countMember.length != 0 ? `(${countMember.length})` : ''}
      </button>
      {showCreateMember.start ? (
        <ul className="create-workingSpace p-3 border">
          <li className="text-center d-flex justify-content-between align-items-center">
            <p>Thêm thành viên</p>
            <button
              className="btn btn-light"
              onClick={() =>
                setShowCreateMember({
                  id: workingSpaceId,
                  start: false,
                })
              }
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </li>
          <hr className="my-2" />
          <li className="mt-2 mb-2">
            <p className="mb-2">Tìm kiếm thành viên</p>
            <input
              type="text"
              className="w-100 search-user-ws border rounded mb-2"
              onChange={(e) => setUserSearch(e.target.value)}
            />
          </li>
          {userSearch ? (
            <div className="">
              <p>Danh sách tìm kiếm</p>
              {users.map((user) => {
                return (
                  <button
                    className="btn btn-light d-flex align-items-center mb-2"
                    onClick={() => handleAddMember(user)}
                  >
                    <img
                      src={user.imageUrl}
                      alt=""
                      className="member-input me-2"
                    />
                    <p>{user.email}</p>
                  </button>
                );
              })}
            </div>
          ) : (
            ''
          )}
          {memberWs.map((member) => {
            if (member.workingSpaceId === workingSpaceId) {
              return (
                <div key={member.workingSpaceId}>
                  <p>Đã thêm</p>
                  <button className="btn btn-light d-flex align-items-center mb-2">
                    <img
                      src={member.imageUrl}
                      alt=""
                      className="member-input me-2"
                    />
                    <p>{member.email}</p>
                  </button>
                </div>
              );
            }
          })}
          <li className="p-2">
            <button
              onClick={handleCreateMember}
              className=" border rounded btn btn-success w-100"
            >
              Thêm
            </button>
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}
