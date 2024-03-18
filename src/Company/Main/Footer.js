import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Wrap = styled.div`
width: 100%;
height: 500px;
background: linear-gradient(#0A234B, #1478D2);
`;

const Offical = styled.div`
text-align: center;
h3 {font-Weight:bold; font-Size:30px; padding:25px 0px; color:white;}
`;


const Logo = styled.div`
text-align: center;
padding: 50px 0px;
margin: 0px auto;

text-shadow: 0px 0px 15px #B4C8DC;
h1 {font-Weight:bold; font-Size:60px; color:white;}
h2 {font-Weight:bold; font-Size:80px; color:white;}
`;

const Box = styled.div`
width: 50%;
border: 5px solid white;
border-radius: 25px;
padding: 25px 25px;
margin: 0px auto;
`;

const Sns = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
margin: 0px auto;

p {font-weight:bold; font-size:60px; color:white;}
a:hover {transition:all 0.5s ease; transform: translateY(-10px);}
`;

export const Footer = () => {
    return <Wrap>
        <Offical>
            <Logo>
                <h1>STARISE</h1>
                <h2>OFFICAL SNS</h2>
            </Logo> 
            <Box>
                <Sns>
                <a href="https://twitter.com/StarNight_Maru" target="_Blank" >
                    <FontAwesomeIcon icon={faXTwitter} style={{fontSize:"70px", color:"white"}} />
                </a>
                <p>‖</p>
                <a href="https://www.instagram.com/allday_0709/?hl=ko" target="_Blank" >
                    <FontAwesomeIcon icon={faInstagram} style={{fontSize:"70px", color:"white"}} />
                </a>
                <p>‖</p>
                <a href="https://www.youtube.com/channel/UCM4L9QxnHOTluMQvoC3MbIQ" target="_Blank" >
                    <FontAwesomeIcon icon={faYoutube}  style={{fontSize: "70px", color:"white"}} />
                </a>
                </Sns>
            </Box>
            <h3>Email - allday0709@naver.com</h3>
        </Offical>
    </Wrap>
}