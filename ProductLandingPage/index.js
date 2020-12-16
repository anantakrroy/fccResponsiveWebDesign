let index = 1;
showImg(index);

function idxChange(n) {
    index += n;
    showImg(index);
}

function showImg(n) {
    let prodImg = document.getElementsByClassName("prod-img");
    if (n > prodImg.length) {
        index = 1;
    }
    if (n < 1) {
        index = prodImg.length;
    }
    for (let i = 0; i < prodImg.length; i++) {
        prodImg[i].style.display = "none";
    }
    prodImg[index - 1].style.display = "block";
}

