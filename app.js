var smart = prompt("Is Your TV smart ? Answer by YES or NO only");
  

  while (smart !== 'YES' && smart !== 'NO') {
smart=prompt("Is Your TV smart ? Answer by YES or NO only");
  }

  var tvtype = '';

  if (smart === 'YES') {
    tvtype='<img src="images/SmartTV.png"/>';
  } else if (smart === 'NO') {
    tvtype='<img src="images/NormalTV.png"/>';
  }

var starrate = prompt('what star rating wil you give us ? from 1-5');
var result ='';
for(var i = 0; i < starrate; i++) {
  result = result + tvtype
}
  document.write (result);

  confirm("Hope You Benefit from our")
  
