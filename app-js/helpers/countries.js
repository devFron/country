export const Countries = (countriData)=>{
    const $countriesBox = document.querySelector('.countries')
    const $Fragment = document.createDocumentFragment()
    
    let {image,name,population,region,capital} = countriData
    const $countriesTemplate = document.querySelector('#contries').content

    let CountryImage = $countriesTemplate.querySelector('.country__image')
    CountryImage.src = image
    CountryImage.alt = `Flag of ${name}`
    $countriesTemplate.querySelector('.country__data__country-name').textContent =name
    let populationBox = $countriesTemplate.querySelector('.country__data__country-population')
    populationBox.querySelector('.country__data__title').textContent = `Population:`
    populationBox.querySelector('.country__data__description').textContent = population

    let regionBox = $countriesTemplate.querySelector('.country__data__country-region')
    regionBox.querySelector('.country__data__title').textContent =`Region:`
    regionBox.querySelector('.country__data__description').textContent = region

    let capitalBox = $countriesTemplate.querySelector('.country__data__country-capital')
    capitalBox.querySelector('.country__data__title').textContent =`Capital:`
    capitalBox.querySelector('.country__data__description').textContent = capital

    const $clone = document.importNode($countriesTemplate,true)
    $Fragment.appendChild($clone)
    $countriesBox.appendChild($Fragment)
}