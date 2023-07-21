import React, { useState, useEffect } from 'react';
import { DateTime } from '../../types/dateTime.type';
import { useDispatch } from 'react-redux';
import {
  createDateTime,
  findAllDateTime,
} from '../../redux/reducer/dateTimeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CreateDateTimeProps {
  cardId: string;
}

const initialState = {
  id: '',
  startDay: '',
  expirationDate: '',
  cardId: '',
  status: false,
};

export default function CreateDateTime({ cardId }: CreateDateTimeProps) {
  const [dateTime, setDateTime] = useState<DateTime>(initialState);
  const dateTimes = useSelector((state: RootState) => state.dateTime.dateTimes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllDateTime());
  }, []);

  useEffect(() => {
    setDateTime({
      ...dateTime,
      cardId: cardId,
    });
  }, []);

  const handleCreateDateTime = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (dateTimes.length != 0) {
      for (let i = 0; i < dateTimes.length; i++) {
        if (dateTime.cardId === dateTimes[i].cardId) {
          alert('update nha a nhân');
        }
        dispatch(createDateTime(dateTime));
      }
    } else {
      dispatch(createDateTime(dateTime));
    }
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-light w-100 border rounded mb-2  text-start"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-clock me-2"></i>
        Ngày
      </button>
      <ul
        className="dropdown-menu date-time"
        aria-labelledby="dropdownMenuButton1"
      >
        <li className="text-center">Ngày</li>
        <hr className="my-2" />
        <li className="p-2">
          <div>
            <p className="mb-2">Ngày bắt đầu:</p>
            <input
              type="date"
              className="w-100 mb-2 input-date border rounded p-3"
              value={dateTime.startDay}
              onChange={(e) =>
                setDateTime((prev) => ({ ...prev, startDay: e.target.value }))
              }
            />
            <p className="mb-2">Ngày hết hạn:</p>
            <input
              type="datetime-local"
              className="w-100 mb-2 input-date border rounded p-3"
              value={dateTime.expirationDate}
              onChange={(e) =>
                setDateTime((prev) => ({
                  ...prev,
                  expirationDate: e.target.value,
                }))
              }
            />
            <div>
              <button
                className="btn btn-primary w-100 mb-2 mt-2"
                onClick={handleCreateDateTime}
              >
                Lưu
              </button>
              <button className="btn btn-secondary w-100">Gỡ bỏ</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
