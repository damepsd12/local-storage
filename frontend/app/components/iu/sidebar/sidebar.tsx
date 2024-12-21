"use client"; 
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { FaEllipsisV } from 'react-icons/fa';
import { BsGrid1X2 } from "react-icons/bs";
import { LuCornerUpLeft } from "react-icons/lu";
import { CiMedicalCase } from "react-icons/ci";
import { PiCopyrightLight } from "react-icons/pi";
import { usePathname, useRouter } from 'next/navigation';
import { GrStatusGoodSmall } from 'react-icons/gr';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #283342;
    padding: 20vh 0px 10px 0px;
    padding-top: 80px;
    color: #FFF;

    @media (max-width: 768px) {
        padding: 10px;
    }
    @media (max-width: 320px) {
     padding-top: 10px;
    }

`;
const Admin = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        display: none;
    }
`;
const Adminpro = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;

`;
const Users = styled.div`
    display: inline;
`
const Profil = styled.div`
    border-radius: 50%;
    color: white;
`;
const Name = styled.div`
    margin-left: 20px;
    span {
        font-size: 16px;
        color: white;
    }
`;
const Icon = styled.div`
    font-size: 14px;
    color: white;
    margin-right: 15px;
`;
const P1 = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 9px;
`;
const P = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: #DABB0B;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        color: #fff;
        margin-bottom: 30px!important;
    }
    @media (max-width: 324px) {
       color: #fff;
       margin-bottom: 30px!important;
    }
`;
const StyledImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;
const Navbar = styled.nav`
    padding: 10px 0;
    color: white;

    @media (max-width: 768px) {
        display: none;
    }
`;
const Ul = styled.ul`
    padding: 0;
    margin: 0;
    margin-bottom: 30vh;
    text-align: start;

     @media (max-width: 320px) {
     padding: 0px;
      margin-bottom: 0vh;
    }
`;
const Li = styled.li`
    list-style: none;
    margin-bottom: 10px;
    width: 100%;
    
    &.active {
        background-color: #009099; 
        padding: 0px; 
        border-radius: 2px;
    }
`;
const Span = styled.span`
    font-size: 16px;
    color: white;
`;
const Footer = styled.footer`
    font-size: 12px;
    text-align: center; 
    margin-top: auto; 
    display: inline-block;
    color: #FFF;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 20px!important;
    }
`;
const FooterItem = styled.div`
    display: inline-block;
    align-items: center;

    @media (max-width: 768px) {
        display: block;
    }

`
const MobileIcons = styled.div`
    display: none; 
    color: #FFF;
    margin-top: 10px;

    @media (max-width: 768px) {
        display: block;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 19px;
        width: 100%;
        align-items: center;
        font-weigth: bold;
        padding-bottom: 10px;
    }
    @media (max-width: 320px) {
     padding-bottom: 10px;
      
   }
`;
    const Status = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    font-size: 11px;
    font-weight: 400;
    color: #DABB0B;
   
    

    @media (max-width: 768px) {
        color: #fff;
        margin-bottom: 30px!important;
    }
    @media (max-width: 324px) {
       color: #fff;
       margin-bottom: 30px!important;
    }
    
    p {
       color: #DABB0B;
        margin: 0;
        font-size: 12px;
        color: white;
    }
`;

interface SidebarProps {
    onSelect?: (title: string) => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [userName, setUserName] = useState<string | null>(null);
    
      // Utilisez `useEffect` pour accéder à `localStorage` uniquement après le rendu côté client
      useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
          const parsedUser = JSON.parse(user);
          setUserName(parsedUser.name); // Supposons que l'utilisateur a un champ `name`
        }
      }, []);
    
      // Gestion de la déconnexion
      const handleLogout = () => {
        localStorage.removeItem("loggedin"); // Corrigé : parenthèses utilisées
        router.push("/login");
      };
    
    const menuItems = [
        {
            title: 'Tableau de bord',
            icon: <BsGrid1X2 aria-label="Dashboard" />,
            path: '/dashboard',
        },
        {
           title: 'Médicaments',
           icon: <CiMedicalCase aria-label="Produits" />,
           path: '/dashboard/produits',
        },
    ];

    
  
    return (
      <Container style={{ color: "white" }}>
        <Admin>
          <Adminpro>
            <Profil>
              <StyledImage src="/fadjma.jpg" width={40} height={40} alt="profil" />
            </Profil>
            <Name>
              <Users>
                    {userName ? (
                    <div>
                        <span>Bonjour, {userName}</span>
                        <Status>
                        <GrStatusGoodSmall  style={{ marginTop: "12px" }}/>
                        <p style={{ color: " #DABB0B", marginTop: "12px" }}>Administrateur</p>
                        </Status>
                    </div>
                    ) : (
                    <span>Chargement...</span>
                    )}
              </Users>
            </Name>
          </Adminpro>
          <Icon>
            <FaEllipsisV size={16} />
          </Icon>
        </Admin>
        <Navbar>

        <Ul>                     
            {menuItems.map(({ title, icon, path }) => (
            <Li key={title} className={pathname === path ? 'active' : ''}>
                <Link  href={path} onClick={() => onSelect?.(title)} >
                    <Adminpro>
                        <Icon className="icon">{icon}</Icon>
                        <Span className="text">{title}</Span>
                    </Adminpro>
                </Link>
            </Li>
            ))}
        </Ul>
          <div onClick={handleLogout} style={{ cursor: "pointer", marginTop: "10px" }}>
            <Adminpro>
              <Profil>
                <LuCornerUpLeft />
              </Profil>
              <Name>
                <span>Déconnexion</span>
              </Name>
            </Adminpro>
          </div>
        </Navbar>
       
        <Footer>
            <FooterItem style={{ paddingBottom:'0px', paddingTop:'0px' }}> 
                <MobileIcons style={{ paddingTop:'0px' }}>
                    {menuItems.map(({ title, icon, path }) => (
                        <Link key={title}  href={path} onClick={() => onSelect?.(title)} style={{ color:'#FFF', fontSize: '30px' }}>
                            {React.cloneElement(icon, {
                                className: pathname === path ? 'active' : '',
                            })}
                        </Link>
                    ))}
                    <div onClick={handleLogout} style={{ cursor: "pointer"}}>
                        <Profil>
                            <LuCornerUpLeft size={30}/>
                        </Profil>
                    </div>
                </MobileIcons>
                <P  style={{ color:'#fff' }}>Propulsé par Red Team <PiCopyrightLight /> 2024 version 1.1.2</P>
            </FooterItem>
        </Footer>
      </Container>
    );
  };
  
export default Sidebar;

