import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px 30px;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top:20px;
`;

const Card = styled.div`
  max-width: 250px;
  border: 0.2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
const ContentItem = styled.div`
  padding: 10px;
`;
const NameContent = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: gray;
  margin-bottom:5px;
`;
const Driver = styled.div`
  width: 10%;
  height: 2px;
  background-color: #e63946;
`;

const Authors = () => {
  return (
    <Container>
      <Title>List of Users</Title>
      <CardContainer>
        <Card>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ImageContainer>
          <ContentItem>
            <NameContent>Trigo</NameContent>
            <Driver />
          </ContentItem>
        </Card>
        <Card>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ImageContainer>
          <ContentItem>
            <NameContent>Trigo</NameContent>
            <Driver />
          </ContentItem>
        </Card>
        <Card>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ImageContainer>
          <ContentItem>
            <NameContent>Trigo</NameContent>
            <Driver />
          </ContentItem>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Authors;
