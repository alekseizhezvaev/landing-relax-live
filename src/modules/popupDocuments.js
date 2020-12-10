"use strict"
import sliderUniversal from "./sliderUniversal"

const popupDocuments = () => {
  const popupTransparency = document.querySelector(".popup-transparency")
  const popupTransparencySlider = ".popup-transparency-slider"
  const sliderCounterContentCurrent =
    "#transparency-popup-counter .slider-counter-content__current"
  const sliderCounterContentTotal = document.querySelector(
    "#transparency-popup-counter .slider-counter-content__total"
  )
  const transparencyLeft = "transparency_left"
  const transparencyRight = "transparency_right"

  document.querySelector("body").addEventListener("click", (event) => {
    let target = event.target

    if (target.matches(".transparency-item__img")) {
      document.querySelector(
        "#transparency-popup-counter .slider-counter-content__current"
      ).textContent = 1
      sliderCounterContentTotal.textContent = document.querySelector(
        ".popup-transparency-slider"
      ).children.length
      popupTransparency.style.visibility = "visible"
      document.querySelector("body").style.overflow = "hidden"
    } else if (
      target.matches(".close") &&
      target.closest(".popup-transparency")
    ) {
      popupTransparency.removeAttribute("style")
      document.querySelector("body").removeAttribute("style")
    }
  })

  sliderUniversal(
    popupTransparencySlider,
    transparencyRight,
    transparencyLeft,
    sliderCounterContentCurrent
  )
}

export default popupDocuments
