import styled from "styled-components";

const StyledSection = styled.section`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: 0.5s all ease-in-out;

  .skills--list {
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: translateX(${(props) => (props.inView ? "0%" : "-20%")});
    &:nth-of-type(1) {
      transition: 0.2s opacity 0.1s ease-in-out, 0.325s transform 0.1s ease-out;
    }

    &:nth-of-type(2) {
      transition: 0.2s opacity 0.25s ease-in-out, 0.325s transform 0.25s ease-out;
    }

    &:nth-of-type(3) {
      transition: 0.2s opacity 0.4s ease-in-out, 0.325s transform 0.4s ease-out;
    }
  }

  .skills--title {
    transform: translateY(${props => props.inView ? "0%" : "20%"});
    transition: .6s transform ease-out;
  }
`;

export { StyledSection };
