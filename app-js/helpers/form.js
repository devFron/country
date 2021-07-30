export const Form =()=>{
    const $form = document.createElement('form')
    const $SearchBox = document.createElement('section') 
    const $searchIcon = document.createElement('i')
    const $searchInput = document.createElement('input')
    const $select = document.createElement('select')

    $form.id = 'form'
    $SearchBox.classList.add('search-box')
    $searchIcon.classList.add('fas','fa-search','search__icon')
    $searchInput.classList.add('search')
    $searchInput.name = 'search'
    $searchInput.type = 'search'
    $searchInput.id = 'search-input'
    $searchInput.placeholder = 'Search for a country...'
    $select.name = 'select'
    $select.id = 'select-region'

}