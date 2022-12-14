function to_slash(input) {
    var p = input.replace(/\\/g, "/");
    return p;
}

var input = String(process.argv.slice(2));
console.log(to_slash(input));
