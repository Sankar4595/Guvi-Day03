// 1. For the given JSON literate over all for loops(for,for in, forEadh)
var student = [{
    "Name" : "Sankar",
    "Age" : "28",
    "Address" : "San fransico",
    "Id" : "12248120"
}]

//JSON For loop

for(let i=0;i<student.length;i++){
    console.log(student[i]);
}

//JSON forin loop

for(let j in student){
    console.log(student[j]);
}
