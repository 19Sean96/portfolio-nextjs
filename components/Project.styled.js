import styled from "styled-components";

const StyledProject = styled.section`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: 0.25s opacity 0.15s linear;
`;

export default StyledProject;
