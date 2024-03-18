import styled from "styled-components"
import { Title } from "./Title";

const Wrap = styled.div``;

const Bar = styled.div`
width: 75%;
border-bottom: 2px solid black;
border-radius: 15px;
margin: 50px auto;
`;

const Container = styled.div`
width: 80%;
display:flex;
justify-content: space-between;
margin: 20px auto;
`;

const Box = styled.div`
width: 400px;
height: 300px;
background-color: gray;
background-image: url(${props => props.$bgimage});
`;

const More =  styled.div`
width: 300px;
height: 100px;
border: 2px solid black;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
margin: 25px auto;

cursor: pointer;

h1 {font-size:50px; font-weight:bold;}
`;

export const NOTICE = () => {
    return <Wrap>
        <Title Titlename="NOTICE" />
        <Bar></Bar>
        <Container>
            <Box />
            <Box />
            <Box />
        </Container>
        <Container>
            <Box />
            <Box />
            <Box />
        </Container>
        <More>
            <h1>+MORE</h1>
        </More>
        <Bar></Bar>
    </Wrap>
}