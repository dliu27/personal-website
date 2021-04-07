import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <iframe 
                src="David_Liu_Resume.pdf"
                scrolling="auto"
                height="100%"
                width="100%"
            ></iframe>
            </div>
        )
    }
}

export default Resume;