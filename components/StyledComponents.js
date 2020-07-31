import styled from 'styled-components'

const StyledAboutSection = styled.section`
  opacity: ${props => props.inView ? 1 : 0};
  transition: .5s opacity ease-in-out;

  .about--title {
    transform: translateY(${props => props.inView ? "0%" : "20%"});
    transition: .6s transform ease-out;
  }
`
const StyledAboutArticle = styled.article`
opacity: ${props => props.inView ? 1 : 0};
transform: translate${props => props.inView ? "(0,0)" : props.translate};
transition: .175s opacity ${props => props.delay}s ease-in-out,
            .375s transform ${props => props.delay}s ease-out;
`

const StyledContactSection = styled.section`
  opacity: ${props => props.inView ? 1 : 0};
  transition: .5s opacity ease-in-out;

  .contact--title {
    transform: translateY(${props => props.inView ? "0%" : "-20%"});
    transition: .6s transform ease-out;
  }
`

const StyledLandingSection = styled.section`
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

const StyledLink = styled.a`
    position: relative;
    transform-origin: right center;
    transform: scale(${props => props.active ? 1 : .925});
    opacity: ${props => props.active ? 1 : 0.2};
    transition: .5s opacity ease-out,
                .15s transform ease-in;
`;

const StyledProject = styled.section`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: 0.25s opacity 0.15s linear;
`;

export {
    StyledAboutSection,
    StyledAboutArticle,
    StyledContactSection,
    StyledLandingSection,
    StyledLink,
    StyledProject
}