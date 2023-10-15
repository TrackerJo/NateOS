function createTestComp(name, test){
	const window = document.createElement("div");
	window.setAttribute('class', `window,window-chrome,window-open,window-active`);
	window.setAttribute('style', `top:25px;`);

	const ControlIcons = document.createElement("div");

	const ControlQuitIcon = document.createElement("img");
	ControlQuitIcon.setAttribute('class', `window-control-icon quit-icon`);
	ControlQuitIcon.setAttribute('src', `assets/quit_icon.png`);

	ControlIcons.appendChild(ControlQuitIcon);

	const ControlMinIcon = document.createElement("img");
	ControlMinIcon.setAttribute('class', `window-control-icon min-icon`);
	ControlMinIcon.setAttribute('src', `assets/minimize_icon.png`);

	ControlIcons.appendChild(ControlMinIcon);

	const ControlMaxIcon = document.createElement("img");
	ControlMaxIcon.setAttribute('class', `window-control-icon max-icon`);
	ControlMaxIcon.setAttribute('src', `assets/maximize_icon.png`);

	ControlIcons.appendChild(ControlMaxIcon);

	window.appendChild(ControlIcons);

	const windowImg1 = document.createElement("img");
	windowImg1.setAttribute('src', ``);
	windowImg1.setAttribute('alt', ``);

	window.appendChild(windowImg1);

	const windowDiv1 = document.createElement("div");
	windowDiv1.setAttribute('class', `window-title`);

	const WindowTitleIcon = document.createElement("img");
	WindowTitleIcon.setAttribute('src', ``);
	WindowTitleIcon.setAttribute('alt', ``);

	windowDiv1.appendChild(WindowTitleIcon);

	const windowDiv1Label1 = document.createElement("label");
	windowDiv1Label1.textContent = `Hello ${name}`;
	windowDiv1Label1.setAttribute('for', `${test}`);

	windowDiv1.appendChild(windowDiv1Label1);

	const windowDiv1Label2 = document.createElement("label");
	windowDiv1Label2.textContent = `Bye ${name}`;
	windowDiv1Label2.setAttribute('for', ``);

	windowDiv1.appendChild(windowDiv1Label2);

	window.appendChild(windowDiv1);

	return window;

}