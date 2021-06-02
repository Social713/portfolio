import styled from 'styled-components';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiCss3, SiMongodb, SiJquery} from 'react-icons/si';
import {AiOutlineHtml5} from 'react-icons/ai';

export const Section = styled.section`
    width: 100%;
    height: 100%;
  
    `;

export const Container = styled.div`
    padding: 3% 3% 2% 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
}
`;

export const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    padding: 1rem, 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p {
        margin-bottom: 2rem;
        width: 65%;
    }
    img{
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 100%;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
    }
`;

export const ImageColumn = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({reverse}) => (reverse ? '2' : '1')};
}

img{
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 25px;
    @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
    }
}`;

export const LogoTitle = styled.div`
    width : 100%;
    top: 0:
    justify-content: center;
    text-align: center;

    h1{
        padding-bottom: 5%;
        margin-bottom: 1%;
    }
`;

export const ReactIcon = styled(FaReact)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const JsIcon = styled(SiJavascript)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const HtmlIcon = styled(AiOutlineHtml5)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const CssIcon = styled(SiCss3)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const NodeIcon = styled(FaNodeJs)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const MongoIcon = styled(SiMongodb)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const JQueryIcon = styled(SiJquery)`
    height: 80px;
    width: 80px;
    margin: 2%;
`;

export const TextWrapper =styled.div`
    width : 100%; 

`;