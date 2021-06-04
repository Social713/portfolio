import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0,0,0, .7);
  z-index:1000;
`;

export const Form = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;

  button{
    background: ${({primary}) => (primary ? '#000d1a' : "CD853F")};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: ${({big})=> (big ? '16px 40px' : '14px 24px')};
    color: '#fff';
    font-size: '20px';
    border-radius: 2px;
    background-color:black;
    width: 200px;

    &:hover {
        transform: translateY(-2px);
        background-color: skyblue;
    }
  }
  p{
    color: #fff;
  }
`;

