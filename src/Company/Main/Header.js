import styled from "styled-components"
import Starise from "./Image/Starise.png"
import { Link } from "react-router-dom";

const Wrap = styled.div`
width: 100%;
height: 200px;
background: linear-gradient(#0F1616, #0A234B);
`;


const Container = styled.div``;

const Logo = styled.div`
width: 100%;
height: 120px;
background-image: url(${Starise});
background-repeat: no-repeat;
background-size: 20%;
background-position: center;
background-position-y: 25px;
`;

const Category = styled.div`
width: 80%;
display: flex;
justify-content:center;
margin: 0px auto;

p {font-weight:bold; font-size:30px; color:#B4C8DC; padding:20px 25px;}
h1 {font-weight:bold; font-size:30px; color:#B4C8DC; padding:20px 25px;}
h1:hover {color: #F5BE46; cursor: pointer;}
h1:after {
    display:block;
    content: '';
    border-bottom: 4px solid #F5BE46;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}
h1:hover:after {transform: scaleX(1);}
`;



export const Header = () => {
    return <Wrap>
        <Container>
            <Link to="/">
            <Logo /> </Link>
            <Category>
                <p>‖</p>
                <Link to="/ABOUT">
                <h1>ABOUT</h1></Link>
                <p>‖</p>
                <Link to="/NOTICE">
                <h1>NOTICE</h1></Link>
                <p>‖</p>
                <Link to="/TALENT">
                <h1>TALENT</h1></Link>
                <p>‖</p>
                <Link to="/CONTENT">
                <h1>CONTENT</h1></Link>
                <p>‖</p>
                <Link to="/GUIDELINE">
                <h1>GUIDELINE</h1></Link>
                <p>‖</p>
            </Category>
        </Container>
    </Wrap>
}