import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <iframe 
                src="resume.pdf"
                scrolling="auto"
                height="100%"
                width="100%"
            ></iframe>
            </div>
        )
    }
}

export default Resume;
