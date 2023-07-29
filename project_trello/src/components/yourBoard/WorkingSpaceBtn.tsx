import React from 'react';
import { BgType } from '../../types/bg.type';
import { WorkingSpaceType } from '../../types/workingSpace.type';
import Board from '../project/CreateBoard';
import { createContext } from 'react';

interface WorkingSpaceBtnProps {
  backgrounds: BgType[];
  workingSpace: WorkingSpaceType;
}

export const WsContext = createContext<WorkingSpaceType>({
  id: '',
  name: '',
  type: '',
  description: '',
  userId: '',
});

export default function WorkingSpaceBtn({
  backgrounds,
  workingSpace,
}: WorkingSpaceBtnProps) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-light btn-create-board "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Tạo bảng mới
      </button>
      <WsContext.Provider value={workingSpace}>
        <Board backgrounds={backgrounds} />
      </WsContext.Provider>
    </div>
  );
}
