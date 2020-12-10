"use strict"

export class Slider {
  constructor({ wrap, parent, left, right, overrideCss }) {
    this.count = 0
    this.wrap = wrap
    this.parent = parent
    this.left = left
    this.right = right

    if (overrideCss && overrideCss.parent) {
      this.parent.style.cssText = overrideCss.parent
    }
  }

  clickOnLeft() {
    this.left.addEventListener("click", () => {
      if (this.count === 0) {
        this.count = this.getChildLength - 1
      } else {
        this.count--
      }
      this.translateLeft(this.count)
    })
  }

  clickOnRight() {
    this.right.addEventListener("click", () => {
      if (this.count === this.getChildLength - 1) {
        this.count = 0
      } else {
        this.count++
      }
      this.translateLeft(this.count)
    })
  }

  start() {
    this.clickOnLeft()
    this.clickOnRight()
    this.translateLeft(0)
  }

  getWidthByCurrentIndex(index) {
    if (!index) {
      return 0
    }

    return this.getChildWidth.reduce((acc, el, i, array) => {
      let gap = this.getChildGap * 2

      if (i < index) {
        acc = acc + el + gap

        return acc
      }

      return acc
    }, 0)
  }

  translateLeft(offset) {
    let translateX = this.getWidthByCurrentIndex(offset)
    this.parent.style.transform = `translateX(-${translateX}px)`
  }

  get getChildWidth() {
    return [...this.parent.children].map((item) => item.clientWidth)
  }

  get getChildGap() {
    const allChildWidth = this.getChildWidth.reduce((acc, el) => {
      acc = acc + el

      return acc
    }, 0)

    let gap =
      (this.parent.clientWidth - allChildWidth) / this.getChildLength / 2

    return gap
  }

  get getChildLength() {
    return this.getChildWidth.length
  }
}

export const SliderTabs = () => {
  new Slider({
    wrap: document.querySelector("#scheme .nav-wrap"),
    parent: document.querySelector("#scheme-list"),
    left: document.querySelector("#nav-arrow-scheme_left"),
    right: document.querySelector("#nav-arrow-scheme_right")
  }).start()

  new Slider({
    wrap: document.querySelector("#repair-types .nav-wrap"),
    parent: document.querySelector("#repair-types .nav-list-repair"),
    left: document.querySelector("#nav-arrow-repair-left_base"),
    right: document.querySelector("#nav-arrow-repair-right_base")
  }).start()

  new Slider({
    wrap: document.querySelector("#designs .nav-wrap"),
    parent: document.querySelector("#designs-list"),
    left: document.querySelector("#nav-arrow-designs_left"),
    right: document.querySelector("#nav-arrow-designs_right")
  }).start()

  new Slider({
    wrap: document.querySelector(".popup-dialog-repair-types .nav-wrap"),
    parent: document.querySelector(".nav-list-popup-repair"),
    left: document.querySelector("#nav-arrow-popup-repair_left"),
    right: document.querySelector("#nav-arrow-popup-repair_right")
  }).start()

  new Slider({
    wrap: document.querySelector(".popup-dialog-design .nav-wrap"),
    parent: document.querySelector("#nav-list-popup-designs"),
    left: document.querySelector("#nav-arrow-popup-designs_left"),
    right: document.querySelector("#nav-arrow-popup-designs_right")
  }).start()
}
