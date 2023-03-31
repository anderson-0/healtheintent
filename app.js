const { auth } = require('./middleware/auth');
const express = require('express');
const app = require('express')(); 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
app.use(auth)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes')(app);
module.exports = app;