"use client"; 
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGrid1X2 } from "react-icons/bs";
import { LuCornerUpLeft } from "react-icons/lu";
import { CiMedicalCase } from "react-icons/ci";
// import Fadjmalogo from '../public/fadjmalogo.png';
import styled from 'styled-components';
import { IoLanguageOutline } from 'react-icons/io5'; 
import { IoChevronDownOutline } from "react-icons/io5"; 
import { FaBars } from "react-icons/fa";
import { FaCircle, FaCartPlus } from "react-icons/fa"; 
// import  ProductPage from "../../dashboard/page";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2C2C2C;
  padding: 0;
  height: 60px;
  box-sizing: border-box;
  position: fixed;
  top: 0; 
  justify-content: space-between;
  left: 0;
  width: 100%; 
  z-index: 999;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  box-sizing: border-box;
  width: 80%;
  padding: 0 20px;
  background-color: #f8f9fa; 

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 20px;
`;
const H1 = styled.div`
`;
const ImageStyled = styled(Image)``;

const SectionLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: start;
  width: 20%;
  color: white;
  background-color: transparent;
  padding: 10px; 
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const ToggleButton = styled.button`
  display: none;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isopen: boolean }>`
  display: none;
  flex-direction: column;
  alignment: center;
  background-color: #f8f9fa;
  padding: 10px;
  position: absolute;
  top: 60px; /* Positionner le menu en dessous de la barre de navigation */
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: ${({ isopen }) => (isopen ? 'flex' : 'none')};
    padding: 30px 0px 0px 30px;
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: #EDF1F5; 
  outline: none;
  padding: 10px;
  border-radius: 4px;
  width: 350px; 
  flex-shrink: 0; 

  @media (max-width: 768px) {
    margin-bottom: 15px;
      width: 300px; 
  }
  @media (max-width: 425px) {
      margin-bottom: 15px;
      width: 250px; 
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
   margin-bottom: 15px;
  }
  @media (max-width: 425px) {
      margin-bottom: 30px;
  }
`;

const LanguageText = styled.span`
  margin-right: 5px;
  color: #333;
  display: flex;
  align-items: center; 
  cursor: pointer;
`;

const LanguageIcon = styled(IoLanguageOutline)`
  margin-right: 5px;
  color: #333; 
`;

const Dropdown = styled.div<{ $isopen?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  color: #333;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: ${({ $isopen }) => ($isopen ? 'block' : 'none')};
`;

const LanguageOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Greeting = styled.div`
  font-size: 14px;
  color: #6c757d;
  padding-bottom: 10px;
`;

const Jaune = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const P = styled.p`
  justify-content: end;
`;

const languages = [
  'Français (France)',
  'Anglais (USA)',
  'Espagnol (Espagne)',
  'Allemand (Allemagne)',
  'Italien (Italie)',
  'Néerlandais (Pays-Bas)',
  'Portugais (Portugal)',
  'Chinois (Mandarin)',
  'Japonais (Japon)',
  'Arabe (Arabie Saoudite)',
  'Russe (Russie)',
  'Hindi (Inde)',
];

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const selectLanguage = (language: any) => {
    setSelectedLanguage(language);
    setIsDropDownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getGreeting = () => {
    const hours = dateTime.getHours();
    if (hours >= 6 && hours < 18) {
      return {
        greeting: "Bonjour",
        icon: <FaCircle color="#EBC806" size={29} />
      };
    } else {
      return {
        greeting: "Bonsoir",
        icon: <FaCircle color="#4B0082" size={29} />
      };
    }
  };

  const { greeting, icon } = getGreeting();

  return (
    <NavbarContainer>
      <SectionLogo>
        <Logo style={{ marginRight: '20px' }}>
          <ImageStyled src="/fadjmalogo.png" width={40} height={40} alt='logo' />
          <H1> <Logo>Fadj-Ma</Logo> </H1>
        </Logo>
        <ToggleButton onClick={toggleMenu}>
        <FaBars />
        </ToggleButton>
      </SectionLogo>
      <TopBar>
        <SearchInput type="text" placeholder="Rechercher n'importe quoi ici." />
        <LanguageSelector>
          <LanguageText onClick={toggleDropdown}>
            <LanguageIcon />
            {selectedLanguage}
          </LanguageText>
          <span onClick={toggleDropdown} style={{ color: '#333' }}>
            <IoChevronDownOutline />
          </span>
          <Dropdown $isopen={isDropDownOpen}>
            {languages.map((language) => (
              <LanguageOption key={language} onClick={() => selectLanguage(language)}>
                {language}
              </LanguageOption>
            ))}
          </Dropdown>
        </LanguageSelector>
        <Greeting>
          <Jaune>
            {icon} 
            <P style={{ color: '#333' }}>{greeting}</P> 
          </Jaune>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Greeting>
      </TopBar>
      <MobileMenu isopen={isMenuOpen}>
        <SearchInput type="text" placeholder="Rechercher n'importe quoi ici." />
        <LanguageSelector>
          <LanguageText onClick={toggleDropdown}>
            <LanguageIcon />
            {selectedLanguage}
          </LanguageText>
          <span onClick={toggleDropdown} style={{ color: '#333' }}>
            <IoChevronDownOutline />
          </span>
          <Dropdown $isopen={isDropDownOpen}>
            {languages.map((language) => (
              <LanguageOption key={language} onClick={() => selectLanguage(language)}>
                {language}
              </LanguageOption>
            ))}
          </Dropdown>
        </LanguageSelector>
        <Greeting>
          <Jaune>
            {icon}
            <P style={{ color: '#333' }}>{greeting}</P>
          </Jaune>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Greeting>
        {/* Liens de navigation - Ajoutez les éléments ici */}
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
