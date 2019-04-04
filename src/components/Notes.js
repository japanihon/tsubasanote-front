import React from "react";
import SideBar from "./SideBar.js";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
<<<<<<< HEAD
    display: inline-block;
    height: 100vh;
    width: calc(100vw - 260px);
`;

const PageTitle = styled.h1`
    margin: 30px 0 30px 65px;
    font-family: "Arial";
    font-size: 64px;
    color: #888888;
`;

const BaseUl = styled.ul`
    margin: 0;
`;

const NoteUl = styled(BaseUl)`
    list-style: none;
    padding: 0;
    width: 100%;
`;

const NoteLi = styled.li`
    width: 100%;
    border-top: 1px solid #aaaaaa;
`;

const NoteTitle = styled.h2`
    margin: 30px 0 0 65px;
    font-family: "Arial";
    font-size: 18px;
    font-weight: bold;
    color: #888888;
`;

const NoteLink = styled.a`
    text-decoration: none;
    color: #888888;
`;

const NoteDate = styled.p`
    margin: 45px 0 0 65px;
    font-family: "Arial";
    font-size: 16px;
    color: #888888;
`;

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }
    componentDidMount() {
        const request = axios.create({
            baseURL: "http://localhost:3000"
        });
        request.get("/notes").then(res => {
            this.setState({
                notes: res.data
            });
        });
    }
    render() {
        console.log(this.state);
        const list = this.state.notes.map(note => {
            const date = new Date(note.created_at);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            console.log(day);
            return (
                <NoteLi key={note.id}>
                    <NoteTitle>
                        <NoteLink href={"/notes/" + note.id}>
                            {note.title}
                        </NoteLink>
                    </NoteTitle>
                    <NoteDate>
                        <i
                            className="fas fa-calendar-alt"
                            style={{ color: "#AAAAAA", marginRight: "15px" }}
                        />
                        {year}/{month}/{day}
                    </NoteDate>
                </NoteLi>
            );
        });

        return (
            <Wrapper>
                <PageTitle>つばさのーと</PageTitle>
                <NoteUl>{list}</NoteUl>
            </Wrapper>
        );
    }
=======
  display: inline-block;
  height: 100vh;
  width: calc(100vw - 260px);
`;

const PageTitle = styled.h1`
  margin: 30px 0 30px 65px;
  font-family: "Arial";
  font-size: 64px;
  color: #888888;
`;

const BaseUl = styled.ul`
  margin: 0;
`;

const NoteUl = styled(BaseUl)`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const NoteLi = styled.li`
  width: 100%;
  border-top: 1px solid #aaaaaa;
`;

const NoteTitle = styled.h2`
  margin: 30px 0 0 65px;
  font-family: "Arial";
  font-size: 18px;
  font-weight: bold;
  color: #888888;
`;

const NoteLink = styled.a`
  text-decoration: none;
  color: #888888;
`;

const NoteDate = styled.p`
  margin: 45px 0 0 65px;
  font-family: "Arial";
  font-size: 16px;
  color: #888888;
`;

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    const request = axios.create({
      baseURL: "http://localhost:3000"
    });
    request.get("/notes").then(res => {
      this.setState({
        notes: res.data
      });
    });
  }
  render() {
    console.log(this.state);
    const list = this.state.notes.map(note => {
      const date = new Date(note.created_at);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      console.log(day);
      return (
        <NoteLi key={note.id}>
          <NoteTitle>
            <NoteLink href={"/notes/" + note.id}>{note.title}</NoteLink>
          </NoteTitle>
          <NoteDate>
            <i
              className="fas fa-calendar-alt"
              style={{ color: "#AAAAAA", marginRight: "15px" }}
            />
            {year}/{month}/{day}
          </NoteDate>
        </NoteLi>
      );
    });

    return (
      <Wrapper>
        <PageTitle>つばさのーと</PageTitle>
        <NoteUl>{list}</NoteUl>
      </Wrapper>
    );
  }
>>>>>>> 27839bb52bcdba6efde4a53a268e1a766fbd32d8
}

export default Notes;
