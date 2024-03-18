
let container = [
    {
        link: "https://alihgad.github.io/kasper/",
        image: "./imges/Kasper.png",
        alt: "Kasper",
        h4: "Kasper template",
        tech: "native html + css , responsive",
        date: "oct-2022"
    }
    ,
    {
        link: "https://alihgad.github.io/Leon/",
        image: "./imges/leon.png",
        alt: "leon",
        h4: "leon template",
        tech: "native html + css , responsive",
        date: "nov-2022"
    },
    {
        link: "https://alihgad.github.io/mealify/",
        image: "./imges/mealify.png",
        alt: "mealify",
        h4: "mealify template",
        tech: "native html + css , responsive , dark mood",
        date: "oct-2023"
    },
    {
        link: "https://alihgad.github.io/fokir/",
        image: "./imges/fokir.png",
        alt: "fokir",
        h4: "fokir template",
        tech: "native html + css , responsive",
        date: "oct-2023"
    },
    {
        link: "https://alihgad.github.io/DevFolio/",
        image: "./imges/devfolio.png",
        alt: "devfolio",
        h4: "devfolio template",
        tech: "html + css + bootstrap , responsive",
        date: "nov-2023"
    },
    {
        link: "https://alihgad.github.io/bezel/",
        image: "./imges/bezel.png",
        alt: "bezel",
        h4: "bezel template",
        tech: "html + css + bootstrap , responsive",
        date: "nov-2023"
    },
    {
        link: "https://alihgad.github.io/CRUDS/",
        image: "./imges/cruds.png",
        alt: "CRUDS",
        h4: "CRUDS system",
        tech: "html + css + bootstrap , JavaScript",
        date: "Dec-2023"
    },
    {
        link: "https://alihgad.github.io/bookmark/",
        image: "./imges/bookmark.png",
        alt: "bookmark",
        h4: "bookmark system",
        tech: "html + css + bootstrap , JavaScript",
        date: "Dec-2023"
    },
    {
        link: "https://alihgad.github.io/smartLogIn/",
        image: "./imges/login.png",
        alt: "smartLogIn",
        h4: "LogIn system",
        tech: "html + css + bootstrap , JavaScript",
        date: "Dec-2023"
    },
    {
        link: "https://alihgad.github.io/weather-App/",
        image: "./imges/weather.png",
        alt: "weather-App",
        h4: "weather App",
        tech: "html + css + bootstrap , JavaScript",
        date: "Dec-2023"
    },
    {
        link: "https://alihgad.github.io/ToDoList/",
        image: "./imges/todolist.png",
        alt: "ToDo list",
        h4: "ToDo list",
        tech: "html + css + bootstrap + sweetalert2 , JavaScript",
        date: "Jan-2024"
    },
    {
        link: "https://alihgad.github.io/Games/",
        image: "./imges/games.png",
        alt: "Games reviews",
        h4: "Games reviews",
        tech: "html + css + bootstrap  , JavaScript + API",
        date: "Jan-2024"
    },
    {
        link: "https://alihgad.github.io/party/",
        image: "./imges/party.png",
        alt: "Party Event",
        h4: "Party Event",
        tech: "html + css + bootstrap  , JavaScript + JQuery",
        date: "Jan-2024"
    }
]




function displayProjects() {

    let cartona = ""
    for (let i = container.length - 1; i >= 0; i--) {
        cartona += `<div class="col  ">
                        <a class="text-decoration-none" href=${container[i].link} target="_blank">
                            <div class="card text-capitalize shadow-3d ">
                            <div class="overflow-hidden rounded-top-2">
                                <div class="img-fluid position-relative  ">
                                    <div class=" black-wall d-flex justify-content-center align-items-center">
                                        <p class=" text-white focus   fs-1">click to preview</p>
                                    </div>
                                    <img src=${container[i].image} class="mw-100 " alt=${container[i].alt}>
                                </div>
                            </div>
                            <div class="card-body ">
                                <h4 class="text-main" >${container[i].h4}</h4>
                                <p class="mb-1">${container[i].tech}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${container[i].date}</small>
                            </div>
                            </div>
                        </a>
                    </div>`
    }
    document.querySelector("#projects").innerHTML = cartona;
}



let reactContainer = [{
    link: "https://ali-react-app.netlify.app/",
    image: "./imges/start.png",
    alt: "start",
    h4: "first react app",
    tech: "html + css + bootstrap  , JavaScript React Js",
    date: "Feb-2024"
},
{
    link: "https://alifreshcart.000webhostapp.com/",
    image: "./imges/start.png",
    alt: "fresh cart",
    h4: "E-commerce",
    tech: "html + css + bootstrap  , JavaScript React Js",
    date: "mar-2024"
},

]

function displayReactProjects() {

    let cartona = ""
    for (let i = reactContainer.length - 1; i >= 0; i--) {
        cartona += `<div class="col  ">
                        <a class="text-decoration-none" href=${reactContainer[i].link} target="_blank">
                            <div class="card text-capitalize shadow-3d ">
                            <div class="overflow-hidden rounded-top-2">
                                <div class="img-fluid position-relative  ">
                                    <div class=" black-wall d-flex justify-content-center align-items-center">
                                        <p class=" text-white focus   fs-1">click to preview</p>
                                    </div>
                                    <img src=${reactContainer[i].image} class="mw-100 " alt=${reactContainer[i].alt}>
                                </div>
                            </div>
                            <div class="card-body ">
                                <h4 class="text-main" >${reactContainer[i].h4}</h4>
                                <p class="mb-1">${reactContainer[i].tech}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${reactContainer[i].date}</small>
                            </div>
                            </div>
                        </a>
                    </div>`
    }
    document.querySelector("#react").innerHTML = cartona;
}



window.addEventListener("load", function () {
    displayProjects()
    displayReactProjects()
})

