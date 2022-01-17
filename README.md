# Express React Template
A template for Express and React on the same server. [Demo](https://express-react-template.glitch.me).

### Getting started
Just copy the source:
```bash
git clone https://github.com/codingjlu/express-react-template.git
```
Then run the following commands one by one:
```bash
cd express-react-template
npm install
cd client
npm install
cd ..
npm run dev
```
Every time you save a file the server will be restarted (with `nodemon`).

### Editing
#### Frontend
The frontend is made with React, React Router, and Styled Components.
You can edit everything in `/client/src/` where `index.js` is the main file.
To customize the HTML output file by editing `/client/template.html`.

You can install more packages inside `/client/`.

#### Backend
The bare bones of an Express server with `body-parser` built-in.
Edit however you like.

### Production
Run the following to build:
```bash
npm run build
```
And start the server with:
```bash
npm start
```
