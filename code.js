// Code goes here
var a = [8,2,10,5,1,6,11,15,9,8,10];
//array before sorting
document.write("original array<br>"+a);

//array after sort
document.write("<br><br>Array after sort<br>"+a.sort(function(a,b){return a - b}));

var d = removeDuplicates(a);  // duplicates are removed in this 
//length is calculated
var len= d.length/2;   

document.write("<br><br>final result")
//first part of result is derived
var firstArr = d.filter(firstPart);
if(d.length==1){
  document.write("<br>[["+firstArr+"]]");
}
else{
document.write("<br>[["+firstArr+"],");
}

//second part of result is derived
var secondArr = d.filter(secondPart)
if(secondArr.length!=0)
document.write("["+secondArr+"]]");


// below function is called from above
function firstPart(no){
     
      return d.indexOf(no)<len;
     
}
function secondPart(no){
      return d.indexOf(no)>=len;
}

//function to remove duplicates
function removeDuplicates(a){
  var c=[];
  for(var i=0;i<a.length;i++){
    if(c.indexOf(a[i])===-1){
      c.push(a[i]);
    }
    
  }
  return c;
  
}