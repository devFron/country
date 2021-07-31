export const GetAll = async(filterData)=>{
    let{url,filter} = filterData

    const $countriesBox = document.querySelector('.countries')
    $countriesBox.innerHTML=``

    const InsertCountries = countries =>{
        countries.forEach(el=> {
            $countriesBox.innerHTML +=`
                <section class="country">
                    <img class="country__image" src="${el.flag}">
                    <article class="country__data">
                        <p class="country__data__country-name">${el.name}</p>
                        <p class="country__data__country-population">
                            <span class="country__data__title">Population:</span>
                            <span class="country__data__description">${el.population}</span>
                        </p>
                        <p class="country__data__country-region">
                            <span class="country__data__title">Region:</span>
                            <span class="country__data__description">${el.region}</span>
                        </p>
                        <p class="country__data__country-capital">
                            <span class="country__data__title">Capital:</span>
                            <span class="country__data__description">${el.capital}</span>
                        </p>
                    </article>
                </section>
            `
        });
    }     

    localStorage.setItem('filterKey',filter)

    try {
        let res =await fetch(url || 'https://restcountries.eu/rest/v2/all')
        if(!res.ok)throw {status:res.status,message_status:res.statusText}
        let json = await res.json()

        if(localStorage.getItem('filterKey')=== 'true'){
            InsertCountries(json)
        }else{
            let i = 1
            const CounterFilter = i => {
                let Alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z']
                let CountriessegunTheAlphabet = json.filter((x)=>{
                    if(x.name.includes(Alphabet[i]) && x.name.search(Alphabet[i]) === 0){
                        return x 
                    }else{
                        return false
                    }
                })  
                InsertCountries(CountriessegunTheAlphabet)
            }
            if(i === 1){
                CounterFilter(0)
            }
            window.addEventListener('scroll',(e)=>{
                if(localStorage.getItem('filterKey')=== 'false'){
                    let {scrollTop,clientHeight,scrollHeight} = document.documentElement
                    if(scrollTop+clientHeight >= scrollHeight){
                        if(i > 25){
                            return
                        }else{
                            CounterFilter(i)
                            i++
                        }
                    }
                }
            })
        }

    } catch (err) {
        if(err.status === 404){
            alert(`I'm sorry, an error occurred when recovering the countries `)        
        }else{
            alert(`I'm sorry, something unexpected happened Error ${err.status} ${err.message_status}`)        
        }
    }

}