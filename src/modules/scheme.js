"use strict"

const scheme = () => {
  const scheme = document.getElementById("scheme")
  const descriptionBlocks = document.querySelectorAll(
    "#scheme .scheme-description-block"
  )
  const schemeSlider = document.querySelector("#scheme .scheme-slider")
  const schemeSliderChildren = [...schemeSlider.children]

  const getCurrentSlide = (targetTab) => {
    const parentTargetTab = targetTab.parentNode
    const childrens = [...parentTargetTab.children]
    childrens.forEach((elTab) => {
      elTab.classList.remove("active")

      schemeSliderChildren.forEach((elSlide, indexSlide, arraySlide) => {
        elSlide.style.display = "none"

        if (childrens.indexOf(targetTab) === indexSlide) {
          arraySlide[indexSlide].style.display = "block"
        }
      })

      descriptionBlocks.forEach((elBlock, indexBlock, arrayBlock) => {
        elBlock.style.display = "none"

        if (childrens.indexOf(targetTab) === indexBlock) {
          arrayBlock[indexBlock].style.display = "block"
        }
      })
    })
    targetTab.classList.add("active")
  }

  scheme.addEventListener("click", (event) => {
    let target = event.target

    if (target.matches(".scheme-nav__item")) {
      getCurrentSlide(target)
    }
  })
}

export default scheme
