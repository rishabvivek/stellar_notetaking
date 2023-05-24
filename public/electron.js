// Modules to control application life and create native browser window
const {app, BrowserWindow, screen, ipcMain} = require('electron');
const path = require('path');
const { start } = require('repl');


function startPage() {
  const {w, h} = screen.getPrimaryDisplay().workAreaSize

  const fontSize = Math.floor(Math.min(w, h) * 0.03);


  const startWindow = new BrowserWindow({
    width: w,
    height: h,
    frame:false,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    show: false // add show option
  });
  startWindow.loadURL('http://localhost:3000')
  startWindow.webContents.openDevTools();
  startWindow.once('ready-to-show', () => { // wait for the window to be ready before maximizing
    startWindow.maximize();
    startWindow.show();

    // set font size for title

    setInterval(() => {
      const now = new Date();
      if (now.getHours() === 8 && now.getMinutes() === 0) {
        if (startWindow && !startWindow.isDestroyed()) {
          startWindow.webContents.reload();
        }
      }
    }, 60000);


  });



  
}

ipcMain.on('mainWindow', () => {

  const focusedWindow = BrowserWindow.getFocusedWindow();
  if (focusedWindow) {
    focusedWindow.loadFile('main.html');
  }
    
});


app.whenReady().then(startPage);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    
    if (BrowserWindow.getAllWindows().length === 0) {
      startPage()
    }
  })



