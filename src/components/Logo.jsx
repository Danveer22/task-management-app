import styled from "styled-components";
import { FaTasks } from "react-icons/fa";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 3rem;
  font-weight: 700;
`;

const Icon = styled(FaTasks)`
  font-size: 3.5rem;
  color: var(--accent-color);
`;

const LogoText = styled.span`
  color: var(--text-color);
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Icon />
      <LogoText>TaskMaster</LogoText>
    </StyledLogo>
  );
};

export default Logo;
