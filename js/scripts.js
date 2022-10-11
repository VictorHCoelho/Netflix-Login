const learnMoreBtn = document.querySelector("#learn-more")
const learnMoreContainer = document.querySelector(".recaptcha-saibaMais")

learnMoreBtn.addEventListener('click', () => {
    learnMoreBtn.style.visibility = 'hidden'
    learnMoreContainer.classList.add('visible')
})