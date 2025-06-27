/*
Path Module : It is the nodejs inbuilt module to work with file directories and file paths in our nodejs project.

The Path module provides a way of working with directories and file paths.


Path Properties and Methods : -


basename()	Returns the last part of a path
delimiter	Returns the delimiter specified for the platform
dirname()	Returns the directories of a path
extname()	Returns the file extension of a path
format()	Formats a path object into a path string
isAbsolute()	Returns true if a path is an absolute path, otherwise false
join()	Joins the specified paths into one
normalize()	Normalizes the specified path
parse()	Formats a path string into a path object
posix	Returns an object containing POSIX specific properties and methods
relative()	Returns the relative path from one specified path to another specified path
resolve()	Resolves the specified paths into an absolute path
sep	Returns the segment separator specified for the platform
win32	Returns an object containing Windows specific properties and methods

Example : Extract the filename from a file path -

    var path = require('path');
    var filename = path.basename('/Users/Refsnes/demo_path.js');
    console.log(filename);






*/