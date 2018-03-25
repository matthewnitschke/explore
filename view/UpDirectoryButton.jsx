import React, { Component } from 'react'
import PropTypes from 'prop-types'

import path from 'path'

class UpDirectoryButton extends Component {
    constructor(props){
        super(props)
    }

    onClick = () => {
        this.props.onDirChange(path.join(this.props.currentDir, '../'))
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    {this.props.text}
                </button>
            </div>
        )
    }
}

UpDirectoryButton.propTypes = {
    text: PropTypes.string,
    currentDir: PropTypes.string.isRequired,
    onDirChange: PropTypes.func.isRequired,
}

UpDirectoryButton.defaultProps = {
    text: 'Up'
}

export default UpDirectoryButton