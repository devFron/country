export const CheckDarkMode = ()=>{
    if(localStorage.getItem('dark-mode-country')==='true'){
        document.querySelector('body').classList.add('body__dark')
        document.querySelector('header').classList.add('header__dark')
        document.querySelector('.header__title').classList.add('header__title__dark')
        document.querySelector('form').classList.add('form__dark')
        document.querySelector('.search-box').classList.add('search-box__dark')
        document.querySelector('.search').classList.add('search__dark')
        document.querySelector('.countries').classList.add('countries__dark')
        document.querySelectorAll('.country').forEach((el)=>{
            el.classList.add('country__dark')
        })
        document.querySelector('.country-box').classList.add('countries__dark')
        document.querySelector('.a-country').classList.add('a-country__dark')
        document.querySelector('.a-country__button').classList.add('a-country__button__dark')
        document.querySelector('.border-countries__country').classList.add('border-countries__country__dark')
    }else{
        document.querySelector('body').classList.remove('body__dark')
        document.querySelector('header').classList.remove('header__dark')
        document.querySelector('.header__title').classList.remove('header__title__dark')
        document.querySelector('form').classList.remove('form__dark')
        document.querySelector('.search-box').classList.remove('search-box__dark')
        document.querySelector('.search').classList.remove('search__dark')
        document.querySelector('.countries').classList.remove('countries__dark')
        document.querySelectorAll('.country').forEach((el)=>{
            el.classList.remove('country__dark')
        })
        document.querySelector('.country-box').classList.remove('countries__dark')
        document.querySelector('.a-country').classList.remove('a-country__dark')
        document.querySelector('.a-country__button').classList.remove('a-country__button__dark')
        document.querySelector('.border-countries__country').classList.remove('border-countries__country__dark')

    }
}

