import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TwitterPicker } from "react-color";

const Wrapper = styled.div`
    display: inline-block;
    width: calc(100vw - 260px);
`;

const TitleArea = styled.div`
    display: block;
    height: 19vh;
    width: 100vw;
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
        alert("ノートが作成されました");
    };
    render() {
        return (
            <Wrapper>
                <button onClick={this.addLabelForm}>new label</button>
                {this.state.visible_new_form && (
                    <form onSubmit={this.handleSubmit}>
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
                    </form>
                )}
                <TitleArea>Labels</TitleArea>
            </Wrapper>
        );
    }
}

export default Labels;
