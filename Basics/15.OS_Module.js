/*

OS Module :  It is the nodejs inbuilt module, It provides operating system-related utility methods and properties. 

OS Module stands for Operating System Module.

OS Module is used whenever we working on a project where it needs the information about the user's operating system, then we use os module. E.g : To see user's system RAM, hostname, platform etc.

Practical Use : When a project requires that on different operating system(mac, ubantu, windows) our project should behave differently then we must use 'os' module, also to have these os information we use this.

It can be accessed using:
const os = require('node:os');






*/

const os = require('os');

// console.log(os);
console.log(os.arch()); //To see architecture i.e 32bit or 64bit i.e x64
console.log(os.freemem()/(1024*1024*1024)); //Ram free in user's system /here 1.86 GB free

console.log(os.totalmem()/(1024*1024*1024)); //Total Ram available at user's system.

console.log(os.hostname()) // DESKTOP-TRP64KJ
console.log(os.platform()) //win32 (window, mac, ubantu os)

console.log(os.userInfo()) // user's Info in object form
//   {
//     uid: -1,
//     gid: -1,
//     username: 'praka',
//     homedir: 'C:\\Users\\praka',
//     shell: null
//   }

console.log(os.cpus()) ;//