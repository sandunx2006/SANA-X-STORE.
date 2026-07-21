// FREE FIRE LIKE ORDER

function sendOrder(){

let uid = document.getElementById("uid").value;
let name = document.getElementById("name").value;
let pack = document.getElementById("pack").value;

if(uid=="" || name==""){
alert("Please enter your UID and Nickname.");
return;
}

let message =
"🔥 NEW FREE FIRE ORDER\n\n"+
"🆔 UID : "+uid+"\n"+
"👤 Nickname : "+name+"\n"+
"❤️ Package : "+pack+"\n\n"+
"Please process my order.";

window.open(
"https://wa.me/94701695972?text="+encodeURIComponent(message),
"_blank"
);

}



// WEBSITE ORDER

function websiteOrder(){

let client = document.getElementById("clientName").value;
let business = document.getElementById("businessName").value;
let type = document.getElementById("websiteType").value;
let details = document.getElementById("websiteDetails").value;

if(client=="" || business=="" || type==""){
alert("Please fill all required fields.");
return;
}

let message =
"🌐 NEW WEBSITE ORDER\n\n"+
"👤 Name : "+client+"\n"+
"🏷 Website Name : "+business+"\n"+
"📦 Package : "+type+"\n"+
"📝 Details : "+details;

window.open(
"https://wa.me/94701695972?text=" + encodeURIComponent(message),
"_blank"
);

}
