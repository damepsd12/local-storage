"use client";
import React from 'react';
import {Main, Left, Asidebar} from "./layout.ts"
import styled from 'styled-components';
import Sidebar from '../components/iu/sidebar/sidebar';
import Navbar from '../components/iu/navbar/navbar';
import { useRouter } from 'next/navigation';
import ProtectRout from "../service/page";

export default function DashboardLayout({ children }: { children: React.ReactNode }){
  const router = useRouter()
  return (
    <ProtectRout>
        <Main>
            <Left>
               <Sidebar onSelect={(title) => console.log(`Sélectionné : ${title}`)} />
            </Left>
            <Asidebar>
                <Navbar/>
                    {children} 
            </Asidebar>
        </Main>
    </ProtectRout>
  )
};

