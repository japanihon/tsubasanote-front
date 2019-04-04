import React from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  width: calc(100vw - 260px);
  height: 100vh;
`;

const TitleArea = styled.div`
  display: block;
  height: 19vh;
  width: 100vw;
`;
const TypeTitleArea = styled.textarea`
  display: inline-block;
  width: 50vw;
  margin-left: 65px;
  font-family: "Arial";
  font-size: 64px;
  border: none;
  ::placeholder {
    color: #dddddd;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 78px;
  font-family: "Arial";
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 40px;
  background-color: #f7eceb;
  color: #525872;
  position: absolute;
  top: 42px;
  right: 65px;
  cursor: pointer;
`;

const ContentArea = styled.textarea`
  display: block;
  height: 80vh;
  width: 75vw;
  margin-left: 65px;
  font-family: "Arial";
  font-size: 16px;
  border: none;
  ::placeholder {
    color: #dddddd;
  }
`;

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.get(`/notes/${this.props.match.params.id}`).then(res => {
      console.log(res);
      this.setState({
        title: res.data.title,
        content: res.data.content
      });
    });
  }

  handleTitleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleContentChange = event => {
    const content = event.target.value;
    this.setState({ content });
  };

  handleSubmit = event => {
    event.preventDefault();
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.patch(`/notes/${this.props.match.params.id}`, {
      title: this.state.title,
      content: this.state.content
    });
    alert("保存されました");
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <TitleArea>
            <TypeTitleArea
              type="title"
              name="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
              placeholder="Title here"
            />
          </TitleArea>
          <SubmitButton type="submit">Save</SubmitButton>
          <ContentArea
            type="content"
            name="content"
            value={this.state.content}
            onChange={this.handleContentChange}
            placeholder="text here"
          />
        </form>
      </Wrapper>
    );
  }
}

export default NoteEdit;
