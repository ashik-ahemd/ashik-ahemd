//let input = document.querySelector('input');
//let span = document .querySelector('span');
//
//input.addEventListener('change', () => {
//    let files = input.files;
//    if(files.length > 0) {
//    if(files[0].size > 10 * 1024){
//        span.innerText = 'File Size Exceeds 10KB';
//        return;
//    }
//    }
//    span.innerText = '';
//})
//var link = document.getElementsByTagName('a')[0];
//undefined
//link
//<a href=​"#">​Visti Google​</a>​
//link.innerHTML
//"Visti Google"
//link.innerHTML = "ashik to Visit";
//"ashik to Visit"
//var link = document.getElementsByTagName("a")[0];
//    console.log(link);
//link.innerHTML = "hi ashik";
//[link.style.fontSize = "1.6rem",link.style.color = "red"];
//
//[link.style.background = "antiquewhite", link.style.with = "100%", link.style.textDecoration = "none", link.style.marginTop = "40px"];
//var heder = document.getElementsByTagName('h1')[0];
//console.log(heder);
//heder.innerHTML = "Hello Bangladesh";
//heder.style.textAlign = "conter";
//[heder.style.color = "red",heder.style.marginLeft = "430px"];
//
//var heder = document.getElementsByTagName('p')[0];
//console.log(heder);
//heder.innerHTML = "Hello ashik";
//heder.style.textAlign = "conter";
//[heder.style.color = "red",heder.style.marginLeft = "500px", link.style.fontSize = "px"];
//
////var heading3 = document.createElement('h1');
////var text = document.createTextNode("this heading3");
////heading3.appendChild(text);
////
////var nev = document.getElementById('nev');
////nev.appendChild(heading3);
////
////
////
//var heading3 = document.createElement('h1');
//var text = document.createTextNode('rrealmii');
//heading3.appendChild(text);
//
//var nev = document.getElementById('nev');
//nev.appendChild(heading3);
//
//var mnput = document.createElement('input');
//var input = document.createTextNode('input type ="text"');
//mnput.appendChild(input);
//var col = document.getElementById('nev');
//col.appendChild(mnput);
//
//var nev = document.getElementsByTagName('input')[0];
//nev.style.marginTop = "20px";
//nev.style.padding = "9px";
//nev.style.borderRadius = '10px';
//nev.style.border = "1pxsolidred";
//console.log(nev);
//
//var heding2 = document.getElementsByTagName("h1")[0];
//nev.removeChild(heding2);
////
//let cokbox = document.querySelector('input');
//let button = document.querySelector('button');
//
//let cokbox.addEventListener('change',()=>{
//   if(!cokbox.checked) button.style.display = 'none';
//    else button.style.display = null;
//})

//let pic = ('2.jpg');
//
//console.log(pic);
//
//for (let i = 9; i >= 0; i--){
//    if (i===5) break;
//   
//    console.log(i);
//}
//
//
//

//let myarray = ['one','two','three','four','five','six']
//   
////for(let i = 0; i < myarray.length; i++){
////    console.log(myarray [i]);
//
//for(let i = myarray.length - 1;i >= 0; i--){
//  console.log(myarray[i]);
//}
//


//let myarray = ['one','two','three','four','five','six']
//
//let i = 0;
//while(i < myarray.length){
//    console.log(myarray[i])
//    i++;
//}

//let ashik = Number(prompt("Enter Your number"));
//
//while(ashik < 10) {
//    alert("please Enter your leger number");
//    ashik = Number(prompt("Enter Your number"));
//}
//
//if(ashik >= 10){
//    alert('right');
//}
//
//console.log(ashik);

//let myarray = ['one','two','three','four','five','six'];
//myarray.forEach(function(emlm,){
//    console.log(emlm);
//    console.log(`Index: ${i}, Element: ${elem});
//})

//let ashiq = ['one','two','three','four','five','six'];
//for([i,elem] of ashiq.entries()){
//    if(i===5)break;
//    console.log(elem);
//    console.log(i);
//}



//myobj = {
//    "name": "jone",
//    "age":18,
//    "city":"dhaka"
//}
//
//for(prprty in myobj) {
//    console.log(`prprty: ${prprty}, value: ${myobj[prprty]}`);
//}
//
//


//let val = true;
//console.log(typeof val);
//




//var row = document.getElementById("row");
//row.style.maxHeight = "20px";
//function menutoggel(){
//    if(row.style.maxHeight == "20px")
//    {
//        row.style.maxHeight = "200px";
//    }
//    else
//        {
//            row.style.maxHeight = "0px";
//        }
//}


var navLinks = document.getElementById("navLinks");

function showMenu(){
   navLinks.style.right = "0"; 
}

function hideMenu(){
   navLinks.style.right = "-200px"; 

}

var about =document.getElementById("about");

function about(){
    footer.style.width = "80%";
}



 
  
  $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
  






























