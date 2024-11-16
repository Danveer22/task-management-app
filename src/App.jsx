import styled from "styled-components";
import { TaskProvider } from "./context/UserContext";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

import SearchBar from "./components/SearchBar";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 8rem 8rem 8rem 35rem;
  min-height: 100vh;
  gap: 2rem;
  padding: 2rem 5%;
  background-color: var(--background-color);
`;

const Section = styled.section`
  background-color: var(--card-bg-color);
  display: flex;
  align-items: center;

  padding: 2.5rem;
  border-radius: 1rem;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <TaskProvider>
      <StyledContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Section>
          <SearchBar />
        </Section>
        <Section>
          <Form />
        </Section>

        <Section>
          <PackingList />
        </Section>
      </StyledContainer>
    </TaskProvider>
  );
}

export default App;
