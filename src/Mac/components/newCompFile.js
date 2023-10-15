function createTestComp(name, test){
	const window = document.createElement("CC-div");
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

	const Image = document.createElement("img");
	Image.setAttribute('src', ``);
	Image.setAttribute('alt', ``);

	window.appendChild(Image);

	const WindowTitle = document.createElement("div");
	WindowTitle.setAttribute('class', `window-title`);

	const WindowTitleIcon = document.createElement("img");
	WindowTitleIcon.setAttribute('src', ``);
	WindowTitleIcon.setAttribute('alt', ``);

	WindowTitle.appendChild(WindowTitleIcon);

	const WindowTitleText = document.createElement("label");
	WindowTitleText.textContent = `Hello ${name}`;
	WindowTitleText.setAttribute('for', `${test}`);

	WindowTitle.appendChild(WindowTitleText);

	window.appendChild(WindowTitle);

	return window;

}