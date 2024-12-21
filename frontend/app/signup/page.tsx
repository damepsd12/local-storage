"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { baseURL } from "../utils/constant"; 
import { toast } from "react-toastify";
import axios from 'axios';
import { useRouter } from 'next/navigation';

//Votre code CSS reste inchangé...
// Styled Components

const RadioLabel = styled.label`
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permet de passer à la ligne si l'espace est insuffisant
  gap: 2rem;
  width: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 200px; // Assure une largeur minimale
`;

const RadioContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    @media (max-width: 320px) {
     line-height: 20px;
     font-size: 20px;
     font-weight: 700;
     text-align: center;
  }


`;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DateSelectContainer = styled.div`
  flex: 1;
  margin: 0 5px;
`;
const Container = styled.div`
   width: 100%;
   padding: 0;
   margin: 0;
   background-color: #EDF1F5;
   box-sizing: border-box;
`;

const Row = styled.div`
   text-align: center;
   background-color: #1D242E;
   color: white;
   padding: 10px 0;

   @media (max-width: 320px) {
      padding: 20px 10px;
   }
`;

const H1 = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 320px) {
       font-size: 20px;
    }
`;

const SectionLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  padding: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  max-width: 600px;
  padding: 0px 20px; 
`;

const Input = styled.input`
  margin: 10px 0px;
  outline: none;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
`;
const Label = styled.label`
  margin: 5px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

const Select = styled.select`
  margin: 10px 0px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
`;const Button = styled.button`
margin: 10px 0;
padding: 15px 70px;
border: none;
border-radius: 10px;
background-color: #A7DBF5;
color: #000;
width: 100%;
cursor: pointer;
font-size: 16px;
font-family: "Poppins", sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 24px;
text-align: center;
line-height: 24px;
text-underline-position: from-font;
text-decoration-skip-ink: none;

@media (max-width: 320px) {
  padding: 15px 55px;
}

`;

const ConnectSection = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 0px;
gap: 20px;
`;

const ConnexionButton = styled.button`
cursor: pointer;
background: #A7DBF5;
border: 1px solid #CCC;
color: #0070f3;
font-weight: bold;
padding: 10px 20px;
border-radius: 10px;
`;

const InscriptionButton = styled.button`
cursor: pointer;
background: none;
border: 1px solid #CCC;
padding: 10px;
color: #0070f3;
font-weight: bold;
border-radius: 10px;
`;


const Inscon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 10px;
  margin: auto;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 10px;


@media (min-width: 769px) {
  flex-direction: row;
}
@media (max-width: 320px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
@media (man-width: 768px) {
  flex-direction: row;
}
`;
const SignupForm: React.FC = () => {
    const [name, setName] = useState<string>(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [formData, setFormData] = useState({
        sex: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Vérifiez si les mots de passe correspondent
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        // Stocker les données utilisateur dans localStorage
        const user = {
            name,
            lastName,
            email,
            password,
            sex: formData.sex,
            birthDate: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
        };
        localStorage.setItem("user", JSON.stringify(user));

        // Rediriger vers la page de login
        router.push("/login");
    
        if (!name || !email || !password) {
          toast.error("All fields (name, email, password) are required");
          return;
        }
    
        const payload = {
          name,
          lastName,
          email,
          sex: formData.sex,
          birthDay: formData.birthDay,
          birthMonth: formData.birthMonth,
          birthYear: formData.birthYear,
          password,
          ConfirmPassword: confirmPassword // Assurez-vous d'inclure ConfirmPassword également
        };
        try {
          const response = await axios.post(`${baseURL}users/signup`, payload);
          toast.success(
            <div>
              Account Created Successfully <br /> Please Login
            </div>
          );
           if(response.status === 201){
            alert("Inscription reussie")
           }else{
            console.log("erreur d'inscription");
           }
          router.push("/login");
        } catch (err: any) {
          toast.error(err?.response?.data?.message || "An error occurred");
        }
      };

    

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const days = Array.from({ length: 31 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
    const months = Array.from({ length: 12 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
    const years = Array.from({ length: 100 }, (_, idx) => (new Date().getFullYear() - idx).toString());

    return (
        <Container>
            <Row>
                <H1>Bienvenue chez votre pharmacie</H1>
                <SectionLogo>
                    <Logo style={{ marginRight: '20px' }}>
                        <Image
                            src="/fadjmalogo.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </Logo>
                    <Logo>Fadj-Ma</Logo>
                </SectionLogo>
            </Row>
            <FormContainer>
                <Form onSubmit={handleSubmit} method="POST">
                    <Inscon>
                        <Link href="/" passHref>
                            <Button type="button" style={{ backgroundColor: '#EDF1F5', border: "1px solid #BBB" }}>Connectez-vous</Button>
                        </Link>
                        <Link href="/signup" passHref>
                            <Button type="button">Inscrivez-vous</Button>
                        </Link>
                    </Inscon>
                    <RadioContainer>
                        <RadioLabel>
                            <Input style={{ backgroundColor: '#EDF1F5', padding: "40px"}}
                                type="radio"
                                name="sex"
                                value="male"
                                checked={formData.sex === 'male'}
                                onChange={handleChange}
                                required
                            />
                           <span style={{ marginLeft: "20px" }}> Homme</span>
                        </RadioLabel>
                        <RadioLabel>
                            <Input
                                type="radio"
                                name="sex"
                                value="female"
                                checked={formData.sex === 'female'}
                                onChange={handleChange}
                                required
                            />
                           <span style={{ marginLeft: "20px" }}>Femme</span>
                        </RadioLabel>
                    </RadioContainer>

                    <FlexContainer>
                        <InputContainer>
                            <Label htmlFor="firstName">Prénom</Label>
                            <Input
                                id="firstName"
                                type="text"
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="lastName">Nom</Label>
                            <Input
                                id="lastName"
                                type="text"
                                name="lastName"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </InputContainer>
                    </FlexContainer>

                    <Label>Date de naissance</Label>
                    <DateContainer>
                        <DateSelectContainer>
                            <Select
                                id="birthDay"
                                name="birthDay"
                                value={formData.birthDay}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>JJ</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </Select>
                        </DateSelectContainer>

                        <DateSelectContainer>
                            <Select
                                id="birthMonth"
                                name="birthMonth"
                                value={formData.birthMonth}
                                onChange={handleChange}
                                required
                            >
                                <option value ="" disabled hidden>MM</option>
                                {months.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </Select>
                        </DateSelectContainer>

                        <DateSelectContainer>
                            <Select
                                id="birthYear"
                                name="birthYear"
                                value={formData.birthYear}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>AAAA</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </Select>
                        </DateSelectContainer>
                    </DateContainer>

                    <FlexContainer>
                        <InputContainer>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputContainer>
                    </FlexContainer>

                    <InputContainer>
                        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </InputContainer>

                    <Button type="submit" style={{ textAlign: 'center' }}>S'inscrire</Button>
                </Form>
            </FormContainer>
        </Container>
    );
};

export default SignupForm;
