

let a = [
    {
        img: "/Search/bannerpic/1.jpeg",
        cat: "Action <span>&#183; Adventure <span>&#183; Drama",
    },
    {
        img: "/Search/bannerpic/2.webp",
        cat: "Adventure <span>&#183; Drama <span>&#183; Horror",
    },
    {
        img: "/Search/bannerpic/3.jpeg",
        cat: "Crime <span>&#183; Drama <span>&#183; Mystery",
    },
    {
        img: "/Search/bannerpic/4.jpeg",
        cat: "Comedy <span>&#183; Family <span>&#183; Romance",
    },
    {
        img: "/Search/bannerpic/5.jpeg",
        cat: "Crime <span>&#183; Drama <span>&#183; Fantasy",
    },
    {
        img: "/Search/bannerpic/6.jpg",
        cat: "Action <span>&#183; Adventure <span>&#183; Crime",
    },
    {
        img: "/Search/bannerpic/7.jpeg",
        cat: "Crime <span>&#183; Drama <span>&#183; Romance",
    },
    {
        img: "/Search/bannerpic/8.jpeg",
        cat: "Action <span>&#183; Adventure <span>&#183; Drama",
    },
    {
        img: "/Search/bannerpic/9.webp",
        cat: "Action <span>&#183; Comedy <span>&#183; Thriller",
    },
    {
        img: "/Search/bannerpic/10.jpg",
        cat: "Drama <span>&#183; Fantasy <span>&#183; Horror",
    },
    {
        img: "/Search/bannerpic/11.jpeg",
        cat: "Comedy <span>&#183; Crime <span>&#183; Fantasy",
    },
    {
        img: "/Search/bannerpic/12.jpeg",
        cat: "Action <span>&#183; Crime <span>&#183; Drama",
    },
    {
        img: "/Search/bannerpic/13.jpeg",
        cat: "Comedy <span>&#183; Drama <span>&#183; Romance",
    },
    {
        img: "/Search/bannerpic/14.jpg",
        cat: "Action <span>&#183; Adventure <span>&#183; Drama",
    },
]


console.log(a[0].img)


const swapperdata = () => {

    let SwapperAddCard = document.getElementById("SwapperAddCard")

    for (let i = 0; i < a.length; i++) {
        ihtml = ""
        ihtml = `
        <div class="swiper-slide" >
        <div class="card" >
        <div class="blackeffect">
        <img src="${a[i].img}" alt="">
        <div class="top1">

        </div>
        <div class="top2";">

        </div>
        <div class="middle">
        <p>${a[i].cat}</p>
        </div>
        <div class="bottom">
        <div class="item ites1">
                <i class="fa-solid fa-plus"></i>
                <p>My List</p>
        </div>
        <div class="item ites2">
                <button><i class="fa-solid fa-play"></i>Play</button>
        </div>
        <div class="item ites3">
                <i class="fa-solid fa-circle-info"></i>
                <p>Info</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
     `
        SwapperAddCard.innerHTML += ihtml
    }



}


swapperdata()


// *****************Popolar Swipper**************

let p = [
    {
        img: "Search/Popular/1.webp"
    },
    {
        img: "Search/Popular/2.webp"
    },
    {
        img: "Search/Popular/3.webp"
    },
    {
        img: "Search/Popular/4.jpeg"
    },
    {
        img: "Search/Popular/5.jpeg"
    },
    {
        img: "Search/Popular/6.jpeg"
    },
    {
        img: "Search/Popular/7.jpeg"
    },
    {
        img: "Search/Popular/8.webp"
    },
    {
        img: "Search/Popular/9.webp"
    },
    {
        img: "Search/Popular/10.jpeg"
    },


]


function popularawipper() {
   let a=document.getElementById("popularId")
    let f=true
    for (let i = 0; i < p.length; i++) {
        ihtml = ""
        ihtml =
            `
            <div class="item items${i+1}" style="background-image: url(${p[i].img});">
            </div>
    
         `
        a.innerHTML+=ihtml
        if(i==p.length-1 && f){
            i=0;
            f=false
        }
    }
}
popularawipper()


// *****************Popolar Swipper**************

let Cont = [
    {
        img: "Search/Continue/1.jpeg"
    },
    {
        img: "Search/Continue/2.webp"
    },
    {
        img: "Search/Continue/3.jpeg"
    },
    {
        img: "Search/Continue/4.webp"
    },
    {
        img: "Search/Continue/5.jpeg"
    },
    {
        img: "Search/Continue/6.jpeg"
    },
    {
        img: "Search/Continue/7.webp"
    },
    {
        img: "Search/Continue/8.webp"
    },
    {
        img: "Search/Continue/9.webp"
    },
    {
        img: "Search/Continue/10.webp"
    },


]

function continueWatching() {
    let a=document.getElementById("continueWatchingId")
     let f=true
     for (let i = 0; i < p.length; i++) {
         ihtml = ""
         ihtml =
             `
             <div class="item items${i+1}" style="background-image: url(${Cont[i].img});">
             </div>
     
          `
         a.innerHTML+=ihtml
         if(i==p.length-1 && f){
             i=0;
             f=false
         }
     }
 }

 continueWatching()

// *****************Popolar Swipper**************


 let Tren = [
    {
        img: "Search/Trending/1.jpeg"
    },
    {
        img: "Search/Trending/2.jpeg"
    },
    {
        img: "Search/Trending/3.webp"
    },
    {
        img: "Search/Trending/4.jpeg"
    },
    {
        img: "Search/Trending/5.jpeg"
    },
    {
        img: "Search/Trending/6.jpeg"
    },
    {
        img: "Search/Trending/7.webp"
    },
    {
        img: "Search/Trending/8.webp"
    },
    {
        img: "Search/Trending/9.webp"
    },
    {
        img: "Search/Trending/10.webp"
    },


]


function popular() {
    let a=document.getElementById("TrendingId")
     let f=true
     for (let i = 0; i < p.length; i++) {
         ihtml = ""
         ihtml =
             `
             <div class="item items${i+1}" style="background-image: url(${Tren[i].img});">
             </div>
     
          `
         a.innerHTML+=ihtml
         if(i==p.length-1 && f){
             i=0;
             f=false
         }
     }
 }

 popular() 


 // *****************Familiar TV**************


 let Fam = [
    {
        img: "Search/Familiar/1.jpeg"
    },
    {
        img: "Search/Familiar/2.jpeg"
    },
    {
        img: "Search/Familiar/3.jpeg"
    },
    {
        img: "Search/Familiar/4.jpeg"
    },
    {
        img: "Search/Familiar/5.webp"
    },
    {
        img: "Search/Familiar/6.jpeg"
    },
    {
        img: "Search/Familiar/7.jpeg"
    },
    {
        img: "Search/Familiar/8.webp"
    },
    {
        img: "Search/Familiar/9.jpeg"
    },
    {
        img: "Search/Familiar/10.jpeg"
    },


]


function Familiar() {
    let a=document.getElementById("FamiliarId")
     let f=true
     for (let i = 0; i < p.length; i++) {
         ihtml = ""
         ihtml =
             `
             <div class="item items${i+1}" style="background-image: url(${Fam[i].img});">
             </div>
     
          `
         a.innerHTML+=ihtml
         if(i==p.length-1 && f){
             i=0;
             f=false
         }
     }
 }

 Familiar() 



  // *****************Swoonworthy**************


  let Swo = [
    {
        img: "Search/Swoon/1.webp"
    },
    {
        img: "Search/Swoon/2.jpeg"
    },
    {
        img: "Search/Swoon/3.jpeg"
    },
    {
        img: "Search/Swoon/4.webp"
    },
    {
        img: "Search/Swoon/5.webp"
    },
    {
        img: "Search/Swoon/6.webp"
    },
    {
        img: "Search/Swoon/7.webp"
    },
    {
        img: "Search/Swoon/8.webp"
    },
    {
        img: "Search/Swoon/9.webp"
    },
    {
        img: "Search/Swoon/10.webp"
    },


]


function Swoonworthy() {
    let a=document.getElementById("SwoonworthyId")
     let f=true
     for (let i = 0; i < p.length; i++) {
         ihtml = ""
         ihtml =
             `
             <div class="item items${i+1}" style="background-image: url(${Swo[i].img});">
             </div>
     
          `
         a.innerHTML+=ihtml
         if(i==p.length-1 && f){
             i=0;
             f=false
         }
     }
 }

 Swoonworthy()

  // *****************Blockbuster**************

 function Blockbuster() {
    let a=document.getElementById("BlockbusterId")
     let f=true
     for (let i = 0; i < p.length; i++) {
         ihtml = ""
         ihtml =
             `
             <div class="item items${i+1}" style="background-image: url(${p[i].img});">
             </div>
     
          `
         a.innerHTML+=ihtml
         if(i==p.length-1 && f){
             i=0;
             f=false
         }
     }
 }
 Blockbuster()