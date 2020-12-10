"use strict"
/**
 * Description for makeDownTooltipNodes
 * @param {HTMLElement} iconBtn
 * @param {'add'|'remove'} action
 */
const makeDownTooltipNodes = (iconBtn, action, span, popup) => {
  const parentIconBtn = iconBtn.parentNode /** as .formula-item */
  const popupNode = parentIconBtn.querySelector(popup)
  const spanNode = parentIconBtn.querySelector(span)

  spanNode.classList[action]("custom-down-tooltip-item__icon")
  parentIconBtn.classList[action]("custom-down-tooltip-item")
  popupNode.classList[action]("custom-down-tooltip-item-popup")
  iconBtn.classList[action]("custom-down-tooltip-item__icon")
  iconBtn.parentNode.classList[action]("active-item")
}

const tooltip = (selector, popup, span) => {
  const iconAsBtns = document.querySelectorAll(selector)

  iconAsBtns.forEach((iconBtn) => {
    iconBtn.addEventListener("mouseenter", function () {
      const currentPopup = this.querySelector(popup)

      if (currentPopup.getBoundingClientRect().top < 0) {
        makeDownTooltipNodes(this, "add", span, popup)
      } else {
        currentPopup.classList.add("custom-up-tooltip-item-popup")
        iconBtn.parentNode.classList.add("active-item")
      }
    })

    iconBtn.addEventListener("mouseout", function () {
      const currentPopup = this.querySelector(popup)

      if (currentPopup.classList.contains("custom-down-tooltip-item-popup")) {
        makeDownTooltipNodes(this, "remove", span, popup)
      } else {
        currentPopup.classList.remove("custom-up-tooltip-item-popup")
        iconBtn.parentNode.classList.remove("active-item")
      }
    })
  })
}

export default tooltip
