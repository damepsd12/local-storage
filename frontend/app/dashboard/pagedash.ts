'use client';
import styled from 'styled-components';

// Styled components
export const ProductageContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  background-color: #EDF1F5;
  padding: 70px 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 0px;
  box-sizing: border-box;


  @media (max-width: 768px) {
    padding: 70px 10px 20vh 10px;
    margin: 0px;
    width: 100%;
    box-sizing: border-box;
  }
    @media (max-width: 320px) {
    padding: 70px 10px 20vh 10px;
  }
`;

export const Button = styled.a`
      padding: 12px 15px;
      background-color: #FFF;
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 22.5px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      text-decoration: none;
      color: #000000;
      border: 1px solid #000;
      border-radius: 5px;
    
      &:hover {
          background-color: #283342;
          color: white;
          border: none;
  ;
}
`;

export const ProductageRow = styled.div`
    display: flex;
    justify-content: space-between; 
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    display-flex: row;
    gap: 20px;
    margin: 10px 0px 20px 0px; 
   
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    gap: 0px;
    justify-content: space-between;
    margin: 10px 0px 20px 0px; 
  };

  @media (max-width: 320px) {
    display: inline-block; 
    width: 100%;
    padding: 0px;
  }
  @media (max-width: 425px) {
    display: flex!important;
    display: block!important; 
    width: 100%;
    flex-direction: column!important;
    padding: 0px;
  }
    
    
`;
export const ProductageBox = styled.div`
    text-align: start;

  @media (max-width: 320px) {
    display: block; 
    width: 100%;
    margin-bottom: 30px;
    justify-content: start;
  }
  @media (max-width: 425px) {
    display:block; 
    width: 100%;
    justify-content: start;
    margin-bottom: 30px;
    padding: 0px;
  }
`;
export const ButtonContainer = styled.div`
      margin-left: 0px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-left: 0px;
  };
  @media (max-width: 320px) {
    margin-bottom: 20px;
    margin-left: 0px;
  };
 @media (max-width: 425px) {
     margin-bottom: 20px;
    display:block; 
    width: 100%;
    margin-left: 0px;
  }
`;
// CARD LA FUNCTION MAPPING START
export const Flex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%; 

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px; 
  }
    @media (max-width: 320px) {
    width: 100%; 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media (max-width: 425px) {
    width: 100%; 
    display: inline-block!important;
  }
    
`;
export const Box = styled.div<{ bordercolor?: string }>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(25% - 20px); // Largeur égale pour 4 cartes par ligne
  min-height: 150px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  border: 2px solid ${({ bordercolor }) => bordercolor || 'transparent'};
  padding: 10px 0px 0px 0px!important; 
  background-color: #fff; 

  @media (max-width: 1024px) {
    width: calc(33.33% - 20px); // 3 cartes par ligne
  };

  @media (max-width: 768px) {
    width: calc(25% - 10px); 
  };

  @media (max-width: 425px) {
    width: 100%!important; // 1 carte par ligne sur mobile
    margin-bottom: 20px;
  };
  @media (max-width: 320px) {
    width: 100%; 
    margin-bottom: 20px;
  }
`;
export const Description = styled.div<{ bgcolor?: string }>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #1D242E;
  gap: 10px;
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  padding: 8px;
  width: 100%;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;


  p {
    margin: 0px;
    font-size: 12px;
    align-items: center;
  }
`;
export const IconWrapper = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  margin-bottom: 0px;
  padding-bottom: 0px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const Content = styled.div`
     display: inline-block;

  h2 {
      padding: 8px;
      text-align: center;
      margin-bottom: 9px;
      padding-bottom: 0px;
      font-size: 21px;
      font-weight: bold;
      line-height: 22px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
  }

  p{
    font-size: 10px;
    margin-bottom: 15px;
  }
  div{
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
       margin-bottom: 8px;

    }
`;
// CARD LA FUNCTION MAPPING  END