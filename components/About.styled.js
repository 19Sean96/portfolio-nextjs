import styled from 'styled-components'

const StyledSection = styled.section`
  opacity: ${props => props.inView ? 1 : 0};
  transition: .5s opacity ease-in-out;

  .about--title {
    transform: translateY(${props => props.inView ? "0%" : "20%"});
    transition: .6s transform ease-out;
  }
`
const StyledArticle = styled.article`
opacity: ${props => props.inView ? 1 : 0};
transform: translate${props => props.inView ? "(0,0)" : props.translate};
transition: .175s opacity ${props => props.delay}s ease-in-out,
            .375s transform ${props => props.delay}s ease-out;
`

export {
    StyledSection,
    StyledArticle
}