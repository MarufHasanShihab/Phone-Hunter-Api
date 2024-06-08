// fetch load data 
const loadData = async (searchText, isShowAll)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    displayData(data.data, isShowAll)
}

// display data
const displayData = (phones, isShowAll)=>{
    if(phones.length > 12){
        document.getElementById('show_all_btn_container').classList.remove('hidden');
    }else{
        document.getElementById('show_all_btn_container').classList.add('hidden');
    }
    
        if(!isShowAll){
            phones = phones.slice(0, 12);
        }
    
    const cardContainer = document.getElementById('card_container');
    cardContainer.innerText = "";
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.textContent = "";
        phoneCard.classList = 'w-[300px] h-[480px] bg-white rounded-lg border border-stone-300';
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <div class="card-actions">
        <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary bg-blue-600">Show Details</button>
        </div>
        </div>
        `
        cardContainer.appendChild(phoneCard);
    })
    document.getElementById('loading_btn').classList.add('hidden');
}

// handle search
const handleSearch = (isShowAll)=>{
        document.getElementById('loading_btn').classList.remove('hidden');
        const searchValue = document.getElementById('phone_search_input_field').value;
        loadData(searchValue, isShowAll);
}


// handle show all btn
const handleShowAll = ()=>{
    handleSearch(true);
}


// handle show details
const handleShowDetails = async(id)=>{
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    showDetails(data.data)
}

// show single phone details
const showDetails = (phone)=>{
    console.log(phone)
    my_modal_5.showModal()
    // finding elements
    document.getElementById('image').src = phone.image;
    document.getElementById('phone_name').innerText = phone.name;
    document.getElementById('storage').innerText = phone.mainFeatures.storage;
    document.getElementById('displaySize').innerText = phone.mainFeatures.displaySize  ;
    document.getElementById('chipset').innerText = phone.mainFeatures.chipSet;
    document.getElementById('memory').innerText = phone.mainFeatures.memory;
    document.getElementById('slug').innerText = phone.slug;
    document.getElementById('release_date'). innerText = phone.mainFeatures.releaseDate;
    document.getElementById('brand').innerText = phone.brand;
 }