"use client"; 
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   padding: 0px 0px 37vh 0px;
   margin: 0px;
   background-color: #EDF1F5;
`;

export const Row = styled.div`
   text-align: center;
   background-color: #1D242E;
   color: white;
   padding: 10px 0px;

   @media (max-width: 320px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const H1 = styled.h1`
    font-family: ' Poppins' sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-bottom: 0px;

  @media (max-width: 320px) {
     font-size: 15px
     font-weight: 700;
  }
     @media only screen and(max-width: 426px) {
     font-size: 12px
  }
`;

export const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
`;

export const SectionLogo = styled.div`
  align-items: center;
  display: flex;
  margin: 0px auto;
  justify-content: center;
  width: 100%;
  color: white;
  padding: 10px; 

  @media (min-width: 769px) {
    width: 20%; 
  }
`;
