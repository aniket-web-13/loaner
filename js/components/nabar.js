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


let trustPeop = document.getElementById("trustPeop");
const trustPeopleImg = [
    {
        src: "/assets/jpg/trust-people-1.avif",
        bgColor:"#FF6357"
    },
    {
        src: "/assets/jpg/trust-people-2.avif",
        bgColor:"#A0C5F2"
    },
    {
        src: "/assets/jpg/trust-people-3.avif",
        bgColor:"#FDEA59"
    },
    {
        src: "/assets/jpg/trust-people-4.avif",
        bgColor:"#E2E8E4"
    },
    {
        src: "/assets/jpg/trust-people-5.avif",
        bgColor:"#FFD7E4"
    },
    {
        src: "/assets/jpg/trust-people-6.avif",
        bgColor:"#161616"
    },
];

trustPeopleImg.map((value, i) => {
    trustPeop.innerHTML += `
        <img style="border: 2px solid ${value.bgColor}" class="rounded-circle tp-img posion-img${i}" src="${value.src}" alt="Image ${i + 1}">       
    `;
   
});
console.log(trustPeop);


let field = document.getElementById("field")

let fields = [{fileName:"Personal loan"},{fileName:"Business loan"},
              {fileName:"Home loan"},{fileName:"Secured loan"}]

fields.map((val,i) => {
    field.innerHTML +=`
    <option value>${val.fileName}</option>
    `
})