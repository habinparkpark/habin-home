console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}
let nav = document.createElement("nav");
document.body.prepend(nav);

let pages = [
	{url:"", title: "Home"},
	{url:"projects/", title: "Projects"},
	{url:"contact/", title: "Contact Habin"},
	{url:"about/", title: "About Habin"},
	{url:"github", title: "Habin's Github Page"}
];




const ARE_WE_HOME = document.documentElement.classList.contains("home");
url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;


for (let p of pages) {
	let url = p.url;
	let title = p.title;
	let link = document.createElement('a')
	link.href = url;
	link.textContent = title;
	nav.appendChild(link);
	nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}
