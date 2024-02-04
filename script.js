
//todo ----------------------------- NavBar ------------------------------ todo//

/*! *********************[Navsearch]********************* */

function navsearch() {

    let a = document.querySelectorAll("#box1id")[0]
    let b = document.getElementsByClassName("inp_div")[0]
    let c = document.querySelectorAll("#topnavsearchId")[0]
    let d = document.querySelectorAll("#navsearchId")[0]
    console.log(a)
    if (a.className == "box1") {
        a.className += " active"
        c.className += " topnavsearchactive"

        d.className += " navsearchactive"
        b.style.display = "block"
    }
    else {
        a.className = "box1"
        c.className = "topnavsearch"
        d.className = "navsearch"
        b.style.display = "none"
    }

}

/*! *********************[Touch anywhere to close it]********************* */
function hideall() {
    let a = document.querySelectorAll("#box1id")[0]
    let c = document.querySelectorAll("#topnavsearchId")[0]
    let d = document.querySelectorAll("#navsearchId")[0]
    let b = document.getElementsByClassName("inp_div")[0]
    a.className = "box1"
    c.className = "topnavsearch"
    d.className = "navsearch"
    b.style.display = "none"


    let aa = document.getElementsByClassName("small_box4")[0]
    aa.style.display = "none"
    let bb = document.querySelectorAll("#navdownid")[0]
    bb.className = `fa-solid fa-caret-down`


    let brow_nav = document.getElementsByClassName("browsernav")[0]
    brow_nav.style.display = "none"
    let b_up = document.querySelectorAll("#browserdnid")[0]
    b_up.className = `fa-solid fa-caret-down`
}

/*! *********************[Mobile Responsive Nav]********************* */
function respon_nav() {

    let a = document.querySelectorAll("#Logo_id")[0]

    let d = document.getElementById("Logo_id")
    let b = document.querySelectorAll("#right_widthid")[0]
    let c = document.getElementsByClassName("topnavsearch")[0]
    let e = document.getElementsByClassName("boxx1")[0]
    let f = document.getElementsByClassName("box3")[0]
    if (document.body.offsetWidth < 650) {
        if (a.className == "Logo") {
            a.className += " Logoactive"
        }
        d.innerHTML = `<img src="img/N.png" alt="">`
        if (b.className == "right_width") {
            b.className += " right_widthactive"
        }
        c.style.display = "none"
        f.style.display = "none"

    }
    else {
        d.innerHTML = `<img src="img/pngwing.com.png" alt="">`
        a.className = "Logo"
        b.className = "right_width"
        e.style.display = "none"
    }


}
respon_nav()


/*! *********************[User Right Up Down Control]********************* */

function showbox4nav() {
    let a = document.getElementsByClassName("small_box4")[0]
    let b = document.querySelectorAll("#navdownid")[0]
    if (document.body.offsetWidth > 1030) {
        a.style.display = "block"
        b.className = `fa-solid fa-caret-up`
    }

    let brow_nav = document.getElementsByClassName("browsernav")[0]
    brow_nav.style.display = "none"
    let b_up = document.querySelectorAll("#browserdnid")[0]
    b_up.className = `fa-solid fa-caret-down`

}

function showbox4fullnav() {
    let a = document.getElementsByClassName("small_box4")[0]
    let b = document.querySelectorAll("#navdownid")[0]

    if (a.style.display == "none" || a.style.display == "") {
        a.style.display = "block"
        b.className = `fa-solid fa-caret-up`
    }
    else {
        a.style.display = "none"
        b.className = `fa-solid fa-caret-down`
    }




    let brow_nav = document.getElementsByClassName("browsernav")[0]
    brow_nav.style.display = "none"
    let b_up = document.querySelectorAll("#browserdnid")[0]
    b_up.className = `fa-solid fa-caret-down`

}


/*! *********************[Browser Nav]********************* */



function browsernav() {
    console.log("Hello")
    let a = document.getElementsByClassName("browsernav")[0]
    let b = document.querySelectorAll("#browserdnid")[0]
    if (a.style.display == "none" || a.style.display == "") {
        a.style.display = "block"
        b.className = `fa-solid fa-caret-up`
    }
    else {
        a.style.display = "none"
        b.className = `fa-solid fa-caret-down`
    }

    let aa = document.getElementsByClassName("small_box4")[0]
    aa.style.display = "none"
    let bb = document.querySelectorAll("#navdownid")[0]
    bb.className = `fa-solid fa-caret-down`
}




//todo ----------------------------- Banner ------------------------------ todo//


let bannerVideo = document.getElementById("bannerVid")

let source = document.querySelectorAll("#bannerVid")[0].children[0]

source.src = "video/Avengers Endgame Official Trailer Hindi In Cinemas April 26.mp4#t=0,142"

bannerVideo.poster = "https://wallpapercave.com/wp/wp10317843.jpg"


setTimeout(async () => {
    let a = await bannerVideo.load()
    let b = await bannerVideo.play()
}, 500)

document.querySelectorAll(".volume")[0].children[0].className = "fa-solid fa-volume-xmark"

function bannervolume() {
    let a = document.querySelectorAll(".volume")[0].children[0]
    if (a.className == "fa-solid fa-volume-high") {
        bannerVideo.muted = true
        a.className = "fa-solid fa-volume-xmark"
    }
    else {
        bannerVideo.muted = false
        a.className = "fa-solid fa-volume-high"
    }
}



//todo ----------------------------- MoreinfoBanner------------------------------ todo//



function moreinfopop() {
    let a = document.getElementById("moreInfoId")

    if (a.style.display == "none" || a.style.display == "") {
        a.style.display = "block"
    }
    else {
        a.style.display = "none"
    }
}

function moreinfoclose() {
    let a = document.getElementById("moreInfoId")
    a.style.display = "none"
}

//todo ----------------------------- ScollNavBag------------------------------ todo//

let header = document.getElementsByClassName("header")[0]

setInterval(() => {
    let ScrollId = document.getElementById("ScrollId")
    if (ScrollId.scrollTop > 0) {
        header.style.backgroundColor = "#000"
    }
    else {
        header.style.backgroundColor = "transparent"
    }
}, 100)

setInterval(() => {
    let ScrollId = document.getElementById("ScrollId")
    let bannerVideo = document.getElementById("bannerVid")
    if (ScrollId.scrollTop > 528) {
        bannerVideo.pause();
    }
    else {
        bannerVideo.play();
    }
}, 100)