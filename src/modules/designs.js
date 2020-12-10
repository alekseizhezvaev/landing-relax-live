"use strict"
import sliderUniversal from "./sliderUniversal"

const designs = () => {
  const designs = document.getElementById("designs")
  const designsList = document.getElementById("designs-list")
  const designsSlider = document.querySelector(".designs-slider")
  const previewBlocks = document.querySelectorAll(".preview-block")
  const sliderCounterContentCurrent =
    "#designs-counter .slider-counter-content__current"
  const sliderCounterContentTotal = document.querySelector(
    "#designs-counter .slider-counter-content__total"
  )
  const designLeft = "design_left"
  const designRight = "design_right"
  const designsSliderArray = [...designsSlider.children]
  const designsListArray = [...designsList.children]
  const previewBlocksArray = [...previewBlocks]

  sliderUniversal(
    `.designs-slider__style1`,
    designRight,
    designLeft,
    sliderCounterContentCurrent
  )

  //**Пагинация для слайдера */
  const pagination = (targetTab, childrensArray) => {
    childrensArray.forEach((elSlide, indexSlide) => {
      previewBlocksArray.forEach((elem, index, array) => {
        elem.style.display = "none"

        if (designsListArray.indexOf(targetTab) === index) {
          const imgArray = [...array[index].children]
          array[index].style.display = "flex"
          imgArray.forEach((el, index) => {
            if (indexSlide === index) {
              el.children[1].src = elSlide.children[0].src
            }
          })
        }
      })
    })
  }

  //**Выбрать текущий слайд по табу */
  const getCurrentSlide = (targetTab) => {
    designsSliderArray.forEach((elem, index, array) => {
      elem.style.display = "none"

      if (designsListArray.indexOf(targetTab) === index) {
        const childrensArray = [...array[index].children]
        childrensArray.forEach((elem) => {
          elem.style.display = "block"
        })
        pagination(targetTab, childrensArray)
        document.querySelector(
          "#designs-counter .slider-counter-content__current"
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
  }

  //**Получить текущий дизайн по пагинации*/
  const getCurrentDesignImg = (targetTab) => {
    let parentTargetTab = targetTab.parentNode,
      previewBlock = [...parentTargetTab.parentNode.children]

    previewBlock.forEach((elem) => {
      let childrenElem = [...elem.children]
      childrenElem[0].classList.remove("preview_active")
    })

    designsSliderArray.forEach((elem) => {
      if (
        (elem.style.display === "block" && elem.style.display !== "none") ||
        (elem.className === "designs-slider__style1" &&
          !elem.hasAttribute("style"))
      ) {
        let elemParent = [...elem.children]
        elemParent.forEach((item, index, array) => {
          item.style.display = "none"
          if (previewBlock.indexOf(targetTab.parentNode) === index) {
            array[index].style.display = "block" //**Текущий слайд по пагинации */
          }
        })
      }
    })

    targetTab.classList.add("preview_active")
  }

  //**Событие на контейнер дизайн */
  designs.addEventListener("click", (event) => {
    let target = event.target

    if (
      target.closest("#designs-list") &&
      target.matches(".designs-nav__item_base")
    ) {
      designsListArray.forEach((elem) => {
        elem.classList.remove("active")
      })
      target.classList.add("active")
      getCurrentSlide(target)
    } else if (
      target.closest("#designs") &&
      target.matches(".preview-block__item-inner")
    ) {
      getCurrentDesignImg(target)
    }
  })
}

export default designs
