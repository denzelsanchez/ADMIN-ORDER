const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  // Create the main window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html file
  mainWindow.loadFile('C:/Users/ADMIN/Documents/ADMIN ORDER/orders/index.html');

  // Open DevTools (remove this line in production)
  mainWindow.webContents.openDevTools();

  // Event handler when the window is closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Event handler when the app is ready
app.whenReady().then(createWindow);

// Event handler for macOS when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Event handler when the app is activated (e.g., clicked on the dock on macOS)
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});