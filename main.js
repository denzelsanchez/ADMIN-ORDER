
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { app, BrowserWindow } from 'electron';

let mainWindow;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createMainWindow() {
  mainWindow = new BrowserWindow({ width: 1000, height: 1000 });
  try {
      await mainWindow.loadFile(`${__dirname}/orders/orders.html`);
  } catch (error) {
      console.error('Error loading file:', error.message);
  }
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