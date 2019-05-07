import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TwitterPicker } from "react-color";

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
  margin-top: 50px;
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
  display: block;
  background-color: #fafbfc;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin-top: 50px;
  margin-bottom: 15px;
  padding: 10px;
`;

const LabelPreviewArea = styled.div`
  display: block;
  padding: 10px;
`;

const LabelPreview = styled.span`
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  padding: 5px 8px;
  color: #ffffff;
`;

class Labels extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      name: "",
      description: "",
      bg_color: "#FF6900",
      visible_new_form: false,
      visible_edit_form: false
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
    request
      .post("/labels", {
        name: this.state.name,
        description: this.state.description,
        bg_color: this.state.bg_color
      })
      .then(() => {
        this.getLabels();
        this.setState({ name: "", description: "", visible_new_form: false });
      });
  };

  deleteLabel = id => {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request
      .delete(`/labels/${id}`)
      .then(() => {
        const labels = this.state.labels.filter(label => id !== label.id);
        this.setState({ labels });
      })
      .catch(() => {
        alert("削除に失敗しました");
      });
  };
  editLabel = id => {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    this.setState({ visible_edit_form: true });
  };
  closeForm = () => {
    this.setState({ visible_edit_form: false });
  };

  render() {
    const label = this.state.labels.map(label => {
      return (
        <div>
          <li>{label.name}</li>
          <span
            onClick={() => {
              this.deleteLabel(label.id);
            }}
          >
            削除
          </span>
          <span
            onClick={() => {
              this.editLabel(label.id);
            }}
          >
            編集
          </span>
          {this.state.visible_edit_form && (
            <form onSubmit={this.handleEditSubmit}>
              <input type="text" name="name" value={this.state.name} />
              <span
                onClick={() => {
                  this.closeForm();
                }}
              >
                CANSEL
              </span>
            </form>
          )}
        </div>
      );
    });
    return (
      <Wrapper>
        <Container>
          <NewLabelArea>
            <NewLabelButton onClick={this.addLabelForm}>
              new label
            </NewLabelButton>
          </NewLabelArea>
          {this.state.visible_new_form && (
            <NewLabelForm onSubmit={this.handleSubmit}>
              <LabelPreviewArea>
                <LabelPreview style={{ background: this.state.bg_color }}>
                  Label preview
                </LabelPreview>
              </LabelPreviewArea>
              <TwitterPicker
                color={this.state.bg_color}
                onChangeComplete={this.handleChangeComplete}
              />
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
            </NewLabelForm>
          )}
          {label}
        </Container>
      </Wrapper>
    );
  }
}

export default Labels;
