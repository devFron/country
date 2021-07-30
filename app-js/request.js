export const GetAll = async(url)=>{
    try {
        const $countriesBox = document.querySelector('.countries')
        $countriesBox.innerHTML= ''
        let res = await fetch(url || 'https://restcountries.eu/rest/v2/all') 
        if(!res.ok)throw {
            status:res.status,
            message_status:res.statusText
        }    
        let json = await res.json()
        json.forEach(el=> {
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
    } catch (err) {
        console.log(err.status);
        if(err.status === 404){
            alert(`I'm sorry, an error occurred when recovering the countries `)        
        }else{
            alert(`I'm sorry, something unexpected happened Error ${err.status} ${err.message_status}`)        
        }
    }
}