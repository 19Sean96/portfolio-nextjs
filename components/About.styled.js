import styled from 'styled-components'

const StyledSection = styled.section`
  opacity: ${props => props.inView ? 1 : 0};
  transition: .75s opacity ease-in-out;
`
const StyledArticle = styled.article`
opacity: ${props => props.inView ? 1 : 0};
transform: translate${props => props.inView ? "(0,0)" : props.translate};
transition: .25s opacity ${props => props.delay}s ease-in-out,
            .5s transform ${props => props.delay}s ease-out;
`

export {
    StyledSection,
    StyledArticle
}