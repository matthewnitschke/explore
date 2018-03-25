import React, { Component } from 'react'

import fs, { lstatSync } from 'fs'
import path from 'path'

import FileList from './FileList.jsx'

export default class FileExplorer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDir: '/home/matthew/Desktop',
            files: []
        }

        this.getDirectoryFiles()
    }

    getDirectoryFiles = () => {
        fs.readdir(this.state.currentDir, (err, files) => {
            let fls = []

            for (var i in files){
                let file = files[i]

                let isDirectory = lstatSync(path.join(this.state.currentDir, file)).isDirectory()
                
                let type = isDirectory ? 'directory' : 'file'

                fls.push({
                    type: type,
                    name: file
                })
            }

            this.setState({
                files: fls
            })
        })
    }

    render() {
        return (
            <div>
                <FileList files={this.state.files} />
            </div>
        )
    }
}