import React, { Component } from 'react'
import ProjectItem from "./Project/ProjectItem"
import Header from "./Layout/Header"
import CreateButtom from './Project/CreateButtom';

 class Dashboard extends Component {
    render() {
        return (
            <div>
               
             
                <CreateButtom />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
    
            </div>
        )
    }
}
export default Dashboard;
