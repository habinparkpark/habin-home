console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}


let pages = [
	{url:"", title: "Home"},
	{url:"projects/", title: "Projects"},
	{url:"contact/", title: "Contact Habin"},
	{url:"about/", title: "About Habin"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);


const ARE_WE_HOME = document.documentElement.classList.contains("home");
url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;


for (let p of pages) {
	let url = p.url;
	let title = p.title;
	let a = document.createElement("a");
	a.href = p.url;
	a.textContent = p.title;
	nav.append(a);

	// Highlight the current page
	a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);

	// Open external links in a new tab
	if (a.host !== location.host) {
		a.target = "_blank";
	}
}
