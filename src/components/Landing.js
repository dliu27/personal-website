import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://www.levistrauss.com/wp-content/uploads/2020/05/Black_Box.png"
                            alt="avatar"
                            className="avatar-img">
        
                        </img>
                        <div className="banner-text">
                            <h1>David Liu</h1>
                            <hr></hr>
                            <h2>Full-Stack Web Developer</h2>
                            

                            <div className="social-links">
                                <div className="file">
                                    <a href="/Resume" rel="noopener noreferrer">
                                        <i className="fa fa-file-text" aria-hidden="true"></i>
                                    </a>
                                </div>

                                <a href="https://github.com/dliu27" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                
                                <a href="mailto:d285liu@uwaterloo.ca" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/dliu27/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Landing;