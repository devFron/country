export const header = ()=>{
    const $header = document.createElement('header')
    const $title = document.createElement('h2')
    const $darkModeBox = document.createElement('section')
    const $darkModeIcon = document.createElement('i')
    const $darkModeTitle = document.createElement('p')
    const $Fragment =document.createDocumentFragment()

    $title.classList.add('header__title')
    $darkModeBox.classList.add('dark-mode')
    $darkModeIcon.classList.add('fas','fa-moon','dark-mode__icon')
    $darkModeTitle.classList.add('dark-mode__title')
}