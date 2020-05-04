import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    p {
      color: #a8a8b3;
    }
    svg {
      margin-right: 4px;
    }
    &:hover {
      transform: translateX(-6px);
      p {
        color: #fff;
      }
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #fff;
      }
      p {
        font-size: 18px;
        color: #eee;
        margin-top: 4px;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        text-align: center;
        font-size: 36px;
        color: #eee;
      }
      span {
        display: block;
        color: #999;
        font-size: 26px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a + a {
    margin-top: 16px;
  }
  a {
    background-color: #555;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    div {
      flex: 1;
      margin-left: 16px;
      margin: 0 16px;
      strong {
        font-size: 20px;
        color: #fff;
      }
      p {
        color: #999;
        font-size: 18px;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
    }
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  p {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  svg {
    margin-left: 12px;
    animation: ${rotate} 3s alternate infinite;
  }
`;
