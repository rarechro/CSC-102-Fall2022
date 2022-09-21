


async function countdown50() {
  var count = 50;


  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 5000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 10000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 15000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 20000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 25000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 30000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 35000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 40000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 45000);
  setTimeout(function(){count = count- 5 
    document.getElementById("CountDis").innerHTML = count;
  
  }, 50000);
  
  
  setTimeout(function(){
    document.getElementById("CountDis").innerHTML = 'BlastOff';
  
  }, 50000);
  
  
  
  
  
  
  
  
  /*
    console.log('start timer');
    var count = 50;
    for (let step = 0; step < 10; step++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      count = count- 5;
      document.getElementById("CountDis").innerHTML = count;
      if (count == 0){
        document.getElementById("CountDis").innerHTML = 'Blast Off';
        document.alert("BlastOff");


      }
    }
    //await new Promise(resolve => setTimeout(resolve, 1000));
   */
    
  }



function CountDownTimer(){
// count down timer 50 to 0 by 5
console.log("countdown started");
//var count = 50;
countdown50();
//count - 1;
//document.getElementById("CountDis").innerHTML = count;


}