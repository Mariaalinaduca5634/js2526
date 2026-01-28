console.log(movies);

const main = document.getElementById("main");
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
showMovies(movies, searchTerm='');
function showMovies(results, searchTerm='') {
    if (searchTeam !== ''){
        alert(searchTeam);
        results = results.filter(function (element) {
            return (element.title.toLowerCase().indexOf(searchTeam) > -1);

        });
    }

    results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');


        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    });
}

FormData.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    const searchTeam = search.value;
    if (searchTeam) {
        showMovies(movies, searchTeam.toLowerCase());
        search.value = "";
    }
});