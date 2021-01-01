import styled from "styled-components/macro";
import * as STYLES from "../../../constants/styles";

export const Container = styled.div`
  color: ${STYLES.PRIMARY_FONT_COLOR};
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 30px;
  width: 100%;
`;
export const Inner = styled.div`
  width: 85%;
  max-width: 815px;
  margin: auto;
`;
export const Title = styled.h4`
  margin: 2em auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  height: 48px;
  border: none;

  @media (max-width: 900px) {
    margin: 0px auto 25px auto;
    border-bottom: 2px solid #ffa00a;
  }
`;
export const SubmitButton = styled.button`
  color: #fff;
  background-color: #e50914;
  padding: 0.5em 1em;
  line-height: initial;
  width: fit-content;

  border: none;
  cursor: pointer;

  @media (max-width: 900px) {
    margin: auto;
  }

  &:hover {
    background-color: #e52914;
  }
`;
