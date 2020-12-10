"use strict"
const arraySliders = new Set()

const sliderUniversal = (
  sliderParent,
  rightArrow,
  leftArrow,
  current,
  count = 0
) => {
  /** Slider */
  const verifySlider = (sliderParent) => {
    if (arraySliders.has(sliderParent)) {
      return
    } else {
      arraySliders.add(sliderParent)
      let slider
      let slides

      if (typeof sliderParent !== "string") {
        slides = sliderParent
        slider = document.querySelector(
          `.${sliderParent[0].parentNode.className}`
        )
      } else {
        slider = document.querySelector(sliderParent)
        slides = [...slider.children]
      }

      const right = document.getElementById(rightArrow)
      const left = document.getElementById(leftArrow)
      let currentSlider

      const getCurrentSlide = (slides) => {
        slides.some((elem, index) => {
          if (elem.style.display !== "none") {
            currentSlider.textContent = index + 1
          }
          return elem.style.display !== "none"
        })
      }

      if (current) {
        currentSlider = document.querySelector(current)
      }

      const getRightSlide = () => {
        if (currentSlider && currentSlider.textContent === "1") {
          count = 0
        }
        if (count === slides.length - 1) {
          count = -1
          slides.forEach((el) => el.removeAttribute("style"))
        } else {
          slides[count].style.display = "none"
        }

        if (currentSlider) {
          getCurrentSlide(slides)
        }
      }

      const getLeftSlide = () => {
        if (currentSlider && currentSlider.textContent === "1") {
          count = -1
        }
        if (count === -1) {
          count = slides.length - 1
          slides.forEach((el) => (el.style.display = "none"))
          slides[count].removeAttribute("style")
        } else {
          slides[count].removeAttribute("style")
        }

        if (currentSlider) {
          getCurrentSlide(slides)
        }
      }

      right.addEventListener("click", () => {
        if (slider.style.display === "block" || !slider.hasAttribute("style")) {
          getRightSlide()
          count++
        }
      })

      left.addEventListener("click", () => {
        if (slider.style.display === "block" || !slider.hasAttribute("style")) {
          count--
          getLeftSlide()
        }
      })
    }
  }

  verifySlider(sliderParent)
}

export default sliderUniversal
