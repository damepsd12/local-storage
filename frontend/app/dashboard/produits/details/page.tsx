"use client"; 
import styled from 'styled-components';
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Rectangle from '../public/rectangle.png';
import { PiCopyrightLight } from "react-icons/pi";


const Container = styled.div`
  padding: 70px 40px 40px 40px;
  background-color: #EDF1F5;
  box-sizing: border-box;
`
const Row = styled.div`
  margin-bottom: 20px;
`
const Title = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   gap: 20px;
   margin-bottom: 0px;
`
const TitleT = styled.h3`
`
const Span = styled.a`
`
const Rowdt = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   gap: 20px;
`
const BoxText = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
`
const SectionTitle = styled.div`
`
const H2 = styled.h3`
    font-weight: bold; 
    margin-bottom: 20px;
`;
const H1 = styled.h2`
    font-size: 26px;
    padding: 0px;
    font-weight: 700; 
    margin-bottom: 10px;
`;
const P = styled.p`
   margin-bottom: 20px;
   font-size: 15px;
   font-weight: 400; 
   justify-content: center;
`;
export const H4 = styled.h4`
  margin-bottom: 10px;
`

const DetailsPage = () => {
   

  return (
    <Container>
          <Row>
            <Title>
                  <TitleT> <Span> Médicaments </Span><FiChevronRight style={{marginTop: "0px"}} /> Tous  les médicaments</TitleT>
            </Title>
          </Row>
          <Rowdt>
                <BoxText>
                    <FiChevronLeft size={45}  style={{fontWeight: "bold"}}/>
                    <Image src="/rectangle.png" width={350}  height={350}  alt='image'/>
                    <FiChevronRight size={45} />
                </BoxText>
                <SectionTitle>
                      <H1>Augmentin 625 Duo Comprimé</H1>
                      <H2>Composition</H2>
                      <P>Amoycillin-500MG + Clavulanic Acid-122MG</P>
                      <H2>Fabriquant/comerçant</H2>
                      <P>GlaxoSmithKlin Pharmaceutical ldt</P>
                      <H2>Type de consommation</H2>
                      <P>Oral </P>
                      <H2>Date d’expiration</H2>
                      <P>25 janvier</P>
                </SectionTitle>
          </Rowdt>
          <Row>
               <H4>Description</H4>
                <P>Augmentin 625 DuoComprimé est utilisé pour traiter les infections bactériennes 
                  du corps qui affectent la peau, les tissus mous, les poumons, les oreilles, les 
                  voies urinaires et les sinus nasaux. Il convient de mentionner que les infections 
                  virales comme la grippe et le rhume ne sont pas traitées par ce médicament.
                </P>
                <P>Augmentin 625 Duo Tablet se compose de deux médicaments : l’amoxicilline et l’acide clavulanique. 
                  L'amoxicilline agit en détruisant la couche protéique externe, tuant ainsi les bactéries 
                  (action bactéricide). L'acide clavulanique inhibe l'enzyme bêta-lactamase, qui empêche les 
                  bactéries de détruire l'efficacité de l'amoxicilline. En conséquence, l’action de l’acide 
                  clavulanique permet à l’amoxicilline de mieux agir et de tuer les bactéries. Augmentin 625 Duo 
                  Tablet n'agit pas contre les infections causées par des virus, notamment le rhume et la grippe.
                </P>
                <P>Augmentin 625 Duo Tablet se compose de deux médicaments : l’amoxicilline et l’acide clavulanique. 
                  L'amoxicilline agit en détruisant la couche protéique externe, tuant ainsi les bactéries 
                  (action bactéricide). L'acide clavulanique inhibe l'enzyme bêta-lactamase, qui empêche les 
                  bactéries de détruire l'efficacité de l'amoxicilline. En conséquence, l’action de l’acide 
                  clavulanique permet à l’amoxicilline de mieux agir et de tuer les bactéries. Augmentin 625 Duo 
                  Tablet n'agit pas contre les infections causées par des virus, notamment le rhume et la grippe.
                </P>
                <P>
                   La dose d'Augmentin 625 Duo Tablet peut varier en fonction de votre état et de la gravité de
                   l'infection. En outre, il est recommandé de terminer le traitement même si vous vous sentez 
                   mieux, car il s'agit d'un antibiotique, et le laisser entre les deux peut entraîner une 
                   infection même grave qui, en fait, cessera également de répondre à l'antibiotique 
                   (résistance aux antibiotiques). . Les effets secondaires courants du comprimé Augmentin 625 Duo
                    comprennent des vomissements, des nausées et de la diarrhée. Il se peut que tout le monde ne 
                    re
                </P>
                <P>
                    Avant de commencer Augmentin 625 Duo Tablet, veuillez informer votre médecin si vous avez une
                    allergie (à tout antibiotique) ou des problèmes rénaux ou hépatiques. Ne prenez pas Augmentin
                    625 Duo Tablet seul en automédication, car cela pourrait entraîner une résistance aux antibiotiques dans
                    laquelle les antibiotiques n'agissent pas contre des infections bactériennes spécifiques. Augmentin 625 Duo
                    Tablet est sans danger pour les enfants s’il est prescrit par un médecin ; la dose et la durée 
                    peuvent varier en fonction du poids de l’enfant et de la gravité de l’infection. Informez votre
                    médecin de tous les médicaments que vous prenez et de votre état de santé afin d'exclure tout 
                    effet secondaire désagréable.
                </P>
          </Row>
          <Row>
                <H4>Dosage et posologie :</H4>
                <P>Posologie usuelle
                  Prendre Augmentin de préférence en début de repas avec un demi-verre d'eau au moins. Cela permet d'assurer une efficacité et une tolérance optimales. Sauf prescription médicale contraire, la posologie suivante est applicable:
                  Adulte
                  Infections légères, modérées à sévères:
                  625 mg d'Augmentin (500/125) 3 fois par jour ou, dans certains cas,
                  1 g d'Augmentin (875/125) 2 fois par jour.
                  Le sillon de sécabilité des comprimés filmés à 1 g est uniquement destiné à faciliter la prise du comprimé. Les comprimés filmés ne sont pas destinés à réduire la dose de moitié. Les deux moitiés doivent être prises simultanément.
                  Une fois commencé, tout traitement par antibiotiques doit être poursuivi pendant la période prescrite par le médecin.
                  Les symptômes de la maladie disparaissent fréquemment avant la guérison complète de l'infection. Pour cette raison, il ne faut pas arrêter le traitement avant terme, même si vous vous sentez mieux.
                  Ne changez pas de votre propre chef le dosage prescrit. Adressez-vous à votre médecin ou à votre pharmacien si vous estimez que l'efficacité du médicament est trop faible ou au contraire trop forte.
                </P>
          </Row>
    </Container>
  )
};

export default DetailsPage;
