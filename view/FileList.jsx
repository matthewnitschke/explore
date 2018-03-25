import React, { Component } from 'react'

export default class FileExplorer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let directories = this.props.files
        .filter(f => {
            return f.type == 'directory'
        }).map((f, i) => {
            return <div key={i}>{f.name}</div>
        })

        let files = this.props.files
        .filter(f => {
            return f.type == 'file'
        }).map((f, i) => {
            return <div key={i}>{f.name}</div>
        })

        return (
            <div>
                {directories}
                {files}
            </div>
        )
    }
}