
function makeid() {
    
    var length = document.getElementById("len").value;
    var result           = '';
    var result2 	 = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var number = '0123456789';
    var numberLength = number.length;
    var charactersLength = characters.length;
    if(length>=1 && length<=50){
        for ( var i = 0; i < length; i++ )
        {
    
         result  += characters.charAt(Math.floor(Math.random() * charactersLength)); 
         result2  += number.charAt(Math.floor(Math.random() * numberLength)); 
         
        }  
        
        
        document.getElementById("randomString").innerHTML = result; 
    
        document.getElementById("randomNumber").innerHTML = result2;
    }
    else{
        alert("Bạn chỉ được nhập số từ 1 đến 50");
    }
	
	 
}
function copyToClipboard(elementId) {

    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
  
    document.execCommand("copy");

    document.body.removeChild(aux);
  
  }
