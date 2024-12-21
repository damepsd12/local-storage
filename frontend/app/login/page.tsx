"use client"; 
import Link from 'next/link';
import Image from 'next/image';
import Fadjmalogo from "../public/fadjmalogo.png";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import {Container, Row, H1, SectionLogo, Logo} from './login';
import axios from 'axios';

// Styles pour le formulaire
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 600px;
  margin: 20px auto;
  padding: 40px 20px;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 20px; 
    margin: 10px; 
  };
  @media (max-width: 320px) {
    padding: 10px;
  };
  @media (max-width: 425px) {
    padding: 10px;
  };
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 14px 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #EDF1F5;

  &:focus {
    border-color: #0070f3;
  };

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Button = styled.button`
  padding: 11px 55px;
  border: 1px solid #BBB;
  border-radius: 10px;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  width: 100%;

  @media (max-width: 320px) {
      padding: 10px 20px!important;
      font-size: 12px!important;
  };

  &:hover {
    background-color: #005bb5;
  };

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 16px;
  };
`;

const ForgottenPasswordLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  text-align: end;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Inscon = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  gap: 10px; 
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(""); // Pour gérer les erreurs

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/login", {email, password});
      // Récupération des données utilisateur depuis localStorage
      const user = localStorage.getItem("user");

      if (!user) {
        throw new Error("Aucun utilisateur enregistré trouvé. Veuillez vous inscrire.");
      }

      const loggedUser = JSON.parse(user);

      // Vérification des identifiants
      if (email === loggedUser.email && password === loggedUser.password) {
        localStorage.setItem("loggedin", "true");
        router.push("/dashboard");
      } else {
        throw new Error("Email ou mot de passe incorrect.");
      }
    } catch (err: any) {
       console.error("Erreur:", err); // Consigner l'erreur pour le débogage
        if (err.response) {
            setError(err.response.data.message || "Erreur de connexion.");
        } else {
            setError("Une erreur inattendue s'est produite.");
        }

      setError(err.message || "Une erreur inattendue s'est produite.");
    } finally {
      setLoading(false);
    }

  };



  const handleForgotPassword = () => {
    console.log('Mot de passe oublié pour:', email);
    // Ajoutez ici la logique pour gérer la demande de mot de passe oublié 
  };

  return (
    <Container>
      <Row>
        <H1>Bienvenue chez votre pharmacie</H1>
        <SectionLogo>
          <Logo style={{ marginRight: '20px' }}>
            <Image src="/fadjmalogo.png" alt="logo" width={40} height={40} />
          </Logo>
          <Logo>Fadj-Ma</Logo>
        </SectionLogo>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Inscon>
          <Link href="/" passHref>
            <Button type="button" style={{ backgroundColor: '#A7DBF5' }}>Connectez-vous</Button>
          </Link>
          <Link href="/signup" passHref>
            <Button type="button" style={{ backgroundColor: '#EDF1F5' }}>Inscrivez-vous</Button>
          </Link>
        </Inscon>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichage des erreurs */}
        <Label htmlFor="email">Email:</Label>
        <Input 
          id="email" 
          type="email" 
          required 
          value={email}
          aria-label="Email"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Label htmlFor="password">Mot de passe:</Label>
        <Input 
          id="password" 
          type="password" 
          required 
          value={password}
          aria-label="Mot de passe"
          onChange={(e) => setPassword(e.target.value)} 
        />
        <ForgottenPasswordLink onClick={handleForgotPassword} style={{ color: 'black', fontWeight: 500, marginBottom: "30px" }}>
          Mot de passe oublié ?
        </ForgottenPasswordLink>

        <Button type="submit" disabled={loading} style={{ backgroundColor: '#A7DBF5', color: 'black' }}>
          {loading ? "Chargement..." : "Se connecter"}
        </Button>
      </Form>
    </Container>
  );
};

export default AuthForm;
