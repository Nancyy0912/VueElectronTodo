const { contextBridge, ipcRenderer } = require('electron')
// Expose ipcRenderer to the client
 const API = {
   send: (msg) =>{
    console.log("send");
    ipcRenderer.send("message", msg),
    ipcRenderer.send("closeTaskForm", msg)} ,
    
  
  receive: (channel, func) => {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    },
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  }


contextBridge.exposeInMainWorld("api",API)