import styled from "styled-components"

const Wrap = styled.div`
text-align: center;

h1 {font-size:60px; margin-top: 50px;}
p {font-size:40px; margin-top: 50px;}
`;

const Bar = styled.div`
width: 75%;
border-bottom: 2px solid black;
border-radius: 15px;
margin: 50px auto;
`;

const Title = styled.div`
width: 100%;
height: 750px;
border: 2px solid black;
`;

export const GUIDELINE = () => {
    return <Wrap>
        <Bar></Bar>
        <Title>
            <h1>2차 창작에 대한 가이드 라인</h1>
            <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
        </Title>
        <Title>
            <h1>대외행사 협력안내</h1>
            <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
        </Title>
        <Title>
            <h1>문의사항</h1>
            <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
        </Title>
        <Bar></Bar>
    </Wrap>
}