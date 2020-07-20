const vars = {
    button: document.querySelector('#rsvp'),
    xBtn: document.querySelector('#x-btn'),
    modal: document.querySelector('#modal')
}

vars.button.addEventListener('click', () => {
    modal.classList.add('active-modal')
    vars.xBtn.classList.remove('x-btn-close')
    console.log(modal)
})

vars.xBtn.addEventListener('click', () => {
    console.log(vars.xBtn)
    modal.classList.remove('active-modal')
    vars.xBtn.classList.add('x-btn-close')
})

