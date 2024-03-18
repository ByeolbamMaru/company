import { faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Wrap = styled.div``;

const Mark = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin: 50px;

h1 {font-size:60px; margin:50px auto}
`;

export const Title = ({Titlename}) => {
    return <Wrap>
        <Mark>
            <FontAwesomeIcon icon={faSun} style={{fontSize:"60px"}} />
            <h1>{Titlename}</h1>
        </Mark>
    </Wrap>
}