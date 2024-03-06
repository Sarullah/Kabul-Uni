const contactForm = document.getElementById("contact_form");
const joinBtn = document.getElementById("joinBtn")
joinBtn.addEventListener('click', () => {
    contactForm.classList.toggle("join")
})

// ======= Teachers ============
// const contactLink = document.querySelectorAll(".contactLink a")
// console.log(contactLink)
// contactLink.forEach(function(a) {
//     a.addEventListener('mouseover', () => {
//         a.classList.add("linkIcon")

//     })

// })