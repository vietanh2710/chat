import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: inherit;
  flex-direction: row;
  flex-wrap: wrap;

  .avt-img {
    padding-right: 15px;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #d9d9d9;
      padding: 4px;
    }
  }

  .content {
    padding-left: 20px;
    width: 100%;
    flex: 1;

    label {
      > div {
        margin-left: 5px;
        font-weight: 400;
      }
    }
  }
`;
