import React from 'react';

class SideBar extends React.Component{
    constructor(props) {
      super(props);
    }
    render(){
      return(
        <div className="sidebar">
          <div className="sidebar-icon">
            <img src="" alt=""/>
          </div>
          <button className="sidebar-button__create">Create note</button>
          <ul className="sidebar-list__top">
            <li>My services</li>
            <li>Schedule</li>
            <li>Completed</li>
          </ul>
          <ul className="sidebar-list__bottom">
            <li>My account</li>
            <li>Support</li>
            <li>Sign out</li>
          </ul>
        </div>
      )
    };
}

export default SideBar;