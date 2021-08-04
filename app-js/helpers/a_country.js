export const aCountry = (target)=>{
    const $seeCountryBox = document.querySelector('.see__country')
    fetch(`https://restcountries.eu/rest/v2/name/${target.dataset.name}`)
    .then((res)=> res.ok ? res.json(): Promise.reject({status:res.status,message_status:res.statusText}))
    .then((json)=>{
        let image = $seeCountryBox.querySelector('.a-country__flag')
        image.src = json[0].flag
        image.alt = json[0].name
        $seeCountryBox.querySelector('.a-country__name').textContent= json[0].name
        $seeCountryBox.querySelector('#native-name').textContent= json[0].nativeName
        $seeCountryBox.querySelector('#population').textContent= json[0].population
        $seeCountryBox.querySelector('#region').textContent= json[0].region
        $seeCountryBox.querySelector('#subregion').textContent= json[0].subregion
        $seeCountryBox.querySelector('#capital').textContent= json[0].capital
        $seeCountryBox.querySelector('#top-level-domain').textContent= json[0].topLevelDomain
        $seeCountryBox.querySelector('#currencies').textContent= json[0].currencies[0].name
        $seeCountryBox.querySelector('#border-countries-1').textContent= json[0].borders[1]
    })
    .catch(err => alert(`I'm sorry, something unexpected happened Error ${err.status} ${err.message_status}`))
}