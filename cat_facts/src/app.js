const catFacts = 'https://catfact.ninja/fact'

const btn = document.querySelector('.btn')
const fact = document.querySelector('.fact')

const displayFact = async () =>{
    const data = await fetch(catFacts)
    const resp = await data.json()
    fact.textContent = resp.fact
}

btn.addEventListener('click', function() {
    displayFact()
} )