import styled from "styled-components";

export const MenuLeftContainer = styled.div`
  height: 100%;
  background-color: #4259ac;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 5px;

  .logo {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
  }

  .profile {
    color: #fff;
    margin-top: 20px;
    flex: 1;
    cursor: pointer;
  }

  .icon-profile,
  .icon-logout {
    width: 35px;
    height: 35px;
    color: #fff;
    cursor: pointer;
  }

  .icon-logout {
    margin-bottom: 20px;
    transform: rotateY(180deg);
    margin-bottom: 0;
    margin-top: auto;
  }
`;
