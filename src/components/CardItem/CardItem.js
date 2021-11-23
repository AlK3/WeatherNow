import React from 'react';
import { StyledCardItem } from './CardItem.styled';
import { TextButton } from '../Button/Button.styles';

export const CardItem = (props) => {

  return (
    <StyledCardItem>
      <img src={props.image} />
      <div>
        <h4>{props.title}</h4>
        <p>{props.date}</p>
      </div>
      <p>{props.text}</p>
      <TextButton>{props.button}</TextButton>
    </StyledCardItem>
  );
}