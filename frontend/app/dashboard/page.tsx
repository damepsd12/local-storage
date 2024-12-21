'use client';
import React from 'react';
import styled from 'styled-components';
import { FiChevronsRight } from "react-icons/fi";
import { RiShieldCrossLine } from "react-icons/ri";
import { GoAlert } from "react-icons/go";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import {ProductageContainer, Button, ProductageRow, ProductageBox, ButtonContainer, Flex, Box,  IconWrapper, Content, Description } from "./pagedash"

const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 24px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    color: #343a40; 

    @media (max-width: 320px) {
    margin-bottom: 15px;
  }
`;
const P = styled.p`
    font-family: 'Poppins', sans-serif;;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    text-align: center;

    @media (max-width: 320px) {
    text-align: start;
    font-size: 14px;
  }
 `;
// Tableau des CARD START
 const borderColors: { [key: number]: string } =  {
  1: '#01A768', 
  2: '#FEDB20',
  3: '#22B4F6',
  4: '#F25F56',
};
interface CARD {
  id: number;
  icon: React.ReactNode; 
  title: string; 
  cardp: string; 
  para: string; 
  icon2: React.ReactNode;
  cardi?: React.ReactNode;
}

const card: CARD[] = [
  {
    id: 1,
    icon: <RiShieldCrossLine color="#01A768"  style ={{marginBottom:'0px' }} size={30}/>,
    title: "Bien",
    cardp: "status de l'inventaire",
    para:  "Afficher le rapport détaillé",
    icon2: <FiChevronsRight />,
  },
  {
    id: 2,
    icon: <FaMoneyBills  color="#FEDB20" style ={{marginBottom:'0px' }} size={30}/>,
    title: "4.800.432 FCFA",
    cardp: "Revenu: janvier 2022",
    cardi: <LuChevronDown />,
    para: "Afficher le rapport détaillé",
    icon2: <FiChevronsRight />,
  },
  {
    id: 3,
    icon:  <MdOutlineMedicalServices  color="#22B4F6" style ={{marginBottom:'0px' }} size={30}/>,
    title: " 298",
    cardp: "Medicaments disponibles",
    para: "Visitez l'inventaire",
    icon2:  <FiChevronsRight />
  }, 
  {
    id: 4,
    icon: <GoAlert color="#F25F56"  style ={{marginBottom:'0px' }}size={30}/>,
    title: " 01",
    cardp: "Pénurie de médicaments",
    para: "Résoudre maintenant",
    icon2: <FiChevronsRight />
  }
 
];
// Tableau des CARD END

// Tableau table des START

interface Table {
  id: number;
  title: string;
  tablep: string;
  tableicon: JSX.Element;
  h3: string;
  titledeux: string;
  h3un: string;
  titledeuxun: string;
}

// Tableau des données
const table: Table[] = [
  {
    id: 1,
    title: "Inventaire",
    tablep: "Allez dans la configuration",
    tableicon: <FiChevronsRight />,
    h3: "298",
    titledeux: "Nombre total de médicaments",
    h3un: "24",
    titledeuxun: "Groupe de médecine",
  },
  {
    id: 2,
    title: "Rapport rappide",
    tablep: "janvier 2022",
    tableicon: <FiChevronsRight />,
    h3: "70856",
    titledeux: "Quantité de médicament",
    h3un: "5228",
    titledeuxun: "Facture générées",
  },
  {
    id: 3,
    title: "Ma pharmacie",
    tablep: "Accédez à la gestion des utilisateurs",
    tableicon: <FiChevronsRight />,
    h3: "01",
    titledeux: "Nombre total de fournisseure",
    h3un: "05",
    titledeuxun: "Nombre total d'utilisateurs",
  },
  {
    id: 4,
    title: "Clients",
    tablep: "Allez à la page clients",
    tableicon: <FiChevronsRight />,
    h3: "845",
    titledeux: "Nombre total de clients",
    h3un: "Adalimumab",
    titledeuxun: "Article fréquemment...",
  },
];
const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f2f2f2; 
  padding: 0px;
  width: 100%;

  @media (max-width: 320px) {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  }

  @media (max-width: 425px) {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  }
`;
const CardTable = styled.div`
  border: 1px solid #ccc; 
  border-radius: 5px; 
  padding: 15px 10px;
  margin: 10px 0px;
  width: calc(50% - 15px); 
  background-color: white; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s; 

  &:hover {
    transform: scale(1.02); // zoom léger au survol
  }

  @media (max-width: 425px) {
  display: block;
  width: 100%;
  }
  @media (max-width: 425px) {
  display: block;
  width: calc(100% - 15px); 
  width: 100%;
  }
`;

const Title = styled.h4`
  margin: 0;
  color: #1D242E;
  font-family: 'Poppins', sans-serif;;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;


  @media (max-width: 768px) {
   
  }
`;

const Text = styled.p`
  color:#1D242E;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media (max-width: 768px){
   
  }

   
`;
const Info = styled.div`
  margin-top: 10px;
  display: flex;
   font-family: 'Poppins', sans-serif;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border: border:box;
  border-top: 1px solid #ccc;
  gap: 0px;


  @media (max-width: 768px) {
  }
`;

const InfoItem = styled.div`
 font-family: 'Poppins', sans-serif;
  display: inline-block;
  align-items: start;
  margin: 5px 0;
  padding-top: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;


  h3{
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  }
`;


// Tableau des END
const ProductPage = () => {
        const reportUrl = '/rapport.pdf'; 
        const reportName = 'rapport.pdf';
        const router = useRouter();

  return (
    <ProductageContainer>
        <ProductageRow>
            <ProductageBox>
                     <H1>Tableau de bord</H1>
                     <P>Un aperçu rapide des données de votre pharmacie</P>
            </ProductageBox>
            <ButtonContainer>
                    <Button href={reportUrl} download={reportName}> Télécharger le rapport</Button>
            </ButtonContainer>
        </ProductageRow>
        <Flex>
          {card.map((card) => (
            <Box key={card.id} bordercolor={borderColors[card.id]}>
              <IconWrapper>{card.icon}</IconWrapper>
              <Content>
                <h2>{card.title}</h2>
                <div>{card.cardp} {card.cardi}</div>
              </Content>
              <Description bgcolor={borderColors[card.id]}>
                <p>{card.para}</p>
                <p>{card.icon2}</p>
              </Description>
            </Box>
          ))}
        </Flex>
      <Table>
      {table.map(table => (
        <CardTable key={table.id}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
            <Title>{table.title}</Title>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <Text style={{ margin: '10px'}}>
                  {table.tablep}
                </Text>
                 <p>{table.tableicon}</p>
            </div>
          </div>
          <Info>
            <InfoItem>
              <h3 style={{ marginBottom: '10px'}}>{table.h3}</h3>
              <div>{table.titledeux}</div>
            </InfoItem>
            <InfoItem>
              <h3 style={{ marginBottom: '10px'}}>{table.h3un}</h3> 
              <div>{table.titledeuxun}</div>
            </InfoItem>
          </Info>
        </CardTable>
      ))}
      </Table>
    </ProductageContainer>
    
  );
};

export default ProductPage;

