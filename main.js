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
  skills(project.skills);
  Acheivements(project.Acheivements);

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
  function skills(skillinfo){
    var careerHeading2=document.createElement("h2");
    careerHeading2.textContent="Technical Skills";
    childtwo.appendChild(careerHeading2);
    var hr2=document.createElement("hr");
    careerHeading2.appendChild(hr2);
    var skillTable=document.createElement("table");
    skillTable.border="5";
    childtwo.appendChild(skillTable);
    var tableData="";
    for(i=0;i<skillinfo.length;i++)
    {
      tableData+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
          }
      skillTable.innerHTML=tableData;
  }
  function Acheivements(acheivementinfo){
    var careerHeading3=document.createElement("h2");
    careerHeading3.textContent="Acheivements";
    childtwo.appendChild(careerHeading3);
    var hr3=document.createElement("hr");
    careerHeading3.appendChild(hr3);
    var AcheivementsTable=document.createElement("table");
    AcheivementsTable.border="5";
    childtwo.appendChild(AcheivementsTable);
    var tableData="";
    for(i=0;i<acheivementinfo.length;i++)
    {
      tableData+="<tr><td>"+acheivementinfo[i].name+"</td><td>"+acheivementinfo[i].Venue+"</td><td>"+acheivementinfo[i].Year+"</td><td>"+acheivementinfo[i].place+"</td></tr>";
          }
      AcheivementsTable.innerHTML=tableData;
  }
