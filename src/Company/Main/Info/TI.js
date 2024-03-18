import styled from "styled-components"
import Temporary from "../Image/Temporary-01.png"

const Wrap = styled.div``;


const Container = styled.div`
display: flex;
border: 1px solid black;
display: flex;
`;

const Introduce = styled.div`
width: 60%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`;

const Bar = styled.div`
height: 400px;
border-right: 2px solid black;
margin-top: 50px;
`;

const Image = styled.div`
width: 40%;
height: 500px;
background: url(${Temporary});
background-size: 100%;
background-repeat: no-repeat;
background-position: center;
`;

export const TI = () => {
    return <Wrap>
        <Container>
            <Introduce>Lorem ipsum</Introduce>
            <Bar></Bar>
            <Image></Image>
        </Container>
    </Wrap>
}