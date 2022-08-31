const getAllMobileDatas = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data = await res.json();
    displayAllMobiles(data.data);
};

const displayAllMobiles = async (allMobiles) => {
    const allMobileContainer = document.getElementById('all-mobile-container');
    allMobiles.forEach(mobile => {
        // console.log(mobile);
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('col');
        columnDiv.innerHTML = `
            <div class="card">
                <img src="${mobile.image}" class="card-img-top p-4" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mobile.phone_name}</h5>
                    <p class="card-text">${mobile.slug}</p>
                </div>
            </div>
        `;

        allMobileContainer.appendChild(columnDiv);
    });
};

getAllMobileDatas();