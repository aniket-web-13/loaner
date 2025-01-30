let navLink = document.getElementById("navLink");

const nav = [
    {
        name: "Home",
        link: "",
        icon: ""
    },
    {
        name: "Pages",
        link: "",
        icon: ""
    },
    {
        name: "About",
        link: "",
        icon: ""
    },
    {
        name: "Service",
        link: "",
        icon: ""
    },
];

nav.map((value) => {
    navLink.innerHTML += `
        <div class="">
            <a class="text-dark link-underline link-underline-opacity-0 fw-semibold" href="${value.link}">${value.name}</a>
        </div>    
    `;
});
