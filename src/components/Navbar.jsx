import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex:2;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const AdminTitle = styled.div`
    font-size:26px;
    font-weight:500;
    color:gray;
`;

const AdminInfo = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`;

const Title = styled.p``;

const Profile = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    &:hover{
        cursor:pointer;
    }
`;

const TitleAdmin = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <AdminTitle>Admin Panel</AdminTitle>
      <AdminInfo>
        <Title>Trigo</Title>
        <Profile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU" />
      </AdminInfo>
    </Container>
  );
}

export default Navbar
