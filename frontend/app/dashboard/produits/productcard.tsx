import { FiChevronsRight } from "react-icons/fi";
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface MediProps { 
  _id: string;
  name: string;
  nameGroup: string;
  description: string;
  dosage: number;
  stock: string;
  price: number;
  currency: string;
//   imageUrl?: string;
}


const Td = styled.td`
  box-sizing: border-box;
  padding: 10px 6px;
  border-bottom: 1px solid #ddd;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media (max-width: 768px) {
   font-size: 10px;
  }
    @media (max-width: 320px) {
    font-size: 10px;
    
  }

`;

const Button = styled.button`
  padding: 8px 10px;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
   font-size: 12px;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
  @media (max-width: 768px) {
     font-size: 10px;
       padding: 8px 9px;
  }
`;


const MediCard: React.FC<MediProps> = ({
  name,
  _id,
  description,
  dosage,
  stock,
  price,
  currency,
}) => {
  return (
    <tr>
      <Td>{name}</Td>
      <Td>{_id}</Td>
      <Td>{description}</Td>
      <Td>{dosage}</Td>
      <Td>{stock}</Td>
      <Td style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop:"27px", paddingBottom:"21px" }}> 
        <div>{`${price}`}</div>
        <div>{`${currency}`}</div>
      </Td>
      <Td>
        <Link href="/dashboard/produits/details" style={{ textDecoration: 'none' }} passHref>
          <Button style={{ border: 'none', backgroundColor: "#fff" }}>
            Voir tous les Détails <FiChevronsRight style={{ marginLeft: '15px' }} />
          </Button>
        </Link>
      </Td>
    </tr>
  );
};

export default MediCard;

// const MediCard: React.FC<MediProps> = ({
//   name,
//   _id,
//   description,
//   dosage,
//   stock,
//   price,
//   currency,

// }) => {



//   return (
//     <Container>
//       <Table>
//         <thead>
//           <tr>
//             <Th>Nom du Médicament</Th>
//             <Th>Id du Médicament</Th>
//             <Th>Nom du groupe</Th>
//             <Td>Dosage</Td>
//             <Th>Stock</Th>
//             <Th>Prix</Th>
//             <Th>Action</Th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <Td>{name}</Td>
//             <Td>{_id}</Td>
//             <Td>{description}</Td>
//             <Td>{dosage}</Td>
//             <Td>{stock}</Td>
//             <Td style={{ display: "flex", alignItems: "center"}}>{`${price} ${currency}`}</Td>
//             <Td>
//               <Link href="/dashboard/produits/details" style={{ textDecoration: 'none' }} passHref>
//                   <Button style={{ border: 'none', backgroundColor: "#fff"}}>Voir tous les Détails <FiChevronsRight style={{ marginLeft: '20px' }} /></Button>
//               </Link>
//             </Td>
//           </tr>
//         </tbody>
//       </Table>
      
//     </Container>
//   );
// };

// export default MediCard;