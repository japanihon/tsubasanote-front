import React from "react";
import axios from "axios";
import styled from "styled-components";
import SideBar from "./SideBar.js";

const Wrapper = styled.div `
    display: inline-block;
    width: 80%;
    height: 100%;
`;
const Content = styled.div ``;
const Label = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    height: 140px;
    border-top: 1px solid #aaaaaa;
    padding: 4px;
`;
const LabelContent = styled.div `
  display: flex;
  align-items: center;
`;
const LabelCommand = styled.div `
  display: flex;
  align-items: center;
`;
const Title = styled.h1 `
    margin: 30px 0 30px 65px;
    font-family: "Arial";
    font-size: 64px;
    color: #888888;
`;
const Name = styled.div `
    display: flex;
    width: auto;
    height: auto;
    padding: 7px 10px;
    border-radius: 15px;
    color: ${props => props.fg_color};
    background: ${props => props.bg_color};
`;
const Description = styled.div `
    width: 100px;
    margin-left: 20px;
`;
const Edit = styled.div `
    width: 100px;
`;
const Delete = styled.div `
    width: 100px;
`;


class Labels extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: []
    };
  }
  componentDidMount() {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.get("/labels").then(res => {
      this.setState({
        labels: res.data
      });
    });
  }
  render() {
    console.log(this.state);
    const labels = this.state.labels.map(label => {
      return (
        <Label>
          <LabelContent>
            <Name fg_color = {label.fg_color} bg_color = {label.bg_color}>
              {label.name}
            </Name>
            <Description>
              {label.description}
            </Description>
          </LabelContent>
          <LabelCommand>
            <Edit>Edit</Edit> 
            <Delete>Delete</Delete>
          </LabelCommand > 
        </Label>
      );
    });
    return (
      <Wrapper>
      <Title>Labels</Title>
      <Content >
        {labels}
      </Content>
      </Wrapper>
    );
  }
}

export default Labels;
