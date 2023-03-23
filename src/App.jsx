import styled from "styled-components"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Authors from "./pages/Authors"
import Books from "./pages/Books"
import { Outlet } from "react-router-dom"

const Container = styled.div`
  display:flex;
`
const RightContainer = styled.div`
flex:4;
`

function App() {
  
  return (
    <Container>
      <Sidebar />
      <RightContainer>
        <Navbar />
        <Outlet />
      </RightContainer>
    </Container>
  );
}

export default App
