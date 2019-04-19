import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TwitterPicker } from "react-color";
import spinner from "./spinner.gif";

const Wrapper = styled.div`
  display: inline-block;
  width: calc(100vw - 260px);
`;

const Container = styled.div`
  display: block;
  padding-top: 50px;
  width: 50vw;
  margin: 0 auto;
`;
const TitleArea = styled.div`
  display: block;
  height: 19vh;
  width: 100vw;
`;

const NewLabelArea = styled.div`
  display: block;
  padding-bottom: 20px;
`;

const NewLabelButton = styled.button`
  padding: 6px 12px;
  float: right;
  font-size: 14px;
  background-color: #28a745;
  border-color: rgba(27, 31, 35, 0.5);
  color: #ffffff;
  border-radius: 0.25em;
`;

const NewLabelForm = styled.form`
  width: 100vw;
  display: block;
`;

const Loading = styled.img``;

class Labels extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      name: "",
      description: "",
      bg_color: "#ffffff",
      visible_new_form: false,
      loading: true
    };
  }
  componentDidMount() {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.get("/labels").then(res => {
      this.setState({
        labels: res.data,
        loading: false
      });
    });
  }

  addLabelForm = () => {
    this.setState({ visible_new_form: !this.state.visible_new_form });
  };

  hideForm = () => {
    this.setState({ visible_new_form: false });
  };

  handleNameChange = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };

  handleChangeComplete = color => {
    this.setState({ bg_color: color.hex });
  };

  getLabels() {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.get("/labels").then(res => {
      this.setState({ labels: res.data });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.post("/labels", {
      name: this.state.name,
      description: this.state.description,
      bg_color: this.state.bg_color
    });
    this.setState({ name: "", description: "", visible_new_form: false });
    this.getLabels();
  };

  render() {
    const label = this.state.labels.map(label => {
      return <li>{label.name}</li>;
    });
    return (
      <Wrapper>
        <Container>
          <NewLabelArea>
            <NewLabelButton onClick={this.addLabelForm}>
              new label
            </NewLabelButton>
          </NewLabelArea>
          {this.state.loading && <Loading src={spinner} />}
          {this.state.visible_new_form && (
            <NewLabelForm onSubmit={this.handleSubmit}>
              <div>
                <span style={{ color: this.state.bg_color }}>
                  Label preview
                </span>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
                <button onClick={this.hideForm}>Cancel</button>
                <input type="submit" value="Create label" />
              </div>
              <p style={{ color: this.state.bg_color }}>
                ラベル一覧
                <TwitterPicker
                  color={this.state.bg_color}
                  onChangeComplete={this.handleChangeComplete}
                />
              </p>
            </NewLabelForm>
          )}
          {label}
        </Container>
      </Wrapper>
    );
  }
}

export default Labels;
