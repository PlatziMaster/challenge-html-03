import React from 'react';

/* Components */
import Wrapper from '../react-components/Wrapper';

/* Styles */
import styled from 'styled-components';

const NotFoundStyled = styled.main`
   height: 100%;
   .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
   }

   .image {
      width: 65%;
      margin: 0;
   }

   .image img{
      width: 100%;
      margin: 0;
      transform: translateY(0);
      animation: float ease 8s infinite;
   }

   .details {
      width: 35%;
   }

   .details h1{
      font-weight: lighter;
      font-size: 3rem;
      margin: 0;
   }

   .details h2{
      font-weight: bold;
      font-size: 3rem;
      margin: 0;
   }

   .details p {
      text-align: justify;
      opacity: 0.7;
   }

   .btn {
      padding: .7rem 2rem;
      color: var(--background);
      border-radius: 1.5rem;
      text-transform: uppercase;
      font-size: .7rem;
      letter-spacing: 1.5px;
      margin: 3rem .5rem 3rem 0;
      display: inline-block;
   }
   
   .btn.primary {
      border: 1px solid var(--color-primary);
      background-color: var(--color-primary);
   }

   .btn.outline-primary {
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
   }

   @keyframes float {
      0% {
         transform: translateY(0);
      }
      50% {
         transform: translateY(-10px);
      }
      100% {
         transform: translateY(0);
      }
   }
`

const NotFound = () => {
   return (
      <NotFoundStyled className="main">
         <Wrapper>
            <div className="content">
               <section className="details">
                  <h1>404</h1>
                  <h2>Lost in Space</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium expedita provident voluptates neque et excepturi, debitis non eius explicabo quos, repudiandae quis quo maiores illum velit accusantium, inventore modi ipsam!</p>
                  <a className="btn primary" href="/">Go home</a>
                  <a className="btn outline-primary" href="/">Back</a>

               </section>
               <figure className="image">
                  <img src="https://cdn.dribbble.com/users/1355613/screenshots/5964475/attachments/1282620/spaceman_illustration.jpg" alt="404"/>
               </figure>
            </div>
         </Wrapper>
      </NotFoundStyled>
   )
}

export default NotFound;
