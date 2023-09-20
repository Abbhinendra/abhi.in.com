
let searchBtn = document.getElementById('searchBtn');
let input = document.getElementById('input');
let box = document.querySelector('.box');
let keyword = "";
let page = 1;
let accesskey = "8Gciqb5xo0Bs92UzuxAvYd8AQ1cqIY0_yMGVvdTDPJs";
let m = document.getElementById('m');
let more = document.getElementById('more');

async function images() {
    keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=20`;

    const res = await fetch(url);
    const data = await res.json();
    if (page === 1) {
        box.innerHTML = "";
    }
    data.results.forEach(element => {
        let div = document.createElement('div');
        let a = document.createElement('a');
        let img = document.createElement('img');

        a.href = element.links.html;
        a.target = "_blank";
        img.src = element.urls.small;
        a.appendChild(img);
        div.appendChild(a);
        box.appendChild(div);

    });

    m.style.display = "flex";


}

searchBtn.addEventListener('click', function () {

    page = 1;
    images();
})

more.addEventListener('click', function () {
    page++;
    images();
})



let query = "";


async function web(query) {
    const url = `https://bing-web-search1.p.rapidapi.com/search?q=${query}&mkt=en-us&safeSearch=Off&textFormat=Raw&freshness=Day`;

    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '2f4809ca3cmsh7cc45ca409e5139p15cff4jsn11255b907f67',
            'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.value.forEach(element => {
            console.log(element);

            let div1 = document.createElement('span');
            div1.classList.add('websearch');
            let img = document.createElement('img');
            let p = document.createElement('p');
            let h4 = document.createElement('h4');
            img.src = element.image.thumbnail.contentUrl;
            h4.innerHTML = element.name.substring(0, 20);
            p.innerHTML = element.description;
            div1.appendChild(img);
            div1.appendChild(h4);
            div1.appendChild(p);
            box.appendChild(div1);


        })
    } catch (error) {
        console.error(error);
    }
}
web("virat");
web("salmankhan");
web("frontenddeveloper");
web("softwareengineer");
web("javascript");
web("c++");
web("java");
web("html");
web("css");
web("reactjs");
web("politic");
web("indianweather");
web("weather");
web("usa");
web("cricket");
web("news");
web("shahrukhkhan");




