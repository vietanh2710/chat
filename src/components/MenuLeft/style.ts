import styled from "styled-components";

export const MenuLeftContainer = styled.div`
  height: 100%;
  background-color: #4259ac;
  height: 100vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }

  .profile {
    color: #fff;
    margin-top: 20px;
    flex: 1;
  }

  .icon-logout {
    width: 35px;
    height: 35px;
    color: #fff;
    margin-bottom: 20px;
    transform: rotateY(180deg);
    cursor: pointer;
  }
`;
