"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { baseURL } from "../../utils/constant";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

// Types for props
interface ModalProps {
  isopen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

// Product type
interface Product {
  _id: string;
  name: string;
  nameGroup: string;
  description: string;
  dosage: number;
  stock: string;
  price: number;
  currency: string;
}

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  padding: 20px 0px;
  font-size: 20px;

  h2 {
    font-size: 15px;
    margin-top: 5px;
  }
    p{
      font-size: 14px;
    }
`;

const Tete = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 20px auto;
  border-radius: 50%;
`;

const Form = styled.form`
  padding: 40px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 320px) {
  display: inline-block;
  width: 100%;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 700;
  width: 48%;

  &:hover {
    opacity: 0.9;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalHeader = styled.div`
  background-color: #edf1f5;
  padding: 10px;
  text-align: center;
  border-radius: 8px 8px 0 0;
  margin-bottom: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImagePreviewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImagePreview = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 8px;
`;

const CurrencySelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;
interface User {
  _id: number;
  
}
const Modal: React.FC<ModalProps> = ({ isopen, onClose }) => {
  if (!isopen) return null; 
    const [formData, setFormData] = useState<Omit<Product, "_id">>({
      name: "",
      nameGroup: "",
      description: "",
      dosage: "",
      stock: "",
      price: 0,
      currency: "FCFA",
    });
    const [error, setError] = useState<string>("");
      // const user = (localStorage.getItem("user") ?? "null");

      const userNumber = localStorage.getItem("user");
  const user: User | null = userNumber ? JSON.parse(userNumber) : null;
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Veuillez télécharger un fichier image valide.");
      }
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
  
      const { name, nameGroup, description, dosage, stock, price, currency } = formData;
      console.log(formData);
      
  
      if (!name || !nameGroup || !description || !dosage || !stock || price <= 0 || !currency) {
        setError("Tous les champs sont requis et le prix doit être supérieur à zéro.");
        return;
      }
  
      try {
        const response = await axios.post(`${baseURL}products`, {
          name,
          nameGroup,
          description,
          dosage: Number(dosage),
          stock: Number(stock),
          price: Number(price),
          currency,
          userId: user?._id,
        });
  
        setFormData({
          name: "",
          nameGroup: "",
          description: "",
          dosage: "",
          stock: "",
          price: 0,
          currency: "FCFA",
        });
       
        // onProductAdded(response.data.product);
        onClose();
      } catch (err: any) {
        setError(err.response?.data?.message || "Erreur lors de l'ajout du médicament.");
        console.error(err);
      }
    };
   useEffect(() => {
              
  }, []);
    if (!isopen) return null;
  
    return (
      <Overlay>
        <ModalContainer role="dialog" aria-labelledby="modal-title">
          <ModalHeader>
            <label htmlFor="image-upload">
              <Tete>
                <FaPlus size={30} />
              </Tete>
            </label>
            <h2 id="modal-title">Ajouter un produit</h2>
          </ModalHeader>
          <Form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Input type="file" id="image-upload" style={{ display: "none" }} accept="image/*" onChange={handleImageChange} />
            <Title>
              <h2>Obligatoire</h2>
              <p style={{ marginBottom: "0px", color: "#ccc", fontSize: "12px" }}>Donnez plus de details possible</p>
            </Title>
            <Row>
              <FormGroup>
                <Label>Nom du médicament:</Label>
                <Input type="text" name="name" value={formData.name} placeholder="Nom du medicament" onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label>Description:</Label>
                <Input type="text" name="description" value={formData.description} placeholder="Description" onChange={handleChange} required />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label>Nom du groupe:</Label>
                <Input type="text" name="nameGroup" value={formData.nameGroup} placeholder="Nom du groupe" onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label>Dosage:</Label>
                <Input type="number" name="dosage" value={formData.dosage} placeholder="Dosage" onChange={handleChange} required />
              </FormGroup>
            </Row>
            <Row>
            <Row>
              <FormGroup>
                <Label>Stock:</Label>
                <Input type="number" name="stock" value={formData.stock} placeholder="Stock" onChange={handleChange} required />
              </FormGroup>
            </Row>
              <FormGroup>
                <Label>Prix:</Label>
                <Input type="number" name="price" value={formData.price} placeholder="Prix" onChange={handleChange} required />
              </FormGroup>
              <FormGroup>
                <Label>Devise:</Label>
                <CurrencySelect value={formData.currency} onChange={(e) => setFormData({ ...formData, currency: e.target.value })}>
                  <option value="FCFA">FCFA</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </CurrencySelect>
              </FormGroup>
            </Row>
            <ButtonGroup>
              <Button type="button" onClick={onClose} style={{backgroundColor: "#FFF", border: "1px solid #CCC"}}>Annuler</Button>
              <Button type="submit" style={{backgroundColor: "#A7DBF5", border: "none"}}>Enregistrer</Button>
            </ButtonGroup>
          </Form>
        </ModalContainer>
      </Overlay>
    );
  };
  
  export default Modal;
  
