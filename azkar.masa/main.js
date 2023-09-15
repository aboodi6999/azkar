




const whenClick = document.querySelectorAll(".when-click")
const azkars = document.querySelector(".azkars")
const counter = document.querySelector(".counter")
const done = document.querySelector(".done")


let count = whenClick.length
counter.innerText = count
azkars.addEventListener("click", (eo) => {

  if (eo.target.className == "none") {
    let gg = Number(eo.target.parentElement.querySelector(".number").innerText)
    gg--

    if (gg >= 0) {
      eo.target.parentElement.querySelector(".number").innerText = gg
      if (gg == 0) {
        count--
        counter.innerText = count
        eo.target.parentElement.classList.add("transform");

        setTimeout(() => {
          eo.target.parentElement.classList.add("remove");
        }, 1000)
      }
    }

    if (count == 0) {
      setTimeout(() => {
        done.style.display = "block"

      }, 700)
    }
  }

  if (eo.target.classList == "copyButton") {
    // var textElement = document.querySelectorAll(".textToCopy");
    var copyButton = document.querySelectorAll(".copyButton");
    var confirmationMessage = document.getElementById("confirmationMessage");

      var text = eo.target.parentElement.parentElement.parentElement.querySelector(".text").innerText;
      navigator.clipboard.writeText(text).then(function () {
        eo.target.innerText = "تم النسخ"
        setTimeout(function () {
         eo.target.innerText = "نسخ"

        }, 2000);
      }, function (err) {
        console.error("حدث خطأ أثناء نسخ النص: ", err);
      });
  }

})

function resetBrowser() {
  location.reload(); // أو location.href = location.href;
}

const menu = document.querySelector(".fa-solid")
const drop = document.querySelector(".drop")
const body = document.querySelector("body")
const transperant = document.querySelector(".transperant")
const fasolid = document.querySelector(".fa-solid")

menu.addEventListener("click", (eo) => {
  drop.classList.add("block")
  transperant.classList.add("block")
  // fasolid.style.zIndex = "6"
})

transperant.addEventListener("click", (eo) => {
  drop.classList.remove("block")
  transperant.classList.remove("block")
})



