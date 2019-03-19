import React from "react";
import axios from "axios";
import styled from "styled-components";

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  conponentDidMount() {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.get(`/notes/${this.props.match.params.id}`).then(res => {
      this.setState({
        title: res.data.title,
        content: res.data.content
      });
    });
    console.log(this.state.title);
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
    request.patch(`/notes/${this.props.match.params.id}/edit`, {
      title: this.state.title,
      content: this.state.content
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="title"
          name="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="content"
          name="content"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
        <input type="submit" value="create" />
      </form>
    );
  }
}

export default NoteEdit;
