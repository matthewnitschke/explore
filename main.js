const electron = require('electron')
const { app, BrowserWindow } = electron

let win

app.on('ready', () => {
    win = new BrowserWindow({
        title: app.getName(),
        width: 400,
        height: 400
    })
    win.loadURL(`file://${__dirname}/index.html`)
})