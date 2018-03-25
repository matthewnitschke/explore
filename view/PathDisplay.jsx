import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PathDisplay extends Component {
    constructor(props){
        super(props)
    }

    onDirChange = (index) => {
        var path = this.props.currentDir.split('/').splice(0, index+1).join('/')
        console.log(path)
        this.props.onDirChange(path)
    }

    render() {
        let elements = this.props.currentDir.split('/').map((e, i) => {
            return <div key={i} onClick={() => { this.onDirChange(i) }}>{e}</div>
        })
        return (
            <div>
                {elements}
            </div>
        )
    }
}

PathDisplay.propTypes = {
    currentDir: PropTypes.string.isRequired
}