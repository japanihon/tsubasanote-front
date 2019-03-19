import React from 'react';
import SideBar from './SideBar.js';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    height: 100%;
    width: 80%;
`

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
      this.setState( {title: title} );
    }

    handleContentChange = event => {
      const content = event.target.value;
      this.setState( {content: content} );
      console.log(this.state.content);
    }

   handleSubmit = event => {
     event.preventDefault();
     const request = axios.create({
        baseURL: 'http://localhost:3000'
     })
     request.post('/notes', {
        title: this.state.title,
        content: this.state.content
     });
   }

    render() {
      return(
        <div>

          <Wrapper>
            <form onSubmit={this.handleSubmit}>
              <input type="title" name="title" value={this.state.title} onChange={this.handleTitleChange} />
              <input type="submit" value="create" />
              <input type="content" name="content" value={this.state.content} onChange={this.handleContentChange} />
            </form>
          </Wrapper>
        </div>
      );
    }
}

export default NoteNew;