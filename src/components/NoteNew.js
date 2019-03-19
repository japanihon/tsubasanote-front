import React from "react";
import SideBar from "./SideBar.js";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    height: 100%;
    width: 80%;
`;

const TitleArea = styled.textarea`
    display: inline-block;
    margin-left: 65px;
    font-family: "Arial";
    font-size: 64px;
    border: none;
    ::placeholder {
        padding-top: 15px;
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
    margin-top: 15px;
    height: 100vh;
    width: 75vw;
    margin-left: 65px;
    font-family: "Arial";
    font-size: 16px;
    border: none;
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
        request.post("/notes", {
            title: this.state.title,
            content: this.state.content
        });
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <form onSubmit={this.handleSubmit}>
                        <TitleArea
                            type="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            placeholder="Title here"
                        />
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
            </div>
        );
    }
}

export default NoteNew;
