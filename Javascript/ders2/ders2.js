// javascript çıktılarından 3 şekilde çıktı alabiliriz;

// console.log("meraba"); // inscpek consola yazdırma
// alert("maraba hızır"); //ekranda uyarı şeklinde görüntü alma
// document.write("maraba"); //sayfaya yazdırma 

// ****** Değişkenler   ********

// var , let , const ; 3 değişken vardır

// var a;
// var a=5;
// console.log(a);
// console.log(typeof a) // değişkenin tipini typeof ile görebiliriz.

/*
var webSitesi;
var webSitesi="www.google.com";
document.write(webSitesi); 
*/

// var ogrenciMi=true;
// var aktifMi=false;
// console.log(typeof aktifMi);

/*
var a = 10;
var b = 20;
var c = 30;
console.log(a,b,c);
console.log(a+b+c);
var Mustafa = "Mustafa";
var a = Mustafa; // yukarıda 10 olarak girdiğimi<değeri burada değiştirdik.
console.log(a);// sonuc mustafa 

*/

// var a = "10";
// var b = "3.14";
// var c = String(b);
// console.log(c);

// var d = null;
// console.log(d);  

// var name = "mustafa";
// console.log(name);

// var a = 10;
// var b = a;
// console.log(a,b);
// a = 20;
// console.log(a,b); // a => 20, b => 10

//Yazım kurallarına söz dizimi (syntax) denir.
//JavaScript kodları noktalı virgülle sonlanır.


// ****** Diziler   ********

//javaScript diziler birden fazla değeri bir değişkende depolamak için kullanılır

// var liste = ["elma","armut","portakal"];
// console.log("liste: " + liste);
// alert(liste[0]);


// const dizi = ["a","b","c"];
// console.log(dizi)
// dizi.push("d");
// console.log(dizi)

// const dizi = ["a","b",5,false];
// // const dizi = new Array ("a","b",5,false); // [] = new array () ; her iki şekilde de dizi oluşturulabilir.
// alert(dizi.length);
// dizi.push("Muz"); // değişkenin ismini yazarak push ile içerisine bir dizi daha ekledik
// alert(dizi);
// console.log(dizi)
// console.log(typeof name)
// console.log(typeof b)
// console.log(typeof d)
// console.log(typeof dizi)


// var dizi = ["a","b","c"];
// console.log("ilk",dizi)
// dizi.push("p");
// console.log("ikinci",dizi)


// ****** Koşullar   ********

// var a = ["y","z"];
// var b = ["y","z"];
// if(a === b){
//     console.log("değerler eşit");
// }else{
//     console.log("değerler eşit değil");
// }

// ****** Stringler ********

// let deger;
// let ad = "mustafa kemal";
// let soyad = "atatürk";

// deger = ad + soyad;
// deger = ad + "" + soyad ;
// console.log(deger);

// ad= "mustafa'nın";
// deger2 = ad [1];
// console.log(deger2)
// deger3 = ad[ ad.length-1];
// console.log(deger3);

// let isim = "mustafa, mahmut , hüseyin ,kemal ";
// // let buyuk = isim.toUpperCase();// harfler büyük yapar
// let buyuk = isim.toLowerCase(); // harfleri küçük yapar
// console.log(buyuk);
// document.write(buyuk);





// document.getElementsByClassName("title").innerHTML = buyuk ;
// let el = document.createElement("p");
// el.appendChild(t);
// document.getElementById("test").appendChild (el);


/*
let text = "Hello World!";
let result = text.toUpperCase();
document.write(result);
*/


// var liste, i, listeUzunluk;
//   liste = ["Elma", "Armut", "Portakal"];
//   listeUzunluk = liste.length;
//   for(i = 0; i < listeUzunluk; i++) {
//     alert(liste[i]);
//   }



/*
let deger=35;
let console.log(deger);
let deger=90;
*/
/*
function renk(){

}
var kır="hello";   //dışarıdan funcition içine erişilemiyor burada

console.log(kır);

// */

// var msg = "hello world 1 "

// function test(){

// console.log(msg)
// var msg = "hello world 2 "
// console.log(msg)

// }
// test()
// console.log(msg)