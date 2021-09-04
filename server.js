const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  // const indexFile = await fs.readFile('index.html', 'utf8');
  // res.end('<h1>Welcome to My First Server</h1>');
  // res.end(indexFile);

  switch (req.url) {
    case '/': {
      const indexFile = await fs.readFile('index.html', 'utf8');
      res.end(indexFile);
      break;
    }
    case '/about': {
      const aboutFile = await fs.readFile('about.html', 'utf8');
      res.end(aboutFile);
      break;
    }
    case '/contactus': {
      const contactFile = await fs.readFile('contactus.html', 'utf8');
      res.end(contactFile);
      break;
    }
    case '/login': {
      const loginFile = await fs.readFile('login.html', 'utf8');
      res.end(loginFile);
      break;
    }
    case '/postlogin': {
      let body = '';
      req.on('data', chunck => {
        body += chunck.toString();
      });
      req.on('end', () => {
        console.log(body);
      });
      // case success login sent response to Home
      res.end('<h1>Home</h1>');
      // cass fail login sent to login page
      break;
    }
    default:
      res.end('404 Page Not Found');
  }
});

server.listen(9999, () => console.log('server running on port 9999'));
