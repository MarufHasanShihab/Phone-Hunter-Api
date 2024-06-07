// const loadData = async ()=>{
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     const data = await res.json();
//     displayData(data.data);
// }
// loadData()


// function displayData(phones){
//     const cardContainer = document.getElementById('card_container');
//     phones.forEach(phone => {
//         console.log(phone)
//         const phoneCard = document.createElement('div');
//         phoneCard.classList = 'w-[300px] h-[450px] bg-white rounded-lg border border-stone-300';
//         phoneCard.innerHTML = `
//         <figure class="px-10 pt-10">
//             <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
//           </figure>
//           <div class="card-body items-center text-center">
//             <h2 class="card-title">${phone.phone_name}</h2>
//             <p>If a dog chews shoes whose shoes does he choose?</p>
//             <div class="card-actions">
//               <button class="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         `
//         cardContainer.appendChild(phoneCard);
//     })
// }