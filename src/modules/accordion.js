"use strict"

const accordion = () => {
  const faq = document.getElementById("faq")
  const msg = document.querySelectorAll(".msg")

  const getMsgBlock = (target) => {
    if (target.parentNode.children[1].classList.contains("custom-msg")) {
      target.parentNode.children[1].classList.remove("custom-msg")
    } else {
      msg.forEach((elem) => {
        elem.classList.remove("custom-msg")
      })

      target.parentNode.children[1].classList.add("custom-msg")
    }
  }

  faq.addEventListener("click", (event) => {
    let target = event.target

    if (target.matches(".title_block") && target.closest("LI")) {
      getMsgBlock(target)
    }
  })
}

export default accordion
