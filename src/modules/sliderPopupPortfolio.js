"use strict"

const sliderPopupPortfolio = () => {
  /** Slider */
  const slider = document.querySelector(
    ".popup-portfolio .popup-portfolio-slider"
  )
  const right = document.getElementById("popup_portfolio_right")
  const left = document.getElementById("popup_portfolio_left")
  const slideCountPortfolioTotal = document.getElementById(
    "slideCountPortfolioTotal"
  )
  const popupPortfolioText = document.querySelectorAll(
    ".popup-portfolio .popup-portfolio-text"
  )
  const currentSlider = document.getElementById("slideCountPortfolioCurrent")
  const childsPopupPortfolioText = [...popupPortfolioText]
  const slides = [...slider.children]
  let count

  const getCount = () => {
    slides.forEach((el, index) => {
      if (el.style.display === "block") {
        count = index
      }
    })
  }

  slideCountPortfolioTotal.textContent = slides.length

  const getCurrentSlide = (slides) => {
    slides.some((elem, index) => {
      if (elem.style.display === "block") {
        currentSlider.textContent = index + 1
      }
      return elem.style.display !== "none"
    })
  }

  const getRightSlide = () => {
    getCount()
    if (count === slides.length - 1) {
      count = -1

      slides.forEach((el) => (el.style.display = "none"))
      slides[0].style.display = "block"

      childsPopupPortfolioText.forEach((el) => (el.style.display = "none"))
      childsPopupPortfolioText[0].style.display = "block"
    } else {
      slides.forEach((el) => (el.style.display = "none"))
      slides[count + 1].style.display = "block"

      childsPopupPortfolioText.forEach((el) => (el.style.display = "none"))
      childsPopupPortfolioText[count + 1].style.display = "block"
    }
    getCurrentSlide(slides)
  }

  const getLeftSlide = () => {
    getCount()
    if (count === 0) {
      count = slides.length - 1

      slides.forEach((el) => (el.style.display = "none"))
      slides[count].style.display = "block"

      childsPopupPortfolioText.forEach((el) => (el.style.display = "none"))
      childsPopupPortfolioText[count].style.display = "block"
    } else {
      slides.forEach((el) => (el.style.display = "none"))
      slides[count - 1].style.display = "block"

      childsPopupPortfolioText.forEach((el) => (el.style.display = "none"))
      childsPopupPortfolioText[count - 1].style.display = "block"
    }
    getCurrentSlide(slides)
  }

  right.addEventListener("click", () => {
    getRightSlide()
  })

  left.addEventListener("click", () => {
    getLeftSlide()
  })
}

export default sliderPopupPortfolio
