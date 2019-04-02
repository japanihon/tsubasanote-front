import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TwitterPicker } from "react-color";

const Wrapper = styled.div`
    display: inline-block;
    width: 80%;
    height: 100%;
`;
const Content = styled.div``;
const Label = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    height: 140px;
    border-top: 1px solid #aaaaaa;
    padding: 4px;
`;
const LabelContent = styled.div`
    display: flex;
    align-items: center;
`;
const LabelCommand = styled.div`
    display: flex;
    align-items: center;
`;
const Title = styled.h1`
    margin: 30px 0 30px 65px;
    font-family: "Arial";
    font-size: 64px;
    color: #888888;
`;
const Name = styled.div`
    display: flex;
    width: auto;
    height: auto;
    padding: 7px 10px;
    border-radius: 15px;
    color: ${props => props.fg_color};
    background: ${props => props.bg_color};
`;
const Description = styled.div`
    width: 100px;
    margin-left: 20px;
`;
const Edit = styled.div`
    width: 100px;
`;
const Delete = styled.div`
    width: 100px;
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

class Labels extends React.Component {
    constructor() {
        super();
        this.state = {
            labels: [],
            name: "",
            description: "",
            bg_color: "#ffffff",
            visible_new_form: false
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
        request.post("/labels", {
            name: this.state.name,
            description: this.state.description,
            bg_color: this.state.bg_color
        });
        this.setState({ name: "", description: "", visible_new_form: false });
        this.getLabels();
    };

    render() {
        const labels = this.state.labels.map(label => {
            return (
                <Label>
                    <LabelContent>
                        <Name
                            fg_color={label.fg_color}
                            bg_color={label.bg_color}
                        >
                            {label.name}
                        </Name>
                        <Description>{label.description}</Description>
                    </LabelContent>
                    <LabelCommand>
                        <Edit>Edit</Edit>
                        <Delete>Delete</Delete>
                    </LabelCommand>
                </Label>
            );
        });
        return (
            <Wrapper>
                <Title>Labels</Title>
                <Content>
                    <NewLabelArea>
                        <NewLabelButton onClick={this.addLabelForm}>
                            new label
                        </NewLabelButton>
                    </NewLabelArea>
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
                    {labels}
                </Content>
            </Wrapper>
        );
    }
}

export default Labels;
