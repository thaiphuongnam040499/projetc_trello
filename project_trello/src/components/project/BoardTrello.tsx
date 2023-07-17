import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Board from 'react-trello-ts';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { findAllList } from '../../redux/reducer/laneSlice';
import HeaderProject from './HeaderProject';
import { useLocation } from 'react-router-dom';
import { create, findAllCard, updateCard } from '../../redux/reducer/cardSlice';
import { Card } from '../../types/card.type';
import { BoardData } from '../../types/lanes.type';

const initialState: BoardData = {
  lanes: [],
};

export default function BoardTrello() {
  const [data, setData] = useState<BoardData>(initialState);

  const lanes = useSelector((state: RootState) => state.lanes.lanes);

  const cards = useSelector((state: RootState) => state.card.listCard);

  const location = useLocation();

  useEffect(() => {
    dispatch(findAllCard());
  }, []);

  useEffect(() => {
    dispatch(findAllList());
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < lanes.length; i++) {
      if (location.state.boardId === lanes[i].boardId) {
        let laneData: any = {
          id: lanes[i].id,
          title: lanes[i].name,
          cards: [],
        };

        for (let j = 0; j < cards.length; j++) {
          if (lanes[i].id === cards[j].laneId) {
            let cardData: any = {
              id: cards[j].id,
              title: cards[j].title,
              draggable: true,
            };
            laneData.cards.push(cardData);
          }
        }
        arr.push(laneData);
      }
      setData({
        lanes: arr,
      });
    }
  }, [lanes, cards]);

  const dispatch = useDispatch();
  const handleDragStart = (cardId: any, laneId: any) => {
    console.log('drag started');
    console.log(`cardId: ${cardId}`);
    console.log(`laneId: ${laneId}`);
  };

  const handleDragEnd = (cardId: any, sourceLaneId: any, targetLaneId: any) => {
    const uCard = cards.find((card) => card.id === cardId);
    if (uCard) {
      const updatedCardData = {
        ...uCard,
        laneId: targetLaneId,
      };
      dispatch(updateCard(updatedCardData));
    }
  };
  const handleAddCard = (cards: Card) => {
    dispatch(create(cards));
  };

  const handleClick = (cardId: any) => {
    // const cardElement = document.getElementById(cardId);
    // if (cardElement) {
    //   cardElement.classList.add('btn btn-dark');
    // }
  };

  return (
    <div className="w-100 board-trello">
      <HeaderProject />
      <Board
        onCardAdd={(card: any) => handleAddCard(card)}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        draggable
        editable
        laneDraggable
        cardDraggable
        data={data}
        onCardClick={handleClick}
      />
    </div>
  );
}
