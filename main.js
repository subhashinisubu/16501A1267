// function getfile(file,callback) {
//    var xhr = new XMLHttpRequest();
//    xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//  xhr.onreadystatechange = function(){
//       if(xhr.readyState === 4 && xhr.status == "200"){
//         callback(xhr.responseText);
//       }
//     };
//    xhr.send(null);
//  }
//  getfile("project.json",function(text){
//  var data = JSON.parse(text);
//  console.log(data);
//  })
function loadJSON(file){
return new Promise((resolve,reject)=>{
return fetch(file).then(response=>{
if(response.ok){
  resolve(response.json());
}else{
  reject(new Error('error'));
     }
})
})
}
var newFile=loadJSON("project.json");
newFile.then(project=>{
  console.log(project);
  career(project.career);
  education(project.education);
})
var childtwo=document.querySelector(".childtwo");
function career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Object";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=careerObj.info;
  childtwo.appendChild(p);
}
function education(edu){
  var careerHeading1=document.createElement("h2");
  careerHeading1.textContent="Education Qualifications";
  childtwo.appendChild(careerHeading1);
  var hr1=document.createElement("hr");
  careerHeading1.appendChild(hr1);
  for(var i=0;i<edu.length;i++){
  var eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
var eduUl=document.createElement("ul");
var eduLi=document.createElement("li");
eduLi.textContent=edu[i].institute;
eduUl.appendChild(eduLi);
childtwo.appendChild(eduUl);
var eduUl=document.createElement("ul");
var eduLi=document.createElement("li");
eduLi.textContent=edu[i].data;
eduUl.appendChild(eduLi);
childtwo.appendChild(eduUl);
  }
}
