
const {exec} = require('child_process')

const command = 'git branch'
const handle = ((err,stdout,stderr)=>{
    console.log(stdout)})
//forma #1
exec('git branch',(err,stdout,stderr)=>{
    console.log(stdout)})
//forma #2
exec(command,handle)
//forma #3
exec('git branch', function (err, stdout, stderr){
    console.log(stdout);
})     