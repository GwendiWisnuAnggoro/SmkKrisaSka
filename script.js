
// Bahasa
let LinkPenutupKetJurusan = document.querySelector(".LinkPenutupKetJurusan")
let bhsInggrisHp = document.querySelector(".bhsInggris");
let bhsIndonesiaHp = document.querySelector(".bhsIndonesia")
let bhsInggrisPc = document.querySelector(".bahasaInggris");
let bhsIndonesiaPc = document.querySelector(".bahasaIndonesia")
let jurusan = document.querySelector(".contain2");
let NavbarAtass = document.querySelector(".NavKanan");
let NavBawahh = document.querySelector(".NavbarKiri")
let NavbarHP = document.querySelector(".navHP");
let alamat = document.querySelector(".alamat");
let Nohp = document.querySelector(".noTlp");
let email = document.querySelector(".email");
let Nama_Jurusan = document.querySelector(".Nama_Jurusan")
let IMGShow = document.querySelector(".gambarTampil")
let Ket_Jurusan = document.querySelector(".Ket_Jurusan");
let KepNJurusan = document.querySelector(".Kepanjangan_Nama_Jurusan")
let index = 0;
let warnaTertariikLink = document.querySelector(".LinkPenutupKetJurusan")
let IsiPeluangKerja = document.querySelector(".IsiPeluangKerja")
let l_alasanMemilih = document.querySelector(".List_AlasanMemilih")
let l_PengetahuanKahlian = document.querySelector(".List_PengetahuanKeahlian")
let AlasanMeilih = document.querySelector(".AlasanMeilih");
let peluangKerja = document.querySelector(".PeluangKerja");
let PengetahuanDKeahlian = document.querySelector(".PengetahuanDKeahlian")
let PengertianH = document.querySelector(".pengertianH")
// let bhss = Bahasa_Default;
let warnaJurusan = document.querySelector(".penutupKeteranganJurusan")
let pengertianS = document.querySelector(".pengertianS")
document.getElementById("cssHover").innerHTML = ``
bahasa(Bahasa_Default, bhsInggrisPc, bhsInggrisHp, bhsIndonesiaPc, bhsIndonesiaHp);
bhsInggrisPc.addEventListener("click", ()=>{
    bahasa("en-EN", bhsInggrisPc, bhsInggrisHp, bhsIndonesiaPc, bhsIndonesiaHp);
 })
 bhsInggrisHp.addEventListener("click", ()=>{
    bahasa("en-EN", bhsInggrisPc, bhsInggrisHp, bhsIndonesiaPc, bhsIndonesiaHp);
})

 bhsIndonesiaPc.addEventListener("click", ()=>{
     bahasa("id-ID", bhsInggrisPc, bhsInggrisHp, bhsIndonesiaPc, bhsIndonesiaHp);
    })
 bhsIndonesiaHp.addEventListener("click", ()=>{
     bahasa("id-ID", bhsInggrisPc, bhsInggrisHp, bhsIndonesiaPc, bhsIndonesiaHp);
    })
function bahasa(b, ingpc, inghp, indpc, indhp){
    // bhss = b;
    if(b == "id-ID" || b == "Indonesia" || b == "Indonesia(id)"){
        indhp.style.color = "red";
        indpc.style.color = "red";
        inghp.style.color = "gray";
        ingpc.style.color = "gray";
        jurusan.innerHTML = ``;
        NavbarAtass.innerHTML = ``;
        NavBawahh.innerHTML = ``;
        NavbarHP.innerHTML = ``;

        
        // jurusan
        for(let i = 0; i < Jurusan[0].Indonesia.length; i++){
            if(Jurusan[0].Indonesia[i].kepanjangan == undefined || Jurusan[0].Indonesia[i].kepanjangan == ""){
                
                jurusan.innerHTML += `<li onclick="BUka()" class="list-jurusan jList" id="${i}"><h1 id="${i}">${Jurusan[0].Indonesia[i].nama}</h1></li>`
            } else{
                jurusan.innerHTML += `<li onclick="BUka()" class="list-jurusan jList" id="${i}"><h1 id="${i}">${Jurusan[0].Indonesia[i].nama}</h1><p id="${i}">${Jurusan[0].Indonesia[i].kepanjangan}</p></li>`
            }
        }
        let t = document.querySelectorAll(".jList")
        for(let i = 0; i < t.length; i++){
            t[i].addEventListener("click", (event)=>{
                l_PengetahuanKahlian.innerHTML = ``
                l_alasanMemilih.innerHTML = ``
                IsiPeluangKerja.innerHTML = ``
                let id = event.target.id;
                document.getElementById("cssHover").innerHTML += ` .LinkPenutupKetJurusan{color: ${warna_Jurusan[0].warnaLink[id]};} .penutupKeteranganJurusan{background-color: ${warna_Jurusan[0].warna[id]};}`
              
                    // Nama dan Kepanjangan
                    Nama_Jurusan.innerText = `${Jurusan[0].Indonesia[id].nama}`;
                    KepNJurusan.innerText = `${Jurusan[0].Indonesia[id].kepanjangan}`
                    // Header
                    PengertianH.innerText = headerKeteranganJurusan[0].Indonesia.Pengertian;
                    PengetahuanDKeahlian.innerText = headerKeteranganJurusan[0].Indonesia.Pengetahuan_dan_Keahlian;
                    AlasanMeilih.innerText = headerKeteranganJurusan[0].Indonesia.AlasanMemilihJurusan;
                    peluangKerja.innerText = headerKeteranganJurusan[0].Indonesia.PeluangKerja;
                    // Isi
                    pengertianS.innerHTML = Jurusan_Keterangan_Isi[0].Indonesia[id].isi_Pengertian;
                    for(let i = 0; i < Jurusan_Keterangan_Isi[0].Indonesia[id].isi_Pengetahuan_dan_Keahlian[0].list.length; i++){
                        // console.log(i)
                        if(Jurusan_Keterangan_Isi[0].Indonesia[id].isi_Pengetahuan_dan_Keahlian[0].list[i]){
                            l_PengetahuanKahlian.innerHTML += `<li>${Jurusan_Keterangan_Isi[0].Indonesia[id].isi_Pengetahuan_dan_Keahlian[0].list[i]}</li>`
                        } else{
                            // l_PengetahuanKahlian.innerHTML += ``
    
                        }
                    }
                    for(let i = 0; i < Jurusan_Keterangan_Isi[0].Indonesia[id].isi_AlasanMemilihJurusan[0].list[0].length; i++){
                        console.log(i)
                        if(Jurusan_Keterangan_Isi[0].Indonesia[id].isi_AlasanMemilihJurusan[0].list[i]){
                            l_alasanMemilih.innerHTML += `<li>${Jurusan_Keterangan_Isi[0].Indonesia[id].isi_AlasanMemilihJurusan[0].list[i]}</li>`
                        } else{
                            // l_PengetahuanKahlian.innerHTML += ``
    
                        }
                    }
                    for(let i = 0; i < Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].judul.length; i++){
                        if(Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].list[i] && Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].judul[i]){
                            IsiPeluangKerja.innerHTML += `<li>
                            <b>${Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].judul[i]}</b><br>${Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].list[i]}</li>`
                        }else if(Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].list[i]){
                            IsiPeluangKerja.innerHTML += `<li>
                            <b>${Jurusan_Keterangan_Isi[0].Indonesia[id].isi_PeluangKerja[0].judul[i]}</b></li>`
    
                        } else{
    
                        }
    
                    }
                    
                    LinkPenutupKetJurusan.innerText = warna_Jurusan[0].tulisanLink[0].Indonesia[0];
                
            
            })
            // Navbar
        }
        
        // Navbar atas
        for(let navAtas = 0; navAtas < NavbarAtas[0].Indonesia.length; navAtas++ ){
            NavbarAtass.innerHTML += `<li class="nav-item">
            <a class="nav-link isiNavKanan"  href="#">${NavbarAtas[0].Indonesia[navAtas].isi}</a>
          </li>`
          NavbarHP.innerHTML += `<li class="nav-item">
          <a class="nav-link" href="#">${NavbarAtas[0].Indonesia[navAtas].isi}</a>
        </li>`
        }
        // Navbar Bawah
        for(let navBawah = 0; navBawah < NavbarBawah[0].Indonesia.length; navBawah++ ){
            NavBawahh.innerHTML += `<li class="nav-item">
            <a class="nav-link btnn isiNavBesar" aria-current="page" href="#"><h6>${NavbarBawah[0].Indonesia[navBawah].isi}</h6></a>
          </li>`
          NavbarHP.innerHTML += `<li class="nav-item">
          <a class="nav-link" href="#">${NavbarBawah[0].Indonesia[navBawah].isi}</a>
        </li>`
        }

        // Alamat
        alamat.innerHTML = `${Alamat[0].Indonesia[0].alamat}`;

        // No HP & Email
        Nohp.innerHTML = Nomor_Hp;
        email.innerHTML = Email;

        

}else if(b == "en-EN" || b == "Inggris" || b == "Inggris(en)"){
        inghp.style.color = "red";
        ingpc.style.color = "red";
        indhp.style.color = "gray";
        indpc.style.color = "gray";
        jurusan.innerHTML = ``;
        NavbarAtass.innerHTML = ``;
        NavBawahh.innerHTML = ``;
        NavbarHP.innerHTML = ``;

      
        // Jurusan
        for(let i = 0; i < Jurusan[1].Inggris.length; i++){
            if(Jurusan[1].Inggris[i].kepanjangan == undefined || Jurusan[1].Inggris[i].kepanjangan == ""){
                jurusan.innerHTML += `<li onclick="BUka()" class="list-jurusan jList" id="${i}"><h1 id="${i}">${Jurusan[1].Inggris[i].nama}</h1></li>`
            }else{
                jurusan.innerHTML += `<li onclick="BUka()" class="list-jurusan jList" id="${i}"><h1 id="${i}">${Jurusan[1].Inggris[i].nama}</h1><p id="${i}">${Jurusan[1].Inggris[i].kepanjangan}</p></li>`

            }

        }

        let t = document.querySelectorAll(".jList")
        for(let i = 0; i < t.length; i++){
        t[i].addEventListener("click", (event)=>{
            l_PengetahuanKahlian.innerHTML = ``
            l_alasanMemilih.innerHTML = ``
            IsiPeluangKerja.innerHTML = ``
            let id = event.target.id;
            document.getElementById("cssHover").innerHTML += `.LinkPenutupKetJurusan{color: ${warna_Jurusan[0].warnaLink[id]};} .penutupKeteranganJurusan{background-color: ${warna_Jurusan[0].warna[id]};} .medsos .yt{color: ${warna_Jurusan[0].warnaLink[id]};} .medsos .ig{color: ${warna_Jurusan[0].warnaLink[id]};} .medsos .fb{color: ${warna_Jurusan[0].warnaLink[id]};}`
                // Nama dan Kepanjangan
                Nama_Jurusan.innerText = `${Jurusan[1].Inggris[id].nama}`;
                KepNJurusan.innerText = `${Jurusan[1].Inggris[id].kepanjangan}`
                // Header
                PengertianH.innerText = headerKeteranganJurusan[1].Inggris.Pengertian;
                PengetahuanDKeahlian.innerText = headerKeteranganJurusan[1].Inggris.Pengetahuan_dan_Keahlian;
                AlasanMeilih.innerText = headerKeteranganJurusan[1].Inggris.AlasanMemilihJurusan;
                peluangKerja.innerText =    headerKeteranganJurusan[1].Inggris.PeluangKerja;
                // Isi
                pengertianS.innerHTML = Jurusan_Keterangan_Isi[1].Inggris[id].isi_Pengertian;
                for(let i = 0; i < Jurusan_Keterangan_Isi[1].Inggris[id].isi_Pengetahuan_dan_Keahlian[0].list.length; i++){
                    // console.log(i)
                    if(Jurusan_Keterangan_Isi[1].Inggris[id].isi_Pengetahuan_dan_Keahlian[0].list[i]){
                        l_PengetahuanKahlian.innerHTML += `<li>${Jurusan_Keterangan_Isi[1].Inggris[id].isi_Pengetahuan_dan_Keahlian[0].list[i]}</li>`
                    } else{
                        // l_PengetahuanKahlian.innerHTML += ``

                    }
                }
                for(let i = 0; i < Jurusan_Keterangan_Isi[1].Inggris[id].isi_AlasanMemilihJurusan[0].list[0].length; i++){
                    console.log(i)
                    if(Jurusan_Keterangan_Isi[1].Inggris[id].isi_AlasanMemilihJurusan[0].list[i]){
                        l_alasanMemilih.innerHTML += `<li>${Jurusan_Keterangan_Isi[1].Inggris[id].isi_AlasanMemilihJurusan[0].list[i]}</li>`
                    } else{
                        // l_PengetahuanKahlian.innerHTML += ``

                    }
                }
                for(let i = 0; i < Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[0].judul.length; i++){
                    if(Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[0].list[i] && Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[0].judul[i]){
                        IsiPeluangKerja.innerHTML += `<li>
                        <b>${Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[0].judul[i]}</b><br>${Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[0].list[i]}</li>`
                    }
                    else if(Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[0].list[i]){
                        IsiPeluangKerja.innerHTML += `<li>
                        <b>${Jurusan_Keterangan_Isi[1].Inggris[id].isi_PeluangKerja[1].judul[i]}</b></li>`

                    } 
                    else{

                    }

                

            }
        
            LinkPenutupKetJurusan.innerText = warna_Jurusan[0].tulisanLink[1].Inggris[0]
        
        })
    }

        // Navbar
        // Navbar Atas
        for(let navAtas = 0; navAtas < NavbarAtas[1].Inggris.length; navAtas++ ){
            NavbarAtass.innerHTML += `<li class="nav-item">
            <a class="nav-link isiNavKanan"  href="#">${NavbarAtas[1].Inggris[navAtas].isi}</a>
          </li>`
          NavbarHP.innerHTML += `<li class="nav-item">
          <a class="nav-link" href="#">${NavbarAtas[1].Inggris[navAtas].isi}</a>
        </li>`
        }
        // Navbar Bawah
        for(let navBawah = 0; navBawah < NavbarBawah[1].Inggris.length; navBawah++ ){
            NavBawahh.innerHTML += `                      <li class="nav-item">
            <a class="nav-link btnn isiNavBesar" aria-current="page" href="#"><h6>${NavbarBawah[1].Inggris[navBawah].isi}</h6></a>
            </li>`
            NavbarHP.innerHTML += `<li class="nav-item">
            <a class="nav-link" href="#">${NavbarBawah[1].Inggris[navBawah].isi}</a>
          </li>`
        }
        
        // Alamat
        alamat.innerHTML = `${Alamat[1].Inggris[0].alamat}`;
        // No Hp & Email
        Nohp.innerHTML = Nomor_Hp;
        email.innerHTML = Email;

    }   

    
}

// console.log()
function BUka(){
    Ket_Jurusan.style.display = "block";
}

// function detect(opBhs){
//     let bahs = opBhs;
    
// }
// alert(bhss)
// function {
//     let id = event.target.id;
//     Ket_Jurusan.style.display = "block";
//     if(Bahasa_Default == "id-ID" || Bahasa_Default == "Indonesia" || Bahasa_Default == "Indonesia(id)" ){
//         // alert("indonesia")
//     } else if (Bahasa_Default == "en-EN" || Bahasa_Default == "Inggris" || Bahasa_Default == "Inggris(en)"){
//         // alert("Inggris")
//     }
//  Nama_Jurusan.innerText = `${Jurusan[0].Indonesia[id].nama}`

// }

// function Misal(a, b){
//     console.log("a "+a);
//     console.log("b "+b)
// }
// Misal( event , 10)

//Sistem Cari
// let Keywoard = document.getElementById("cari");
// Keywoard.addEventListener("keyup", SistemCari_Mapel)

//     function SistemCari_Mapel(e){
//         let Keywoard = e.target.value.toLowerCase();
//         let isiMapel = document.querySelectorAll(".list-jurusan");

//         isiMapel.forEach((item)=>{
//             let hasilMapel = item.childNodes[0].textContent.toLowerCase();

//             if(hasilMapel.indexOf(Keywoard) != -1){
//                 item.setAttribute("style","display: block;");
//             } else if(hasilMapel.indexOf(Keywoard) == -1){
//                 item.setAttribute("style","display: none !important;");
//             }
//         });
        
//     }


// Default

IMGShow.innerHTML = `<div class="IMG-SlideShow">
           <img src="img/${listGambar[index].src}" alt="">
        </div>`
        // Ketikka sudah gamabar terakhir

// indicator

// let indicator = document.querySelector(".indikator");
// for(let i = 0; i < listGambar.length; i++){
        // indicator.innerHTML += `<div  class="kotak">
        // <svg xmlns="http://www.w3.org/2000/svg" onclick="squere(event)" id="${i}" width="25" height="25" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
        // <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        // </svg></div>`
                // console.log("Musik Index ke:"+i+","+ listGambar[i].src)
    // function squere(event){
    //         let id = event.target.id;
    //         index = id;
    //         IMGShow.innerHTML = `<div class="IMG-SlideShow">
    //         <img src="img/${listGambar[index].src}"  alt="">
    //         </div>`
    // }
// }
// let indikatorKOtak = document.querySelectorAll(".kotak");

setInterval(()=>{

   if(index == listGambar.length-1){
              index = 0;
              IMGShow.innerHTML = `<div class="IMG-SlideShow">
           <img src="img/${listGambar[index].src}"  alt="">
        </div>`
      } else{
                index++;
                IMGShow.innerHTML = `<div class="IMG-SlideShow">
           <img src="img/${listGambar[index].src}" alt="">
        </div>`
     }
}, kecepatan_Berubah)



let muncul = document.querySelector(".iklan");


function HilangkanIKlan(){
    muncul.style.display = "none"
}



let skipKanan = document.getElementById("SKIPkanan")
let skipKiri = document.getElementById("SKIPkiri")

skipKanan.addEventListener("click", ()=>{
    if(index < listGambar.length -1){
        index += 1;
        IMGShow.innerHTML = `<div class="IMG-SlideShow">
        <img src="img/${listGambar[index].src}"  alt="">
     </div>`

    }else if(index == listGambar.length -1 ){
        index = 0;
        IMGShow.innerHTML = `<div class="IMG-SlideShow">
        <img src="img/${listGambar[index].src}"  alt="">
     </div>`
      
    }
})



skipKiri.addEventListener("click", ()=>{
    if(index <= listGambar.length -1){
        index -= 1;
        IMGShow.innerHTML = `<div class="IMG-SlideShow">
        <img src="img/${listGambar[index].src}"  alt="">
     </div>`

    }
})



// Loading
let loading = document.querySelector(".loading");
if(GambarSaatLoading){
   loading.innerHTML = `<img id="AnimasiLoading" src="img/${GambarSaatLoading}" alt=""></img>`; 
    
} else{
    loading.style.display = "none"
}


    this.addEventListener('load', function(){
        loading.style.display = "none"
        setTimeout(()=>{
            muncul.style.display = "inline"
        }, MuculSetelahBerapaDetik)
    
    });

    // Sosmed
for(let i = 0; i < Link.length; i++){
    pushToSosmed(Link[i].link, i, Link[i].LogoSVG, Link[i].nama.toLowerCase());
}
    function pushToSosmed(linkk, u, svg, nama){
        
        let sosmed = document.querySelector(".sosmed");
        if(Link[u].nama && Link[u].LogoSVG){
            if(Link[u].link){
                sosmed.innerHTML += `<a href="${linkk}" id="${nama}" class="${nama}">${svg}</a>`
            } else{
                sosmed.innerHTML += `<a href="#" id="${nama}" class="${nama}">${svg}</a>`
            }
            if(Link[u].warnaHover){
                document.getElementById("cssHover").innerHTML += `.sosmed #${nama}:hover{color: ${Link[u].warnaHover.toLowerCase()};} .sosmed #${nama}{margin-left: ${Link[u].margin_left}; margin-right: ${Link[u].margin_right};}`
                
            } else{
                document.getElementById("cssHover").innerHTML += `.sosmed #${nama}:hover{color: blue;} .sosmed #${nama}{margin-left: ${Link[u].margin_left}; margin-right: ${Link[u].margin_right};}`
            }
        } else{
            
        }
    }


// Keluar dari jurusan Keterangan
function Keluarr(){
    Ket_Jurusan.style.display = "none";
}