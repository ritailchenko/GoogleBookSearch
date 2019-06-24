import React, { Component } from 'react';
import SavedGallery from '../SavedGallery';
import Logo from "../Logo";

class SavedGlobal extends Component {
    render() {
        return (
            <div className = "global">
                <Logo />
                <SavedGallery />
            </div>
        )
    }
}

export default SavedGlobal;
