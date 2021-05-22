import styled from 'styled-components';

export const ThirdSection = styled.section`
    width: 1000px;
    height: 600px;

    
`;

export const Container =styled.div`
    
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({reverse}) => (reverse ? '2' : '1')};
}`;

