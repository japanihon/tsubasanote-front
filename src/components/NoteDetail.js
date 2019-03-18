import React from 'react';
import SideBar from './SideBar.js'
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    height: 100%;
    width: 80%;
`
const TitleArea = styled.div`
    display: block;
    width: 100%;
    border-bottom: 1px solid #AAAAAA;
`

const NoteTitle = styled.h1`
    margin: 30px 0 30px 65px;
    width: 95%;
    font-family: 'Arial';
    font-size: 64px;
    color: #888888;
`

const NoteContentArea = styled.div`
    display: block;
    margin-top: 30px;
    width: 100%;
    font-family: 'Arial';
    font-size: 16px;
    color: #AAAAAA;
    margin-left: 65px;

`

const NoteContent = styled.p`
    width: 95%;
    line-height: 32px;

`

class NoteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }
    componentDidMount() {
        const request = axios.create({
            baseURL: 'http://localhost:3000'
        })
        request.get(`/notes/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    content: res.data.content
                });
            })
    }
    render() {
        return(
            <div>
                <SideBar />
                <Wrapper>
                    <TitleArea>
                        <NoteTitle>{this.state.title}</NoteTitle>
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