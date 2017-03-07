"use strict";
module.exports = function(app){

  //---------------------Page redirections----------------------------------------//
  app.get('/login', function(req, res){
    res.render('login', {});
  });
  app.get('/signup', function(req, res){
    res.render('signup', {});
  });
  app.get('/', function(req, res){
    res.render('index', {});
  });
  app.get('/home', function(req, res){
    res.render('templates/home', {});
  });
  app.get('/demomenu1', function(req, res){
    res.render('templates/DemoMenu1', {});
  });




  //-----------------------Handled by Controllers------------------------------------//
  // app.post('/doLogin',loginCtrl.doLogin);
  // app.post('/doSignup',loginCtrl.doSignup);
  // app.get('/getHistory',copyPasteCtrl.getHistory);
};
