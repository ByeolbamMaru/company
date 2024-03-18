import styled from "styled-components"
import { Promotion } from "./Promotion";
import { NOTICE } from "./NOTICE";
import { CONTENT } from "./COTENT";

const Wrap = styled.div``;

export const Home = () => {
    return <Wrap>
        {/* <Promotion /> */}
        <NOTICE />
        <CONTENT />
    </Wrap>
}