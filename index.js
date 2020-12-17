
// Image slideshow

let index = 1;
showImg(index);

function idxChange(n) {
    index += n;
    showImg(index);
}

function showImg(n) {
    let prodImgs = document.getElementsByClassName("prod-img");
    if (n > prodImgs.length) {
        index = 1;
    }
    if (n < 1) {
        index = prodImgs.length;
    }
    for (let i = 0; i < prodImgs.length; i++) {
        prodImgs[i].style.display = "none";
    }
    prodImgs[index - 1].style.display = "block";
}


// Mobile Navbar
function showMenu(elem) {
    console.log(elem.children[3].id);
    elem.children[3].id = elem.children[3].id !== "mobile-menu" ? "mobile-menu" : "hide-menu";
    elem.classList.toggle("anim");
}