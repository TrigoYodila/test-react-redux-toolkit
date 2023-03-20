import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  width: 16vw;
  height: 96vh;
  /* background-color: gray; */
  padding: 20px 0 0 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const TitleTop = styled.p`
  font-size:18px;
`;

const CenterContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top:30px;
`
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding:10px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,0.1);
  }
`;

const MenuIcon = styled.span`
  cursor:pointer;
  &:hover{
    color:blue;
  }
`;

const MenuName = styled.p`
font-weight:400;
color:gray;
`;

const BottomContainer = styled.div`
  padding: 10px;
`;

const BottomItem = styled.span`
  font-size:20px;
`;

const Top = styled.div`
`;

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <TopContainer>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU"
            alt="avatar"
          />
          <TitleTop>admin</TitleTop>
        </TopContainer>

        <CenterContainer>
          <MenuContainer>
            <MenuIcon>
              <PersonIcon sx={{ fontSize: 30 }} />
            </MenuIcon>
            <MenuName>Authors</MenuName>
          </MenuContainer>
          <MenuContainer>
            <MenuIcon>
              <BookIcon sx={{ fontSize: 30 }} />
            </MenuIcon>
            <MenuName>Books</MenuName>
          </MenuContainer>
        </CenterContainer>
      </Top>

      <BottomContainer>
        <MenuIcon>
          <LogoutIcon sx={{ fontSize: 30 }} />
        </MenuIcon>
      </BottomContainer>
    </Container>
  );
};

export default Sidebar;
