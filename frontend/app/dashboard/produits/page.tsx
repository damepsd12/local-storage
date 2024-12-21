"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./formulaire";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import MediCard  from "./productcard";
import DetailsPage from "./details/page";
import { baseURL } from "@/app/utils/constant";
import axios from "axios";

// Styles pour ListePage
const Medipage = styled.div`
  padding: 100px 40px 100vh 30px;
  background-color: #EDF1F5;

  @media (max-width: 768px) {
    padding-top: 90px;
  }
    @media (max-width: 320px) {
      padding-top: 80px;
       padding: 100px 10px 100vh 10px;
  }
`;
const Container = styled.div`
  width: 100%;
  display: inline-block;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 20px;
    width: 100%;

    
    @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    max-width: 100%;
  }
    @media (max-width: 320px) {
    flex-direction: column;
    width: 100%;
    align-items: start;

  }
`;
const Box = styled.div`
    @media (max-width: 320px) {
     justify-content: start;
     text-align: start;
     align-items: start;
  }
`;

const P = styled.p`
`
const H1 = styled.h2`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  padding: 8px 18px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
 

  & > svg {
    margin-right: 5px;
  }
`;
const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 360px;
  outline: none;

  @media (max-width: 320px) {
    width: 270px;
    font-size: 12px;
  }
`;

const SearchIcon = styled(IoSearchSharp)`
  position: absolute; 
  right: 10px; 
  top: 50%; 
  transform: translateY(-50%);
  color: #000; 
  cursor: pointer; 
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownList = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;
const Table = styled.table`
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  border-collapse: collapse;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

   @media (max-width: 768px) {
    display: block; /* Changer pour block pour autoriser scrolling */
    overflow-x: auto; /* Scrolling horizontal */
  }
`;

const Th = styled.th`
  padding: 15px 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  box-sizing: border-box;

   @media (max-width: 768px) {
    font-size: 10px; /* Réduire encore plus pour 768px */
     padding: 10px 0px;
  }

  @media (max-width: 320px) {
      padding: 10px 0px;
      font-size: 10px;
  }

`;

const Td = styled.td`
  box-sizing: border-box;
  padding: 0px 0px;
  border-bottom: 1px solid #ddd;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Réduire encore plus pour 768px */
    padding: 6px 0px; /* Réduire le padding */
  }
  
  @media (max-width: 320px) {
    display: block; /* Pour que chaque ligne s'affiche correctement */
    font-size: 10px; /* Réduire taille de police encore plus */
  }
`;

const groups = [
  'Antibiotiques',
  'Antihypertenseurs',
  'Diabètes',
  'Maladies cardiovasculaires',
  'Produits à base de plantes',
  'Crèmes et pommade cutanées',
  'Gels et sprays anti-inflammatoires',
];


// Composant ListePage
const MedicamentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Nombre d'éléments par page

  // Récupération des données produits
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}products`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        alert("Erreur lors de la récupération des produits.");
      }
    };

    fetchProducts();
  }, []);

  // Pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Gestion du changement dans la recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Gestion de la sélection du groupe
  const handleGroupSelect = (group: string) => {
    setSelectedGroup(group);
    setDropdownOpen(false);
  };

  return (
    <Medipage>
      <Container>
          <Row>
              <Box>
                <H1>Médicaments ({filteredProducts.length})</H1>
                <P>Liste des médicaments disponibles à la vente</P>
              </Box>
              <Box>
                <Button onClick={() => setModalOpen(true)}>
                  <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20px" height="20px">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  Nouveau médicament
                </Button>
                <Modal isopen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={data => setProducts((prev) => [...prev, data])} />
              </Box>
            </Row>
         <Row>
           <SearchContainer>
               <SearchInput
                type="text"
                placeholder="Rechercher dans l'inventaire médicaments."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <SearchIcon />
          </SearchContainer>
          <DropdownContainer>
            <MdOutlineFilterAlt style={{ marginRight: "5px" }} size={29} />
            <SelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
              {selectedGroup || 'Sélectionner un groupe'} <RiArrowDropDownLine style={{ marginLeft: "5px" }} size={29} />
            </SelectButton>
            {isDropdownOpen && (
              <DropdownList>
                {groups.map((group) => (
                  <DropdownItem key={group} onClick={() => handleGroupSelect(group)}>
                    {group}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </DropdownContainer>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr style={{ borderBottom: "2px solid #1D242E", textAlign: "center" }}>
                <Th>Nom du Médicament</Th>
                <Th>Id du Médicament</Th>
                <Th>Nom du groupe</Th>
                <Th>Dosage</Th>
                <Th>Stock</Th>
                <Th>Prix</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <Td colSpan={7}>Aucun médicament disponible.</Td>
                </tr>
              ) : (
                currentProducts.map((product: any) => (
                  <MediCard 
                    key={product._id}
                    name={product.name}
                    nameGroup={product.nameGroup || ''}
                    description={product.description}
                    dosage={product.dosage}
                    stock={product.stock}
                    price={product.price}
                    currency={product.currency}
                    _id={product._id}
                  />
                ))
              )}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Box>
            {/* Calcul dynamique de l'affichage */}
            <P>
              Affichage de {indexOfFirstProduct + 1} à {Math.min(indexOfLastProduct, filteredProducts.length)} résultats sur {filteredProducts.length}
            </P>
          </Box>
          {/* Pagination */}
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </Row>
      </Container>
    </Medipage>
  );
};

export default MedicamentPage;

// // Composant ListePage
//  const MedicamentPage = () => {
  
//   const [modalOpen, setModalOpen] = useState(false);
//   const [products, setProducts] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10); // Nombre d'éléments par page

//   // Récupération des données produits
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${baseURL}products`);
//         setProducts(response.data.products);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des produits :", error);
//         alert("Erreur lors de la récupération des produits.");
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Pagination
//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   // Gestion du changement dans la recherche
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   // Gestion de la sélection du groupe
//   const handleGroupSelect = (group: string) => {
//     setSelectedGroup(group);
//     setDropdownOpen(false);
//   };

//   // Filtre les produits en fonction du terme de recherche
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Medipage>
//       <Container>
//         <Row>
//           <Box>
//             <H1>Médicaments ({filteredProducts.length})</H1>
//             <P>Liste des médicaments disponibles à la vente</P>
//           </Box>
//           <Box>
//             <Button onClick={() => setModalOpen(true)}>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20px" height="20px">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//               </svg>
//               Nouveau médicament
//             </Button>
//             <Modal isopen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={data => setProducts((prev) => [...prev, data])} />
//           </Box>
//         </Row>
//         <Row>
//           <SearchContainer>
//               <SearchInput
//                 type="text"
//                 placeholder="Rechercher dans l'inventaire médicaments."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//               <SearchIcon />
//           </SearchContainer>
//           <DropdownContainer>
//             <MdOutlineFilterAlt style={{ marginRight: "5px" }} size={29} />
//             <SelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
//               {selectedGroup || 'Sélectionner un groupe'} <RiArrowDropDownLine style={{ marginLeft: "5px" }} size={29} />
//             </SelectButton>
//             {isDropdownOpen && (
//               <DropdownList>
//                 {groups.map((group) => (
//                   <DropdownItem key={group} onClick={() => handleGroupSelect(group)}>
//                     {group}
//                   </DropdownItem>
//                 ))}
//               </DropdownList>
//             )}
//           </DropdownContainer>
//         </Row>
//         <Table>
//               <thead>
//                     <tr style={{ borderBottom: "2px solid #1D242E" }}>
//                         <Th>Nom du Médicament</Th>
//                         <Th>Id du Médicament</Th>
//                         <Th>Nom du groupe</Th>
//                         <Th>Dosage</Th>
//                         <Th>Stock</Th>
//                         <Th>Prix</Th>
//                         <Th>Action</Th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredProducts.length === 0 ? (
//                       <tr>
//                         <Td colSpan={7}>Aucun médicament disponible.</Td>
//                       </tr>
//                     ) : (
//                             currentProducts.map((product: any) => (
//                                 <MediCard
//                                     key={product._id}
//                                     name={product.name}
//                                     nameGroup={product.nameGroup || ''}
//                                     description={product.description}
//                                     dosage={product.dosage}
//                                     stock={product.stock}
//                                     price={product.price}
//                                     currency={product.currency}
//                                     _id={product._id}
//                                 />
//                             ))
//                         )}
//                 </tbody>
//           </Table>
//         <Row>
//         <Box>
//             <P>Affichage de 1 a 4 resultats sur({filteredProducts.length})</P>
//         </Box>
//           {/* Pagination */}
//           <div>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </Row>
//       </Container>
//     </Medipage>
//   );
// };

// export default MedicamentPage;

{/* Liste des produits
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredProducts.length === 0 ? (
            <p>Aucun médicament disponible.</p>
          ) : (
            currentProducts.map((product: any) => (
              <MediCard
                key={product._id}
                name={product.name}
                nameGroup={product.nameGroup || ''}
                description={product.description}
                dosage={product.dosage}
                stock={product.stock}
                price={product.price}
                currency={product.currency}
                _id={product._id}
              />
            ))
          )}
        </div> */}

//   const [modalOpen, setModalOpen] = useState(false);
//   const [products, setProducts] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10); // Nombre d'éléments par page
  
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleGroupSelect = (group: string) => {
//     setSelectedGroup(group);
//     setDropdownOpen(false);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${baseURL}products`);
//         console.log("Données récupérées :", response.data.products); // Inspectez les données
//         setProducts(response.data.products);
//       } catch (error: any) {
//         console.error("Erreur lors de la récupération des produits :", error);
//         alert("Erreur lors de la récupération des produits.");
//       }
//     };
    

//     // Pagination
//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };
//      fetchProducts();
//      }, []);
//       useEffect(() => {
            
//       }, []);
  
//   const addProduct = (data: any) => {
//     setProducts((prev) => [...prev, data]);
//   };

//   return (
//     <Medipage>
//       <Container>
//         <Row>
//           <Box>
//             <H1>Médicaments({products.length})</H1>
//              <P>Liste des médicaments disponibles à la vente</P>
//           </Box>
//           <Box>
//              <Button onClick={() => setModalOpen(true)}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 width="20px"
//                 height="20px"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//               </svg>
//               Nouveau médicament
//             </Button>
//             <Modal isopen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addProduct} />
//           </Box>
//         </Row>
//         <Row>
//           <SearchContainer>
//             <SearchInput
//               type="text"
//               placeholder="Rechercher dans l'inventaire médicaments."
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             <SearchIcon />
//           </SearchContainer>
//           <DropdownContainer>
//             <MdOutlineFilterAlt style={{ marginRight: "5px" }} size={29} />
//             <SelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
//               {selectedGroup || 'Sélectionner un groupe'} <RiArrowDropDownLine style={{ marginLeft: "5px" }} size={29} />
//             </SelectButton>
//             {isDropdownOpen && (
//               <DropdownList>
//                 {groups.map((group) => (
//                   <DropdownItem key={group} onClick={() => handleGroupSelect(group)}>
//                     {group}
//                   </DropdownItem>
//                 ))}
//               </DropdownList>
//             )}
//           </DropdownContainer>
//         </Row>
//         {/* Liste des produit */}
//          {/* Liste des produits */}
//          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {currentProducts.length === 0 ? (
//             <p>Aucun médicament disponible.</p>
//           ) : (
//             currentProducts.map((product: any) => (
//               <MediCard
//                 key={product._id}
//                 name={product.name}
//                 nameGroup={product.nameGroup || ''}
//                 description={product.description}
//                 dosage={product.dosage}
//                 stock={product.stock}
//                 price={product.price}
//                 currency={product.currency}
//                 _id={product._id}
//               />
//             ))
//           )}
//         </div>
//       </Container>
//     </Medipage>
//   );
// };

// export default MedicamentPage;
