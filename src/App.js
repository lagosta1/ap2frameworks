import './App.css';
import Header from './Componentes/Header';
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #A9F 35%, #25E 90%)`

function App() {
  return (
    <AppContainer>
      <Header></Header>
    </AppContainer>
  );
}

export default App;