import { useState } from "react";
import styled from 'styled-components'

const StyledCursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 40px;
    height: 40px;
    background-color: red;
    transform: translate(-50%, -50%);
`;

export default function Cursor(props) {
    const { cursor } = props

  return (
    <StyledCursor className="cursor"/>
  );
}
