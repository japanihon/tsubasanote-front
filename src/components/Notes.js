import React from 'react';
import SideBar from './SideBar.js';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div` 
    display: inline-block;
    height: 100%;
    width: 80%;
`

const PageTitle = styled.h1`
    margin: 30px 0 30px 65px;
    font-family: 'Arial';
    font-size: 64px;
    color: #888888;
`
const NoteUl = styled.ul`
    list-style: none;
    padding: 0;
    height: 100%;
    width: 100%;
`

const NoteLi = styled.li`
    height: 140px;
    width: 100%;
    border-top: 1px solid #AAAAAA;
`
const NoteTitle = styled.h2`
    margin: 30px 0 0 65px;
    font-family: 'Arial';
    font-size: 18px;
    font-weight: bold;
    color: #888888;
`
const NoteDate = styled.p`
    margin: 45px 0 0 65px;
    font-family: 'Arial';
    font-size: 16px;
    color: #888888;
`

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }
     componentDidMount() {
         const request = axios.create({
             baseURL: 'http://localhost:3000'
         })
         request.get('/notes')
             .then(res => {
                 this.setState({
                     notes:res.data
                 });
             })
     }
    render() {
         console.log(this.state);
         const list =this.state.notes.map(note => {
             return (
                 <NoteLi className={note.id}>
                     <NoteTitle>{note.title}</NoteTitle>
                     <NoteDate>{note.created_at}</NoteDate>
                 </NoteLi>
             );
         });

        return (
            <div>
                <SideBar />
                <Wrapper>
                    <PageTitle>つばさのーと</PageTitle>
                    <NoteUl>
                        {list}
                    </NoteUl>
                </Wrapper>
            </div>
        )
    }
}



export default Notes;
