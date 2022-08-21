const hideCard = () => {
    let target = document.querySelector('.unhide')
    target.classList.remove('unhide')
}
const closeCard = () => {
    let target = document.querySelectorAll('.popContainer')
    for (let i = 0; i < target.length; i++) 
    {
        target[i].classList.remove('unhide')
    }
}
const showAbout = () => {
    let target = document.querySelector('.about')
    target.classList.toggle('unhide')
}
const showProject = () => {
    let target = document.querySelector('.project')
    target.classList.toggle('unhide')
}
const showResume = () => {
    let target = document.querySelector('.resume')
    target.classList.toggle('unhide')
}
const showContact = () => {
    let target = document.querySelector('.contact')
    target.classList.toggle('unhide')
}
const showSocial = () => {
    let target = document.querySelector('.social')
    target.classList.toggle('unhide')
}





