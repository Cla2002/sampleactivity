function submitOrders(){
    let chkChickenJoy = document.getElementById("chkOption1");

let dataToServer="";
if(chkChickenJoy.checked == true){
    dataToServer = "c1";
} else{
    dataToServer = "c2";
}

  let formData = new FormData();
  formData.append("shop", dataToServer);

    console.log(location);
    axios.post("/php_amoyan/server.php", formData)
    .then (function (submitOrders){
        let binalikServer = submitOrders.data;
        if(binalikServer == 2){
            document.getElementById("h1response1").innerHTML = "Your order is not available";
        }else if (binalikServer == 1){
            document.getElementById("h1response1").innerHTML = "Wait for 5 minutes";
        }

    });
    
}