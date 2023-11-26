const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const allrouter = require('./router/Routers')

const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static('public'))

var methodOverride = require('method-override')
app.use(methodOverride('_method'))
// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
const { userInfo } = require("os");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// end 


app.use( allrouter)

// اتصال ب mongo db

mongoose
  .connect(
    "mongodb+srv://yahyax:ZhkJ9ORt1OUpe762@cluster0.awqwdiy.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) =>{
    console.log(err);
  });
  // انتهاء اتصال
 