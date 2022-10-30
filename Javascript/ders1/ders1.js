





// var str = 'Hello World';
// console.log(str[0]); // H

// str[1] // e
// str[2] // l
// str[3] // l
// str[4] // o

// alert(str.length ) //  11


// var a;
// alert(typeof a);


// var kullanici = { ad: 'Sadık',  soyad: 'Turan', yas: 38 };

// console.log(typeof kullanici) // object


// console.log(kullanici.ad)      // Sadık Nesne üzerinden bilgilere ulaşmak için nesneden sonra '.' operatörünü kullanabiliriz.
// console.log(kullanici.soyad)   // Turan
// console.log(kullanici.yas)     // 38

// console.log(kullanici["ad"])      // Sadık Alternatif olarak nesne özelliklerine ulaşmak için [ ] operatörünü de kullanabiliriz.
// console.log(kullanici["soyad"])   // Turan
// console.log(kullanici["yas"])     // 38


// // Numbers (Sayılar)
// var a = 15;
// var b = 3;

// var total = a * b;

// console.log(total);
// console.log(typeof total);


// // Array Object
// var reference = [1,2,3,4,5,6,7,8,9];

// console.log(reference);
// console.log(typeof reference);
// console.log("Dizinin 2.ci Değeri :" + reference[1]);






// var selam=fonction()
// { 
//     return"merhaba dünya";
// }                                                    
// alert( typeof selam )                                                                            
// alert(selam());       

// function mesajGoster() {
//     alert( 'Merhaba millet' );
//   }
 
// function topla(a,b) {
//     let result=a+b;
//     console.log(result);

// }
// topla(7,5);

// let kıcın = document.createElement("button"); 
// let demo = document.querySelector("demo");
// console.log(demo);


//   function mesajGoster() {
//     let mesaj = "Merhaba! Ben Javascript"; // Yerel Değişken  fonksiyonun içine tanımlanan değişken sadece o fonksiyonn içinde görüntülenir
  
//     alert( mesaj );
//   }
  
//   mesajGoster(); // Merhaba! Ben Javascript
  
//   alert( mesaj ); // <-- Hata! Bu değişken `mesajGoster` fonksiyonuna aittir.





//   let kullaniciAdi = 'Adem';//dış değişken

//   function mesajGoster() {
//     let mesaj = 'Hello, ' + kullaniciAdi;
//     alert(mesaj);
//   }
  
//   mesajGoster(); // Merhaba, Adem





//   let kullaniciAdi = 'Adem';

//   function mesajGoster() {
//     kullaniciAdi = "Yusuf"; // (1) dışarıda bulunan değişkenin değeri değişti.
  
//     let mesaj = 'Merhaba, ' + kullaniciAdi;
//     alert(mesaj);
//   }
  
//   alert( kullaniciAdi ); // Fonksiyon çağırılmadan  Adem
  
//   mesajGoster();
  
//   alert( kullaniciAdi ); // fonksiyon çağırıldıktan sonra Yusuf,



// function topla(a,b)
// {
//     return a+b;
// }
// document.write(topla(5,6));



// var kullaniciSayisi1 = prompt("Lütfen ilk sayıyı giriniz:", "");
// var kullaniciSayisi2 = prompt("Lütfen ikinci sayıyı giriniz:", "");
// alert(parseInt(kullaniciSayisi1) + parseInt(kullaniciSayisi2));


// function mesajGoster() {
//     alert( 'Merhaba millet' );
//   }
  
//   mesajGoster();
//   mesajGoster();
//   mesajGoster();
//   mesajGoster();
//   mesajGoster();


// function mesajGoster() {
//     let mesaj = "Merhaba! avascript"; // Yerel Değişken
  
//     alert( mesaj );
//   }
  
//   mesajGoster(); // Merhaba! Ben Javascript
  
//   alert( mesaj ); // <-- Hata! Bu değişken `mesajGoster` fonksiyonuna aittir.



//   let kullaniciAdi = 'Adem';

//   function mesajGoster() {
//     kullaniciAdi = "Yusuf"; // (1) dışarıda bulunan değişkenin değeri değişti.
  
//     let mesaj = 'Merhaba, ' + kullaniciAdi;
//     alert(mesaj);
//   }
  
//   alert( kullaniciAdi ); // Fonksiyon çağırılmadan  Adem
  
//   mesajGoster();
  
//   alert( kullaniciAdi ); // fonksiyon çağırıldıktan sonra Yusuf,



//   let kullaniciAdi = 'Adem';

//   function mesajGoster() {
//     let kullaniciAdi = "Yusuf"; // yerel değişken tanımla
  
//     let mesaj = 'Merhaba, ' + kullaniciAdi; // Yusuf
//     alert(mesaj);
//   }
  
//   // buradaki fonksiyon kendi değişkenini yaratacak ve onu kullanacak.
//   mesajGoster();
  
//   alert( kullaniciAdi ); // Adem, değişmedi!!!, fonksiyon dışarıda bulunan değişkene erişmedi.



// function mesajGoster(gonderen,metin) {

//   gonderen = '*' + gonderen + '*'; // "gonderen" biraz daha güzel hale getirildi.

//   alert( gonderen + ': ' + metin );
// }

// let gonderen = "Mahmut";

// mesajGoster(gonderen, "Merhaba"); // *Mahmut*: Merhaba

// // "gonderen" değişkeninin değeri sadece fonksiyon içerisinde değişti. Çünkü bu değişken paslandığında fonksiyon yerel bir kopyası üzerinde çalışır
// alert( gonderen ); // Mahmut




// function mesajGoster(gonderen, metin) { // argümanlar: gonderen, metin
//     alert(gonderen + ': ' + metin);
//   }
  
//   mesajGoster('Ahmet', 'Merhaba!'); // Ahmet: Merhaba! (*)
//   mesajGoster('Mehmet', "Naber?"); // Mehmet: Naber? (**)



// function mesajGoster(gonderen,metin) {

//     gonderen = '*' + gonderen + '*'; // "gonderen" biraz daha güzel hale getirildi.
  
//     alert( gonderen + ': ' + metin );
//   }
  
//   let gonderen = "Mahmut";
  
//   mesajGoster(gonderen, "Merhaba"); // *Mahmut*: Merhaba
  
//   // "gonderen" değişkeninin değeri sadece fonksiyon içerisinde değişti. Çünkü bu değişken paslandığında fonksiyon yerel bir kopyası üzerinde çalışır
//   alert( gonderen ); // Mahmut



// mesajGoster(gonderen,metin)
// mesajGoster("Mahmut");












// var yas = 50;

// function yasKontrol(deger){

//     if(deger < 18){
//         alert("Genç");
//     } else if( deger >= 18 && deger < 41) {
//         alert("Yetişkin");
//     } else if( deger >= 41 && deger < 65) {
//         alert("Orta Yaşlı");
//     } else {
//         alert("Yaşlı");
//     }
// }

//  yasKontrol(yas);

// ---------------------------------------------------



// function adSoyadKontrol(adi, soyadi) {

//     if(adi == "" && soyadi == "") {
//         alert("Adınızı ve soyadınızı boş geçemezsiniz.");
//     } else if(adi == "" || soyadi == "") {
//         //alert("Adınız ya da soyadınız boş geçilemez.");

//         if(adi == "") {
//             alert("Adınızı boş geçemezsiniz.");
//         } else if(soyadi == "") {
//             alert("Soyadınızı boş geçemezsiniz.");                    
//         }
//     }

// }
// adSoyadKontrol(ad,soyad);

// if(ad !=""){
//     alert("Harika Adınızı Girmişsiniz.")
// }



// değişken tanı
// var a;
// var a = 5;
// document.write(a)

// var a=5 ,b=8;
// var alan=(a*b);
// document.write(alan)



// var firstName = 'Çınar';
// console.log(typeof firstName,5)

// const cars =Array("Saab", "Volvo", "BMW");
// document.getElementById("demo").innerHTML = cars;

// const person = ["John", "Doe", 46];
// document.getElementById("demo").innerHTML = person[0];

// const person = {firstName:"John", lastName:"Doe", age:46};
// document.getElementById("demo").innerHTML = person.firstName;

// var sonuc = carpma (7*8);
// 	function carpma (a,b) {
// 	return a*b;
// 	}

// document.getElementById("demo").innerHTML = 
// typeof "" + "<br>" +
// typeof "John" + "<br>" + 
// typeof "John Doe";

// var x = myFunction(4, 3);
// document.getElementById("demo").innerHTML = x;

// function myFunction(a, b) {
//   return a * b;
// }