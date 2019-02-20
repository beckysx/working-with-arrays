var names=["dog","cat","dragon"];

names.forEach(function(d)
{
  var list=document.createElement("ul");
  var li=document.createElement("li");
  li.innerText=d;
  list.appendChild(li);
  document.body.appendChild(list);
})
