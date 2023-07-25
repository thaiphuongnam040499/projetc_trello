import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { findUserByEmail } from '../../redux/reducer/userSlice';
import { MemberType } from '../../types/member.type';
import { Role } from '../../enums/Role';
import { User } from '../../types/user.type';
import { createMember, findAllMember } from '../../redux/reducer/memberSlice';

interface HeaderProjectProps {
  workingSpaceId: string;
}

const initialState: MemberType = {
  id: '',
  name: '',
  email: '',
  imageUrl: '',
  workingSpaceId: '',
  role: Role.MEMBER,
};

export default function HeaderProject({ workingSpaceId }: HeaderProjectProps) {
  const listUser = useSelector((state: RootState) => state.user.listUser);
  const [userSearch, setUserSearch] = useState('');
  const [member, setMember] = useState<MemberType>(initialState);
  const dispatch = useDispatch();

  const listMember = useSelector((state: RootState) => state.members.members);

  useEffect(() => {
    dispatch(findUserByEmail(userSearch));
  }, [userSearch]);

  useEffect(() => {
    dispatch(findAllMember());
  }, []);

  const handleAddMember = (user: User) => {
    setMember({
      id: '',
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      workingSpaceId: workingSpaceId,
      role: member.role,
    });
  };
  console.log(member);

  const handleCreateMember = () => {
    dispatch(createMember(member));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom header-project">
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="#">
            project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link fs-6"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hiển thị trong không gian làm việc
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-light border rounded"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-person-add me-2"></i>
                Chia sẻ
              </button>
            </div>
            <div />
          </div>
        </div>
      </nav>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content modal-share">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Chia sẻ bảng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex mt-2 mb-4">
                <input
                  type="text"
                  placeholder="Địa chỉ email hoặc tên"
                  className="w-50 p-3 border rounded search-user"
                  onChange={(e) => setUserSearch(e.target.value)}
                />
                {userSearch ? (
                  <div className="show-user-search border rounded pb-2">
                    {listUser.map((user) => {
                      return (
                        <button
                          className="d-flex align-items-center btn btn-light w-100"
                          onClick={() => handleAddMember(user)}
                        >
                          <img
                            src={user.imageUrl}
                            alt=""
                            className="member-input me-2"
                          />
                          <div>
                            <p className="fs-6">{user.email}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  ''
                )}
                <select
                  className="form-select ms-2 me-2"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setMember((prev) => ({
                      ...prev,
                      role: e.target.value as Role,
                    }))
                  }
                >
                  <option value={Role.ADMIN}>Quản trị viên</option>
                  <option value={Role.MEMBER}>Thành viên</option>
                  <option value={Role.OBSERVER}>Quan sát viên</option>
                </select>
                <button
                  onClick={handleCreateMember}
                  className="btn btn-primary w-25"
                >
                  Chia sẻ
                </button>
              </div>
              {listMember.map((member) => {
                return (
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        src={member.imageUrl}
                        alt=""
                        className="member-input me-2"
                      />
                      <div>
                        <p className="fs-6">{member.name}</p>
                        <p className="fs-6">{member.email}</p>
                      </div>
                    </div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value={1}>Quản trị viên</option>
                      <option value={2}>Thành viên</option>
                      <option value={3}>Quan sát viên</option>
                      <option value={4}>Xóa khỏi bảng</option>
                    </select>
                  </div>
                );
              })}
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
