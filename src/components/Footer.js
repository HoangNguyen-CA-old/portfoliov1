import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <MainContainer fluid={true} className='footer_container bg-dark'>
      Copyright © Hoang Nguyen 2020
    </MainContainer>
  );
}
