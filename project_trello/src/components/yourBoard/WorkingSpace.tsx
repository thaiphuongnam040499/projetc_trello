import React, { useState, useEffect } from 'react';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import { useDispatch } from 'react-redux';
import { createWorkingSpace } from '../../redux/reducer/workingSpaceSlice';
import { User, UserId } from '../../types/user.type';
import { MemberId, MemberType } from '../../types/member.type';
import { createMember } from '../../redux/reducer/memberSlice';
import { Role } from '../../enums/Role';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Option {
  label: string;
  value: number | string;
}

const workOptions: Option[] = [
  { label: 'Nhân sự', value: '1' },
  { label: 'Điều hành', value: '2' },
  { label: 'Giáo dục', value: '3' },
  { label: 'Kinh doanh', value: '4' },
  { label: 'Marketing', value: '5' },
  { label: 'Doanh nghiệp nhỏ', value: '6' },
  { label: 'Kỹ thuật - CNTT', value: '7' },
  { label: 'Khác', value: '8' },
];

const initialState: WorkingSpaceType = {
  id: '',
  name: '',
  type: '',
  description: '',
  userId: '',
};

export default function WorkingSpace() {
  const [workingSpace, setWorkingSpace] =
    useState<WorkingSpaceType>(initialState);
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState<UserId>();
  const user = localStorage.getItem('userLogin');
  const members = useSelector((state: RootState) => state.members.members);
  const currentCreateWs = useSelector(
    (state: RootState) => state.workingSpace.workingSpace
  );

  const memberFilter = members.filter((member) => member.role === Role.ADMIN);

  const checkExist = (member: any) => {
    return memberFilter.find(
      (item) => item.workingSpaceId === member.workingSpaceId
    );
  };

  useEffect(() => {
    if (currentCreateWs) {
      let member = {
        name: userLogin?.name,
        email: userLogin?.email,
        imageUrl: userLogin?.imageUrl,
        workingSpaceId: currentCreateWs.id,
        role: Role.ADMIN,
      };
      if (!checkExist(member)) {
        dispatch(createMember(member));
      }
    }
  }, [currentCreateWs]);
  useEffect(() => {
    if (user) {
      setUserLogin(JSON.parse(user).user);
    }
  }, [user]);

  const handleCreate = () => {
    dispatch(
      createWorkingSpace({
        ...workingSpace,
        userId: userLogin?.id,
      })
    );
  };

  return (
    <div className="modal-dialog working-space">
      <div className="modal-content working-space-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Hãy xây dựng một không gian làm việc
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body body-img d-flex">
          <div className="p-5 working-space-name">
            <div className="ps-2 px-2 mb-2">
              <div className="d-flex">
                <h6>Tên không gian làm việc</h6>
              </div>
              <input
                onChange={(e) =>
                  setWorkingSpace((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
                className="working-space-input border rounded w-100 p-3"
                placeholder="Công ty của taco"
              />
              <p className="mt-2 mb-3">
                Đây là tên công ty nhóm hoặc tổ chức của bạn
              </p>
            </div>
            <div className="ps-2 px-2 mb-2">
              <div className="d-flex">
                <h6>Loại không gian làm việc</h6>
              </div>
              <select
                onChange={(e) =>
                  setWorkingSpace((prev) => ({ ...prev, type: e.target.value }))
                }
                className="border rounded w-100 p-2"
                name=""
                id=""
              >
                <option value="">Chọn</option>
                {workOptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="ps-2 px-2 mb-2 ">
              <div className="d-flex">
                <h6>Mô tả không gian làm việc</h6>
              </div>
              <input
                value={workingSpace.description}
                onChange={(e) =>
                  setWorkingSpace((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                type="text"
                className="working-space-des border rounded w-100 p-3"
                placeholder="Nhóm của chúng tôi tổ chức mọi thứ ở đây"
              />
              <p className="mt-2 mb-3">
                Đây là tên công ty nhóm hoặc tổ chức của bạn
              </p>
            </div>
            <button onClick={handleCreate} className="btn btn-primary w-100">
              Tiếp tục
            </button>
          </div>
          <div className="modal-workingSpace">
            <img
              className="ms-5"
              src="https://trello.com/assets/d1f066971350650d3346.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
