import React from 'react';

/* Styles */
import styled from "styled-components";

/* Comoponetns */
import Wrapper from './Wrapper';

const HeaderStyled = styled.div`
   margin: 0;
   .content {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .header__logo h3{
      font-size: 1.75rem;
      font-weight: bold;
      margin: 0;
   }

   .header__nav {
      display: flex;
      list-style: none;
      justify-items: center;
   }

   .header__nav li {
      margin-left: 2rem;
      cursor: pointer;
      font-size: 1rem;
   }
`

const Header = () => {
   return (
      <HeaderStyled className="header">
         <Wrapper>
            <div className="content">
               <div className="header__logo">
                  <h3>Clay</h3>
               </div>

               <ul className="header__nav">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Portfolio</li>
                  <li>Job</li>
               </ul>
            </div>
         </Wrapper>
      </HeaderStyled>
   )
}

export default Header;
