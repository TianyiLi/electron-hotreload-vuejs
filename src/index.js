'use strict';
const { app, BrowserWindow } = require('electron')
const ipcPromise = require('ipc-promise');
const ini = require('node-ini')
console.log(__dirname)
ini.parse(`${__dirname}/../config.ini`, (err, data) => {
    console.log(typeof data)
    console.log(data)
    !!data.develope.on && require('electron-reload')(__dirname, {
        electron: require('electron-prebuilt')
    });
})

app.on('ready', () => {
    let [width, height] = [800, 600]
    let mainWindow = new BrowserWindow({ width, height })

    mainWindow.loadURL('file://' + __dirname + '/index.html')
    mainWindow.webContents.openDevTools()
})