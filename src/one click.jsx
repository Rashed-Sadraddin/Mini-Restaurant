

const one=()=>{
    
    
    function ValidateIt() {
  if (document.getElementById("ddlProblemCategory").value == 0) {
    alert("Please fill some value");
    return false;
  }
  return true;
}
function DisableIt() {
  if (ValidateIt() == true)
    document.getElementById("btnSaveProblem").disabled = true;
}
    
    return(

<button onClick={DisableIt()}>one</button>

)}


export default one;
