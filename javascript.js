const inputText = document.getElementById('input-text');
const divSites = document.getElementById('sites');
const sites = divSites.getElementsByTagName('a');
const preLinks = []



for (let i = 0; i < sites.length; i++){
    preLinks.push(sites[i].href)
}



inputText.addEventListener('change', ()=>{
    updateLinks(inputText.value);
})



function updateLinks(pesquisa){
    for (let i = 0; i < sites.length; i++){
        sites[i].href = preLinks[i] + pesquisa;
    }
}