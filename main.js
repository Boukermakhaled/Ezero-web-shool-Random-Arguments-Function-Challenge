

function showDetails(op1,op2,op3){
    let acc;
  if(typeof(op1) === "string" && typeof(op2) === "number" && typeof(op3) ==="boolean"){
   if(op3 === true){
    console.log(`Hello ${op1}, your Age is ${op2}, You are available for hire`);
   }
   else{
    console.log(`Hello ${op1}, your Age is ${op2}, You ar'nt available for hire`);
   }
  }

  if(typeof(op1) === "number" && typeof(op2) === "string" && typeof(op3) ==="boolean"){
    if(op3 === true){
        console.log(`Hello ${op2}, your Age is ${op1}, You are available for hire`);
       }
       else{
        console.log(`Hello ${op2}, your Age is ${op1}, You ar'nt available for hire`);
       }
      }
  


  if(typeof(op1) === "boolean" && typeof(op2) === "number" && typeof(op3) ==="string"){
    if(op1 === true){
        console.log(`Hello ${op3}, your Age is ${op2}, You are available for hire`);
       }
       else{
        console.log(`Hello ${op3}, your Age is ${op2}, You ar'nt available for hire`);
       }
      }
  

  if(typeof(op1) === "boolean" && typeof(op2) === "string" && typeof(op3) ==="number"){
    if(op1 === true){
        console.log(`Hello ${op2}, your Age is ${op3}, You are available for hire`);
       }
       else{
        console.log(`Hello ${op2}, your Age is ${op3}, You ar'nt available for hire`);
       }
      }
  
    }

showDetails("khaled",19 , true);
showDetails(19 , "khaled",true);
showDetails(true, 19 ,"khaled");
showDetails(false,"khaled" ,19 );