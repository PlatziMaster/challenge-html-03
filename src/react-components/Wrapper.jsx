import React from 'react';

/* Styles */
import styled from "styled-components";

const WrapperStyled = styled.div`
   width: 100%;
   max-width: 1080px;
   margin-left: auto;
   margin-right: auto;
   height: 100%;
   padding: 0 2rem;
`

const Wrapper = (props) => {
   const { children } = props;
   return (
      <WrapperStyled>
         {children}
      </WrapperStyled>
   )
}

export default Wrapper
