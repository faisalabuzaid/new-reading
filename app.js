var distance = prompt("To get the best TV size, enter how far  you sit from the screen?", "In meters please");
  
if (distance <= 2 && distance > 0) {
      var tvsize = "<h3> 43 inch is the best for you </h3>";}
  
  else if (distance >2 && distance <= 4) {
    var tvsize = "<h3> 50-55 inch is the best for you </h3>";    
  }
  
  
else if (distance > 4 && distance <= 6) {
    var tvsize = "<h3> You need 60 inch or bigger </h3>";
  }
else  {
    var tvsize = "<h3> Please Enter a Number Between 1 and 6 </h3>";
    
  }

  document.write (tvsize);
  
