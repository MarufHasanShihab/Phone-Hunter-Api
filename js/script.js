const loadData = async (query, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${query}`);
    const data = await res.json();
    const phones = data.data;
    showData(phones, isShowAll);
}

const phoneContainer = document.getElementById("phone-container");

const showData = (phones, isShowAll) => {

    const showAllButtonField = document.getElementById("show-all-btn-field");
    if (phones.length > 12 && !isShowAll) {
        showAllButtonField.classList.remove("hidden");
    } else {
        showAllButtonField.classList.add("hidden");
    }

    if (!isShowAll) {
        phones = phones.slice(0,12);
    }

    for (const phone of phones) {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card border card-compact bg-base-100 shadow-xl">
            <figure class="p-5"><img src="${phone.image}" class="w-60" alt="bike"/></figure>
            <div class="card-body p-5 text-center">
                <h2 class="text-3xl font-semibold">${phone.phone_name}</h2>
                <p class="text-lg">There are many variations of passages of available, but the majority have suffered</p>
                <h4 class="text-2xl font-semibold">$999</h4>
                <div class="text-center" >
                    <button class="btn btn-primary normal-case">Show Details</button>
                </div>
            </div>
        </div>
        `;
        phoneContainer.appendChild(card);
    }
}

const searchPhones = (isShowAll) => {
    const searchQuery = document.getElementById("search-input").value;
    loadData(searchQuery, isShowAll);
    // document.getElementById("search-input").value = "";
    phoneContainer.innerHTML = "";
}

// handle show all button
const showAllData = () => {
    searchPhones(true);
}