import fs from "fs";

const appendFileSync = (file, data) => {
    try {
        fs.appendFileSync(file, data);
        console.log("File has been appended successfully...");
    } catch (error) {
        console.log("Some error occured...");
    }
}


const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, "utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read data");
    }
}

const writeFileSync = (file, data) => {
    try {
        fs.writeFileSync(file, data);
        console.log("File has been written successfully...");
    } catch (error) {
        console.log("Some error occured...");
    }
}
console.log(1);
writeFileSync("./example.txt",
    "this data has been written through sync func of fs module 1");
console.log(2);

console.log(3);
appendFileSync("./example.txt",
    "This data has been appended through sync function of fs");
console.log(4);

console.log(5);
readFileSync("./example.txt");
console.log(6);
