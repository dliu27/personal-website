import React, { Component } from 'react';
import {Tab, Tabs, Card, CardTitle, Grid, Cell, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
              <div className="projects1-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '1000px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '400px', background: 'url(/proj1.png) center / cover'}} >dliu27 Portfolio Website</CardTitle>

                  <CardText>
                  A personal portfolio website using create-react-app, react-router, and react-MDL to show off my website and resume.
                  </CardText>
                    <CardActions border>
                      
                    <a href="https://github.com/dliu27/personal-website">
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://dliu27.herokuapp.com/">
                      <Button colored>Live Demo</Button>
                    </a>

                    </CardActions>
                </Card>              
              </div>
              
            )
          } else if(this.state.activeTab === 1) {
            return (
              <div className="projects2-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '1000px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '400px', background: 'url(/proj2.png) center / cover'}} >Somebody Call 911</CardTitle>

                  <CardText>
                    A Full-Stack web application using Node, Express, Bootstrap to automate a 911 call in emergency situations.
                  </CardText>
                    <CardActions border>
                      
                    <a href="https://github.com/timhyc19/scemergency">
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://salty-forest-73813.herokuapp.com/">
                      <Button colored>Live Demo</Button>
                    </a>

                    </CardActions>
                </Card>              
              </div>
            )
          } else if(this.state.activeTab === 2) {
            return (
              <div className="projects1-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '1000px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '400px', background: 'url(/proj3.png) center / cover'}} >Productivity++</CardTitle>

                  <CardText>
                    A custom version of Momentum from scratch as a Chrome Extension due to lack of feature extensibility
                  </CardText>
                    <CardActions border>
                      
                    <a href="https://github.com/dliu27/productivity">
                      <Button colored>GitHub</Button>
                    </a>
                    <a href="https://github.com/dliu27/productivity">
                      <Button colored>Live Demo</Button>
                    </a>

                    </CardActions>
                </Card>              
              </div>
            )
          }
        }
      
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="react">React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Vanilla JS</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Projects;