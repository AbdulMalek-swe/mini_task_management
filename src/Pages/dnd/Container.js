import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'
 
export const Container = () => {
  
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      } ,
      {
        id: 1,
        text: 'Write a cool JS library2323',
      } 
       
    ])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <>
        <div  >{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }

