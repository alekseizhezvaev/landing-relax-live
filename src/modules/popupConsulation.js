"use strict"
const popupConsulation = () => {
  const popupConsultation = document.querySelector(".popup-consultation")

  document.querySelector("body").addEventListener("click", (event) => {
    let target = event.target

    if (
      target.matches("button") &&
      target.textContent.trim() === "Проконсультироваться"
    ) {
      popupConsultation.style.visibility = "visible"
      document.querySelector("body").style.overflow = "hidden"
    } else if (
      target.matches(".close") &&
      target.closest(".popup-consultation")
    ) {
      popupConsultation.removeAttribute("style")
      document.querySelector("body").removeAttribute("style")
    }
  })
}

export default popupConsulation
