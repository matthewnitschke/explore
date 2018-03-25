import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FileExplorer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let elements = this.props.files

        elements.sort((a, b) => {
            if (a.type == 'directory' && b.type == 'directory'){
                return 0
            } else if (a.type == 'directory' && b.type == 'file'){
                return -1
            } else if (a.type == 'file' && b.type == 'directory'){
                return 1
            }
        })

        elements = elements.map((f, i) => {
            return <div key={i} onClick={() => { this.props.onDirChange(f.path) }}>{f.name}</div>
        })

        return (
            <div>
                {elements}
            </div>
        )
    }
}

FileExplorer.propTypes = {
    files: PropTypes.array.isRequired
}