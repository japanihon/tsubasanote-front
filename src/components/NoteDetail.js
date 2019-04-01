import React from "react";
import SideBar from "./SideBar.js";
import axios from "axios";
import styled from "styled-components";
import { Z_BLOCK } from "zlib";

const Wrapper = styled.div`
    display: inline-block;
    height: 100%;
    width: 80%;
`;
const TitleArea = styled.div`
    display: inline-flex;
    width: 100%;
    border-bottom: 1px solid #aaaaaa;
`;

const NoteTitle = styled.h1`
    margin: 30px 0 30px 65px;
    width: 80vw;
    font-family: "Arial";
    font-size: 64px;
    color: #888888;
`;

const NoteDate = styled.p`
    margin-top: 75px;
    margin-right: 20px;
    display: inline-flex;
    font-family: "Arial";
    font-size: 16px;
    color: #888888;
`;

const NoteContentArea = styled.div`
    display: block;
    margin-top: 30px;
    width: 100%;
    font-family: "Arial";
    font-size: 16px;
    color: #aaaaaa;
    margin-left: 65px;
`;

const NoteContent = styled.p`
    width: 95%;
    line-height: 32px;
`;

class NoteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            created_at: ""
        };
    }
    componentDidMount() {
        const request = axios.create({
            baseURL: "http://localhost:3000"
        });
        request.get(`/notes/${this.props.match.params.id}`).then(res => {
            this.setState({
                title: res.data.title,
                content: res.data.content,
                created_at: res.data.created_at
            });
        });
    }
    render() {
        const date = new Date(this.state.created_at);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (
            <div>
                <Wrapper>
                    <TitleArea>
                        <NoteTitle>{this.state.title}</NoteTitle>
                        <NoteDate>
                            <i
                                className="fas fa-calendar-alt"
                                style={{
                                    color: "#AAAAAA",
                                    marginRight: "15px"
                                }}
                            />
                            {year}/{month}/{day}
                        </NoteDate>
                    </TitleArea>
                    <NoteContentArea>
                        <NoteContent>{this.state.content}</NoteContent>
                    </NoteContentArea>
                </Wrapper>
            </div>
        );
    }
}

export default NoteDetail;
