function pay() {
var MOP = document.getElementById("sell").value;
var Amt = document.getElementById("num").value;
var Cat = document.getElementById("sel2").value;
var Des = document.getElementById("comment").value;
document.getElementById("MOP").innerHTML = MOP;
document.getElementById("Amt").innerHTML = Amt;
document.getElementById("Cat").innerHTML = Cat;
document.getElementById("Des").innerHTML = Des;
}

/*var pay = [];
pay.push({Number:numm,category:copy,amount:amt,MOP:mop});

/*for(i=0; i < pay.length; i++ ){
num +=pay[i] + "<br>";

}
for(i=0; i < pay.length; i++){
num +="<tr><td>" + Number(i+1) + "</td><td>"+pay[i].category+"</td><td>"+pay[i].amount+"</td><td>"+pay[i].MOP+"</td></tr>";
}
document.getElementById("demo").innerHTML = num;*/