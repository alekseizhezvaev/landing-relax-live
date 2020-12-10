"use strict"

const telephones = () => {
  const butArrow = document.querySelector(".header-contacts__arrow")

  const headerPhoneAccord = document.querySelector(
    ".header-contacts__phone-number-accord"
  )
  const headerPhoneNumber = document.querySelector(
    ".header-contacts__phone-number-accord .header-contacts__phone-number"
  )

  const openNewNumberPhone = (btnArrow) => {
    btnArrow.classList.add("custom-header-contacts__arrow")
    headerPhoneAccord.classList.add(
      "custom-header-contacts__phone-number-accord"
    )
    headerPhoneNumber.classList.add("custom-header-contacts__phone-number")
  }

  const closeNewNumberPhone = (btnArrow) => {
    btnArrow.classList.remove("custom-header-contacts__arrow")
    headerPhoneAccord.classList.remove(
      "custom-header-contacts__phone-number-accord"
    )
    headerPhoneNumber.classList.remove("custom-header-contacts__phone-number")
  }

  butArrow.addEventListener("click", function () {
    if (this.classList.contains("custom-header-contacts__arrow")) {
      closeNewNumberPhone(this)
    } else {
      openNewNumberPhone(this)
    }
  })
}

export default telephones
