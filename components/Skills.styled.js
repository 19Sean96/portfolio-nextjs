import styled from "styled-components";

const StyledSection = styled.section`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: 0.75s all ease-in-out;

  .skills--list {
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transition: 0.75s all 0.25s ease-in-out !important;
  }
`;

export default StyledSection
