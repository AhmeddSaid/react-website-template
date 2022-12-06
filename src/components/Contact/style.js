import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;

  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: normal;
`;

export const Form = styled.form`
  width: 70%;
  margin: auto;

  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`;

export const FormInputDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

export const FormInput = styled(Input)`
  width: 49%;

  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const Subject = styled(Input)`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`;

export const Submit = styled.input`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
`;
