// スクロールアニメーション
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight *0.6
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})


const headerElement = document.getElementById("header");

// スクロールしたらヘッダーが出るようにする
document.addEventListener("scroll", function() {
    if (document.getElementById("hero").getBoundingClientRect().bottom < 0) {
        headerElement.classList.add("active");
    } else {
        headerElement.classList.remove("active");
    }
});


// テキストアニメーション
const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i],
          texts = targetElement.textContent,
          textsArray = [];
    
    targetElement.textContent = "";
    
    //空の配列の中にspanタグで囲った文字列を入れる(空白がある場合、空白の部分はspanタグを付けないようにする)
    for (let j = 0; j < texts.split("").length; j++) {
        const t = texts.split("")[j];
        if (t === " ") {
            textsArray.push(" ");
        } else {
            textsArray.push('<span><span style="animation-delay: ' + (j * 0.1) + 's;">' + t + '</span></span>')
        } 
    }

    //spanタグで囲った文字列の数分元に戻す
    for (let k= 0; k < textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k];
    }
}