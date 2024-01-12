
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { app, BrowserWindow } from 'electron';

let mainWindow;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

<<<<<<< HEAD
  // Load the index.html file
  mainWindow.loadFile('C:/Users/ADMIN/Documents/ADMIN ORDER/orders/index.html');

  // Open DevTools (remove this line in production)
  mainWindow.webContents.openDevTools();

  // Event handler when the window is closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
=======
async function createMainWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 1000 });
  try {
      await mainWindow.loadFile(`${__dirname}/orders/dashboard.html`);
  } catch (error) {
      console.error('Error loading file:', error.message);
  }
>>>>>>> 88e33fafef7e308e67ad5bb6ef7ce13b04109609
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();
      }
  });
});





app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});