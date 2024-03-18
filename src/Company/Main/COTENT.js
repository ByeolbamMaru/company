import styled from "styled-components";
import { Title } from "./Title";

const Wrap = styled.div`
height: 1500px;
`;

const Container = styled.div`
h1 {font-size: 60px; margin-left:25px;}
`;

const Content = styled.div`
width: 100%;
height: 200px;
border: 2px solid black;
display: flex;
`;

const Content4 = styled.div`
width: 100%;
height: 500px;
border: 1px solid black;
display: flex;
`;


const Container2 = styled.div`
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
`;


const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;


const Imagebox = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;


const YBar = styled.div`
height: 75%;
border: 1px solid black;
margin: auto 0px;
`;


const Introduce = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const  CONTENT = () => {
    return <Wrap>
            <Title Titlename="CONTENT" />
        <Container>
            <Content><h1>Content1</h1></Content>
            <Content><h1>Content2</h1></Content>
            <Content><h1>Content3</h1></Content>
        </Container>
            <Content4>
                <Container2>
                    <Logo>Content4</Logo>
                    <Imagebox>이미지</Imagebox>
                 </Container2>
                <YBar></YBar>
                <Introduce>Lorem</Introduce>
            </Content4>
    </Wrap>
}