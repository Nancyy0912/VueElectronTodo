const { contextBridge, ipcRenderer } = require('electron')
// Expose ipcRenderer to the client
 const API = {
   send: (msg) =>{
    console.log("send");
    ipcRenderer.send("message", msg)} ,
  
  receive: (channel, func) => {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  }


contextBridge.exposeInMainWorld("api",API)