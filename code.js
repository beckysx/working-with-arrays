var names=["dog","cat","dragon"];
var list=document.createElement("OL");

names.forEach(function(d)
{
  var li=document.createElement("LI");
  li.innerText=d;
  list.appendChild(li);
})
var body=document.getElementById("l");
body.innerHTML=list;
