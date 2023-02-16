import styled from "styled-components";
import {device} from "./responsive";

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-top: 0;
  text-align: center;
`
export const WidgetTable = styled.table`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-radius: 1em;
  background: -webkit-linear-gradient(left, #3f51b5, #25b7c4);
  background: linear-gradient(to right, #3f51b5, #25b7c4);
  border-spacing: initial;
  table-layout: fixed;
`

export const WidgetHeaderTr = styled.tr`

`

export const WidgetContentTr = styled.tr`
  margin-top: 0px;
`



export const WidgetTh = styled.th`
  padding: 1vh 3vw;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  @media only screen and ${device.mobile} {
    font-size: 10px;
  }
`
export const WidgetTd = styled.td`
  padding: 2vh 2vw;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  @media only screen and ${device.mobile} {
    font-size: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`


export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(35, 35, 35, 0.96);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media only screen and ${device.mobile} {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px ;
  background-color: teal;
  color: white;
  cursor: pointer;

  @media only screen and ${device.mobile} {
    padding: 10px;
  }
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;
