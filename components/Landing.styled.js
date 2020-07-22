import styled from "styled-components";


const StyledSection = styled.section`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: 0.25s opacity .15s linear;

  .landing--center-stage {
    transform: translateX(${(props) => (props.inView ? "0%" : "-25%")});
    transition: 0.35s transform ease-out;

    h1 {
      opacity: ${(props) => (props.inView ? 1 : 0)};
      transition: 0.35s opacity .225s ease-in;
    }

    h2 {
      opacity: ${(props) => (props.inView ? 1 : 0)};
      transition: 0.35s opacity .3s ease-out;
    }

    .small-box {
      transform: translateY(${props => props.inView ? "0" : "-50%"});

      &:hover {
        transform: translateY(25%);
      }
    }
  }
`;

export default StyledSection