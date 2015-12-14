var app = require('app'),
    browserWindow = require('browser-window');

app.on('ready',function(){
  var mainWindow = new browserWindow({
    width: 700,
    height: 500,
    'title': 'Social chat',
    'node-integration': false
  });

  mainWindow.loadURL('http://web.whatsapp.com',{
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25'
  });
  mainWindow.show();
  //mainWindow.openDevTools();
})
