const fs=require('fs');
fs.readFile('input.txt','utf8',(err,data)=>{
    if (err) return console.log('file not found');


    data=data.trim();
    const lines=data.split('\n').length;
    const words=data.split('/\+s/'.length);
    fs.writeFile('output.txt',`Total Lines: ${lines}\nTotal Words: ${words}`, () => {
        console.log("Done");
    });
});


























