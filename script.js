function getnumber(){
    let tableNum = document.getElementById('numtoprint').value;
    let minlength = document.getElementById('minlength').value;
    let maxlength = document.getElementById('maxlength').value;
    for(let i = minlength; i <= maxlength; i++){
       document.getElementById('displayTable').innerHTML += `${tableNum} x ${i} = ${tableNum*i} <br>`;
    }
  }
  function refresh(){
      let tableNum = document.getElementById('numtoprint').value ="";
      let minlength = document.getElementById('minlength').value ="";
      let maxlength = document.getElementById('maxlength').value ="";
      document.getElementById('displayTable').innerHTML = "";
  }
  