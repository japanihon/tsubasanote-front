import React from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  height: 100vh;
  width: calc(100vw - 260px);
`;

const TitleArea = styled.div`
  display: block;
  height: 20vh;
  border-bottom: 1px solid #dddddd;
`;

const TypeTitleArea = styled.textarea`
  display: inline-block;
  width: 60vw;
  height: 81%;
  font-family: "Arial";
  font-size: 64px;
  border: none;
  margin-left: 65px;
  margin-top: 30px;
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
  height: calc(100% - 21vh);
  width: 80%;
  font-family: "Arial";
  font-size: 16px;
  border: none;
  margin: 0 65px;
  ::placeholder {
    color: #dddddd;
  }
`;

class NoteNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleTitleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleContentChange = event => {
    const content = event.target.value;
    this.setState({ content: content });
    console.log(this.state.content);
  };

  handleSubmit = event => {
    event.preventDefault();
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request
      .post("/notes", {
        title: this.state.title,
        content: this.state.content
      })
      .then(() => {
        alert("ノートが作成されました");
      })
      .catch(() => {
        alert("ノートの作成に失敗しました");
      });
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
            <SubmitButton type="submit">Save</SubmitButton>
          </TitleArea>
        </form>
        <ContentArea
          type="content"
          name="content"
          value={this.state.content}
          onChange={this.handleContentChange}
          placeholder="text here"
        />
      </Wrapper>
    );
  }
}

export default NoteNew;
