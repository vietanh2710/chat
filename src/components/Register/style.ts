import styled from "styled-components";

export const RegisterContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  margin: 0 auto;

  .header {
    .register-wrapper {
      display: flex;
      align-items: center;

      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
  }

  .form-login {
    margin-top: 20px;

    .btn-submit {
      margin-top: 20px;
      background-color: #4259ac;
      color: #fff;
    }
  }
`;
