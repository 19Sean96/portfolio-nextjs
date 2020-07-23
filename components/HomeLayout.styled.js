import styled from "styled-components";


const StyledLink = styled.a`
    position: relative;
    transform-origin: right center;
    transform: scale(${props => props.active ? 1 : .925});
    opacity: ${props => props.active ? 1 : 0.2};
    transition: .5s opacity ease-out,
                .15s transform ease-in;
`;

export {
    StyledLink
}