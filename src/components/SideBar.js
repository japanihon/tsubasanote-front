import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  display: inline-block;
  float: left;
  position: sticky;
  top: 0px;
  width: 20%;
  background: #545973;
  `
const Icon = styled.div`
  display: block;
  border: none;
  border-radius: 50%;
  height: 64px;
  width: 100%;
  padding: 30px 0 42px 0;
`
const IconImg = styled.img`
  float: left;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-left: 45px;
  background: white;
`

const NavArea = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`

const CreateButton = styled.button`
  height: 48px;
  width: 195px;
  font-family: 'Arial';
  font-size: 18px;
  font-weight: bold;
  border-radius: 40px;
  color: #525872;
  background-color: #F7ECEB;
`

const UlTop = styled.ul`
  list-style: none;
  font-family: 'Arial';
  font-size: 16px;
  margin: 25px 0 475px 35px;
` 

const UlBottom = styled.ul`
  list-style: none;
  font-family: 'Arial';
  font-size: 16px;
  margin: 0 0 48px 35px;
`

const Li = styled.li`
  margin: 15px 0;
  color: #FFFFFF;
`


class SideBar extends React.Component{
    constructor() {
      super();
    }
    render(){
      return(
        <Sidebar>
          <Icon>
            <IconImg src="" alt=""/>
          </Icon>
          <NavArea>
            <CreateButton>Create note</CreateButton>
          </NavArea>
            <UlTop>
              <Li>My services</Li>
              <Li>Schedule</Li>
              <Li>Completed</Li>
            </UlTop>
            <UlBottom>
              <Li>My account</Li>
              <Li>Support</Li>
              <Li>Sign out</Li>
            </UlBottom>
        </Sidebar>
      )
    };
}

export default SideBar;