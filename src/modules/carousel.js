"use strict"
class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = []
  }) {
    this.main = document.querySelector(main)
    this.wrap = document.querySelector(wrap)
    this.slides = document.querySelector(wrap).children
    this.next = document.querySelector(next)
    this.prev = document.querySelector(prev)
    this.slidesToShow = slidesToShow
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow
    }
    this.responsive = responsive
  }

  init() {
    this.addGloClass()
    this.addStyle()
    this.controlSlider()

    if (this.responsive) {
      this.responseInit()
    }
  }

  addGloClass() {
    this.main.classList.add("glo-slider")
    this.wrap.classList.add("glo-slider__wrap")
    for (const item of this.slides) {
      item.classList.add("glo-slider__item")
    }
  }

  addStyle() {
    let style = document.getElementById("sliderCarousel-style")
    if (!style) {
      style = document.createElement("style")
      style.id = "sliderCarousel-style"
    }

    style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }

            .glo-slider__wrap {
                display: flex;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }

            .glo-slider__item{
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `
    document.head.appendChild(style)
  }

  controlSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this))
    this.next.addEventListener("click", this.nextSlider.bind(this))
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`
    }
  }

  nextSlider() {
    if (
      this.options.infinity ||
      this.options.position < this.options.maxPosition
    ) {
      ++this.options.position
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow
    const allResponse = this.responsive.map((item) => item.breakpoint)
    const maxResponse = Math.max(...allResponse)

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slideToShow
            this.options.widthSlide = Math.floor(100 / this.slidesToShow)
            this.addStyle()
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault
        this.options.widthSlide = Math.floor(100 / this.slidesToShow)
        this.addStyle()
      }
    }

    checkResponse()

    window.addEventListener("resize", checkResponse)
  }
}

export const carousel = () => {
  new SliderCarousel({
    main: "#partners .partners-wrapper",
    wrap: "#partners .partners-slider",

    prev: "#partners-arrow_left",
    next: "#partners-arrow_right",

    infinity: true,

    responsive: [
      {
        breakpoint: 1024,
        slideToShow: 3
      },
      {
        breakpoint: 768,
        slideToShow: 2
      },
      {
        breakpoint: 576,
        slideToShow: 1
      }
    ]
  }).init()
}
