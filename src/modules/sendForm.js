"use strict"

const sendForm = () => {
  const forms = document.querySelectorAll("form")
  const popupThank = document.querySelector(".popup-thank")
  const popupConsultation = document.querySelector(".popup-consultation")
  const inputs = document.querySelectorAll("input")

  const errorMessage = "Что то пошло не так...", //Сообщения для вывода статуса отправки
    loadMessage = "Отправка...",
    warnCheck = "Поставьте галочку",
    warnPhone = "Введите корректный номер телефона"

  const statusMessage = document.createElement("div")

  popupThank.addEventListener("click", (event) => {
    let target = event.target

    if (target.matches(".close-thank") && target.closest(".popup-thank")) {
      popupThank.removeAttribute("style")
      document.querySelector("body").removeAttribute("style")
    }
  })

  const postData = (body) => {
    //Возвращает запрос на сервер
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
  }

  forms.forEach((form) => {
    const policy = form.querySelector(".checkbox__input"),
      phone = form.querySelector('[name="phone"]')

    phone.addEventListener("input", () => {
      console.log(phone.value.length)
    })

    phone.required = true
    policy.removeAttribute("required")

    form.addEventListener("submit", (event) => {
      event.preventDefault()

      const policy = form.querySelector(".checkbox__input"),
        phone = form.querySelector('[name="phone"]')

      if (!policy.checked) {
        //**Проверка на чекбокс */
        form.appendChild(statusMessage)
        statusMessage.style.cssText = `font-size: 14px;
    color:red`
        statusMessage.textContent = warnCheck
      } else if (phone.value.length < 18) {
        //**Проверка на корректность введённого номера */
        form.appendChild(statusMessage)
        statusMessage.style.cssText = `font-size: 14px;
    color:red`
        statusMessage.textContent = warnPhone
      } else {
        statusMessage.textContent = loadMessage
        form.appendChild(statusMessage)
        statusMessage.style.cssText = `font-size: 14px;
        color:black`

        const formData = new FormData(form)
        let body = {}
        formData.forEach((val, key) => {
          body[key] = val
        })

        postData(body) // Вызываю запрос на сервер, который принимает данные с formData
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("status network not 200")
            } else {
              document.querySelector("body").removeAttribute("style")
              popupConsultation.removeAttribute("style")
              statusMessage.textContent = ""
              popupThank.style.visibility = "visible"
              document.querySelector("body").style.overflow = "hidden"

              inputs.forEach((elem) => (elem.value = ""))
            }
          })
          .catch((error) => {
            //Функция для вывода ошибки
            statusMessage.textContent = errorMessage
            setTimeout(() => {
              statusMessage.textContent = ""
            }, 3000)
            console.error(error)
          })
      }
    })
  })
}

export default sendForm
