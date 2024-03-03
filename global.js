console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let nav = document.createElement("nav");
document.body.prepend(nav);

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
	{url: "about me/", title: "CV"},
	{url: "contact/", title: "Contact"},
	{url: "https://github.com/leaverou", title: "GitHub"},
];

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
	let url = p.url;
	url = ARE_WE_HOME && !url.startsWith("http") ? p.url : "../" + p.url;

	let title = p.title;

	let a = document.createElement("a");
	a.textContent = title;
	a.href = url;

	if (a.host !== location.host) {
		a.target = "_blank";
	}
	else {
		// Local link
		if (a.pathname === location.pathname) {
			a.classList.add("current");
		}
	}

	nav.appendChild(a);
}

document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select id="theme-selector">
            <option value="auto">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
`);

let select = document.querySelector("select");

select.addEventListener("input", event => {
    setColorScheme(event.target.value);
});

function setColorScheme (colorScheme) {
    select.value = colorScheme;
    document.documentElement.style.setProperty("color-scheme", colorScheme);
    localStorage.colorScheme = colorScheme;
}
if (localStorage.colorScheme) {
    setColorScheme(localStorage.colorScheme);
}

