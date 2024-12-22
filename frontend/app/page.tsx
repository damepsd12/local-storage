"use client"; // Ajoutez cette ligne pour indiquer que c'est un composant client
import React from 'react';
import './i18n';
import styled from 'styled-components';
import DashboardLayout  from "./dashboard/layout"
import AuthForm from './login/page';

const DashboardLayout = styled.div`
  padding: 0px;
  margin: 0px;
`
const Main = styled.div`
  grid-area: main;
  padding: 0px;
  backgroundColor: '#000';

   @media (max-width: 768px) {
    display: none!important;
  }
`;

const App = () => (
  <DashboardLayout >
      <Main  style={{ backgroundColor: '#EDF1F5' }}>
        <AuthForm />
      </Main>
  </DashboardLayout >
   
);

export default App;

// import AuthForm from "./login/page";

// export default function Home() {
//   return (
//     <div>
//       <AuthForm />
//     </div>
//   );
// }
