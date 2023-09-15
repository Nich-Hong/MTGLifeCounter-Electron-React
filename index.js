const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;
let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    icon: __dirname + "/src/img/phyrexian.png",
    height: 300,
    width: 350,
    minHeight: 300,
    minWidth: 250,
    maxHeight: 1000,
    maxWidth: 800,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: `${__dirname}/preload.js`,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/build/index.html`);

  mainWindow.on("closed", () => app.quit());
  mainWindow.setMenuBarVisibility(false);
});
