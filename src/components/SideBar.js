import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  display: inline-block;
  float: left;
  height: 100vh;
  width: 260px;
  background: #545973;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
`;
const Icon = styled.div`
  display: block;
  border: none;
  border-radius: 50%;
  height: 64px;
  width: 100%;
  padding: 30px 0 42px 0;
`;
const IconImg = styled.img`
  float: left;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-left: 45px;
  background: white;
`;

const NavArea = styled.div`
  width: 100%;
  text-align: center;
`;

const CreateButton = styled.a`
  padding: 15px 48px;
  font-family: "Arial";
  font-size: 18px;
  font-weight: bold;
  border-radius: 40px;
  color: #525872;
  background-color: #f7eceb;
  text-decoration: none;
`;

const UlTop = styled.ul`
  padding-top: 5px;
  list-style: none;
  font-family: "Arial";
  font-size: 16px;
  color: #ffffff;
`;

const UlBottom = styled.ul`
  list-style: none;
  font-family: "Arial";
  font-size: 16px;
  position: absolute;
  bottom: 50px;
  color: #ffffff;
`;

const Li = styled.li`
  margin: 15px;
`;

class SideBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Sidebar>
        <Icon>
          <a href="/">
            <IconImg src="" alt="" />
          </a>
        </Icon>
        <NavArea>
          <CreateButton href="/notes/new">Create note</CreateButton>
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
    );
  }
}

export default SideBar;
