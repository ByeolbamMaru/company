import styled from "styled-components";
import 홍련 from "./Image/홍련.jpg"

const Wrap = styled.div`
width: 100%;
height: 200vh;

`;


const Container = styled.div``;


const Banner = styled.div`
width: 100%;
height: 720px;
background-image: url(${홍련});
background-size: cover;
background-repeat: no-repeat;
`;



export const Promotion = () => {
    return <Wrap>
        <Container>
            <Banner></Banner>
        </Container>
    </Wrap>
}