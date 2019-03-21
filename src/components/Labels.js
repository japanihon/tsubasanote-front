import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SideBar from './SideBar.js'

const Wrapper = styled.div`
  display: inline-block;
  width: 80%;
  height: 100%;
`;
const Content = styled.div``;
const Label = styled.div`
  display: flex;
  padding: 0;
  width: 100%;
  height: 140px;
  border-top: 1px solid #aaaaaa;
`;
const Title = styled.h1`
  margin: 30px 0 30px 65px;
  font-family: 'Arial';
  font-size: 64px;
  color: #888888;
`;
const Name = styled.div`
  width: 100px;
  /* height: 14px; */
`;
const Description = styled.div`
  width: 100px;
  /* height: 14px; */
`;
const Edit = styled.div`
  width: 100px;
  /* height: 14px; */
`;
const Delete = styled.div`
  width: 100px;
  /* height: 14px; */
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
      baseURL: 'http://localhost:3000'
    })
    request.get('/labels')
      .then(res => {
        this.setState({
          labels: res.data
        });
      })
  }
  render() {
    console.log(this.state)
    const labels = this.state.labels.map(label => {
      return (
        <Label>
          <Name>
            {label.name}
          </Name>
          <Description>
            {label.description}
          </Description>
          <Edit>
            Edit
          </Edit>
          <Delete>
            Delete
          </Delete>
        </Label>
      );
    })
    return (
      <Wrapper >
        <Title>Labels</Title>
        <Content>
          {labels}
        </Content>
      </Wrapper>
    )
  }
}

export default Labels;