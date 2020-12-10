"use strict"
import sliderUniversal from "./sliderUniversal"

const popupDesigns = () => {
  const popupDesign = document.querySelector(".popup-design")
  const navListPopupDesigns = document.getElementById("nav-list-popup-designs")
  const designsSlider = document.querySelector(".popup-design-slider")
  const sliderCounterContentCurrent =
    "#popup-designs-counter .slider-counter-content__current"
  const sliderCounterContentTotal = document.querySelector(
    "#popup-designs-counter .slider-counter-content__total"
  )
  const popupDesignText = document.querySelectorAll(".popup-design-text")
  const designLeft = "popup_design_left"
  const designRight = "popup_design_right"
  const popupDesignTextArray = [...popupDesignText]
  const designsSliderArray = [...designsSlider.children]
  const designsListArray = [...navListPopupDesigns.children]
  sliderCounterContentTotal.textContent = 2

  sliderUniversal(
    `.popup-designs-slider__style1`,
    designRight,
    designLeft,
    sliderCounterContentCurrent
  )

  const getCurrentSlide = (targetTab) => {
    designsSliderArray.forEach((elem, index, array) => {
      elem.style.display = "none"

      if (designsListArray.indexOf(targetTab) === index) {
        const childrensArray = [...array[index].children]
        childrensArray.forEach((elem) => {
          elem.style.display = "block"
        })
        //**Текущий слайд = 1 при переключении таба */
        document.querySelector(
          "#popup-designs-counter .slider-counter-content__current"
        ).textContent = 1
        array[index].style.display = "block"
        sliderUniversal(
          `.${array[index].className}`,
          designRight,
          designLeft,
          sliderCounterContentCurrent
        )
        sliderCounterContentTotal.textContent = array[index].children.length
      }
    })
    popupDesignTextArray.forEach((elem, index, array) => {
      elem.classList.remove("visible-content-block")

      if (designsListArray.indexOf(targetTab) === index) {
        elem.classList.add("visible-content-block")
      }
    })
  }

  document.querySelector("body").addEventListener("click", (event) => {
    let target = event.target

    if (target.matches(".link-list-designs a")) {
      popupDesign.style.visibility = "visible"
      document.querySelector("body").style.overflow = "hidden"
    } else if (target.matches(".close") && target.closest(".popup-design")) {
      popupDesign.removeAttribute("style")
      document.querySelector("body").removeAttribute("style")
    }

    if (
      target.closest("#nav-list-popup-designs") &&
      target.matches(".designs-nav__item")
    ) {
      designsListArray.forEach((elem) => {
        elem.classList.remove("active")
      })
      target.classList.add("active")
      getCurrentSlide(target)
    }
  })
}

export default popupDesigns
