export const Form =()=>{
    const $form = document.createElement('form')
    const $SearchBox = document.createElement('section') 
    const $searchIcon = document.createElement('i')
    const $searchInput = document.createElement('input')
    const $select = document.createElement('select')
    const $Fragment = document.createDocumentFragment()
    const continentsOfTheWorld = [
        'Filter by Region',
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania'
    ]
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

    continentsOfTheWorld.forEach(el => {
        const $option = document.createElement('option')
        $option.value = el
        $option.textContent = el
        $select.appendChild($option)
    });
    $SearchBox.appendChild($searchIcon)
    $SearchBox.appendChild($searchInput)
    $form.appendChild($SearchBox)
    $form.appendChild($select)
    $Fragment.appendChild($form)
    
    return $Fragment
}