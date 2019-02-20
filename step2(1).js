var change = function() {

  var a = document.getElementsByTagName('li')
  let b = Array.from(a)
  b.forEach(function(d,index) {
    b[index]=b[index].toString()
    a[index].innerHTML=b[index].length


  })

}
