const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;
// const projectJson = JSON.parse("/data/json/project.json");
var cors = require("cors");
var fs = require("fs"),
    json;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'website/build')));

// Handle other routes and serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'website/build', 'index.html'));
});

function getJsonFile(file){
  var filepath = __dirname + '/' + file;
  if (typeof (encoding) == 'undefined'){
    encoding = 'utf8';
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

var projJson = getJsonFile("/data/json/project.json");
const keys = Object.keys(projJson);


app.get("/projects/:id", (req,res) => {
  var projName;
  for (const key of keys) {
    const value = projJson[key];
    if (value['id'] == req.params.id) {
      projName = value['projectName'];
      break
    }
  }
  fs.readFile(`./data/md/${projName}.md`, "utf-8", (err, result) => {
    res.send(result);
 });
})

// app.get("/projects/PROJECT-5", (req,res) => {
//   fs.readFile("./data/md/The Image ratio distortion on zoom for 200%.md", "utf-8", (err, result) => {
//     res.send(result);
//  });
// })

// app.get("/projects/PROJECT-6", (req,res) => {
//   fs.readFile("./data/md/NVDA plugin to store the spoken history on a text.md", "utf-8", (err, result) => {
//     res.send(result);
//  });
// })

// app.get("/projects/PROJECT-7", (req,res) => {
//   fs.readFile("./data/md/Vlookup Implementation.md", "utf-8", (err, result) => {
//     res.send(result);
//  });
// })

// app.get("/projects/PROJECT-8", (req,res) => {
//   fs.readFile("./data/md/Search Engine Results.md", "utf-8", (err, result) => {
//     res.send(result);
//  });
// })

// app.get("/projects/PROJECT-9", (req,res) => {
//   fs.readFile("./data/md/Visual Search.md", "utf-8", (err, result) => {
//     res.send(result);
//  });
// })

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
