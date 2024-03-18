import styled from "styled-components";
import { Title } from "./Title";

const Wrap = styled.div``;


const Bar = styled.div`
width: 75%;
border-bottom: 2px solid black;
border-radius: 15px;
margin: 50px auto;
`;

const Unitname = styled.div`
width: 300px;
height: 100px;
border: 2px solid black;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
margin: 25px auto;

h1 {font-size:60px;}
`;

const Container = styled.div`
width: 75%;
display: flex;
justify-content: space-between;
margin: 0px auto;
`;


const Image = styled.div`
width: 500px;
height: 500px;
border: 2px solid black;
border-radius: 15px;
`;


export const TALENT = () => {
    return <Wrap>
        <Title Titlename="TALENT"/>
        <Bar></Bar>
        <Unitname>
            <h1>??</h1>
        </Unitname>
        <Container>
            <Image></Image>
            <Image></Image>
        </Container>
        <Bar></Bar>
    </Wrap>
}