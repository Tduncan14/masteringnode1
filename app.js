// to load logger module use the require built with node
 var logger =require('./logger.js');
 console.log(logger);
//or you can make it shorter require('./logger');

// if it was in a subfolder you use require('./subFolder/logger);

logger.log('Treek keep moving forward');

console.log(module);

// in node every file is module that needed to export the variables and files found in this module is only in the scope of this module
//creating 