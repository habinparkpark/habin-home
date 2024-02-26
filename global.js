console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let pages = [
	{url:"", title: "Home"},
	{url:"", title: "Home"},
	{url:"", title: "Home"},
	{url:"", title: "Home"},
]

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
	let url = p.url;
	let title = p.title;
}
nav.insertAdjacentHTML("beforeend", '<a ref="${ url }">${title}</a>');
