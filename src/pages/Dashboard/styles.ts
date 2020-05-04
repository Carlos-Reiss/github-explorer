import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
export const Title = styled.h1`
  font-size: 2.8rem;
  color: #100;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;
export const Form = styled.form<FormProps>`
  margin-top: 40;
  display: flex;
  max-width: 700px;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    border: 2px solid #666;
    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}
    color: #a3a3a3;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    background-color: #04d361;
    font-size: 1.4rem;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
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

    img {
      height: 84px;
      width: 84px;
      border-radius: 50%;
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

export const Error = styled.span`
  display: flex;
  color: #c53030;
  margin-top: 10px;
  font-weight: bold;
  transition: 0.2s;
  justify-content: center;
`;
