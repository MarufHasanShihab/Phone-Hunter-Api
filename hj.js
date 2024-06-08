const loadData = async (searchText)=>{
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `)
    const data = await res.json();
    displayData(data.data);
}


function displayData(phones){
    const cardContainer = document.getElementById('card_container');
    cardContainer.innerText = "";
    if(phones.length > 12){
        document.getElementById('show_all_btn_container').classList.remove('hidden');
    }else{
        document.getElementById('show_all_btn_container').classList.add('hidden');
    }
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'w-[300px] h-[480px] bg-white rounded-lg border border-stone-300';
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions">
        <button class="btn btn-primary bg-blue-600">Show Details</button>
        </div>
        </div>
        `
        cardContainer.appendChild(phoneCard);
    })
    toggleLoading(false);
}


document.getElementById('search_phone').addEventListener('submit', function(event){
    event.preventDefault();
    const searchPhoneValue = document.getElementById('phone_search_input_field').value;
    loadData(searchPhoneValue)
    toggleLoading(true);
})


function toggleLoading(isLoading){
    const loadingBtn = document.getElementById('loading_btn');
    if(isLoading){
        loadingBtn.classList.remove('hidden')
    }else{
        loadingBtn.classList.add('hidden');
    }
}