// timer to open file and read contents to http resposne

function on_OpenAndReadFile(filename,res){
    console.log('opening ' + filename);
    // open and reads the file name method 
    fs.readFile(filename,'utf-8', function(err,data){
        if(err)
        res.write('Could not find or open file for reading \n')

    });
}