import React, { Component } from "react";
import "./Footer.css";
import {Image} from "semantic-ui-react";

class SharedFooter extends Component {
    render() {
        return (
            <footer>
                <Image src= "Images/logos.png" style={{
                    width: '814px',
                    height: '58.5px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '2em'}}/>
                <div>Copyright (C) 2020 University College London</div>
                <div>
                    Read our{" "}
                    <a href="https://github.com/AppertaFoundation/HoloRepository-2020">Source Code</a> and{" "}
                    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">Licence</a>
                </div>
            </footer>
        );
    }
}

export default SharedFooter;
