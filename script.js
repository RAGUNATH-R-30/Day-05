//1.Create your own resume data in JSON format?
let resume={
    "basics": {
      "name": "Ragunath R",
      "email": "123@gmail.com",
      "phone": "1234567890",
      "degree": "B.E",
      "location": {
        "address": "No16, Govindamal nagar,pathirikuppam",
        "postalCode": 607401,
        "city": "Cuddalore",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
    "education": [
      {
        "institution": "Jeppiaar Institute of Technology, Chennai ",
        "department": "Computer Science and Engineering",
        "studyType": "fulltime",
        "batch start year": 2019,
        "batch end year": 2023,
        "gpa": 8.8,
      }
    ],
    "skills": [
      {
        "languages": " C, Python,Dart, Firebase",
        "level": "beginner",
      }
    ],
    "Communication": [
      {
        "language": "Tamil,English",
      }
    ],
  }
console.log(resume)


//2.For the above JSON ,iterate over all for loops(for,for in,for of,forEach)
//For Loop
var resume_keys=Object.keys(resume)
for(var i = 0;i<resume_keys.length;i++){
    var key = resume_keys[i];
    console.log(resume[key])
}

//for-in Loop
  for(var i in resume){
    console.log(i,resume[i])
}

//For of
for(var i of Object.keys(resume)){
    console.log(i,resume[i])
}

//forEach Loop
Object.keys(resume).forEach((element)=>console.log(element,resume[element]))