import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card } from '../../types/card.type';
import { findAllCard } from '../../redux/reducer/cardSlice';
import { Lane } from '../../types/lanes.type';
interface CardDetailProps {
  list: Lane;
}

export default function CardDetail({ list }: CardDetailProps) {
  const listCard = useSelector((state: RootState) => state.card.listCard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllCard());
  }, []);

  return (
    <>
      {/* {listCard.map((card: Card) => {
        if (list.lanes. === card.listId) {
          return (
            <div key={card.id} className="ps-2 px-2 mb-2">
              <button
                type="button"
                className="btn btn-light border rounded w-100 "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {card.name}
              </button>
            </div>
          );
        }
      })} */}
    </>
  );
}
