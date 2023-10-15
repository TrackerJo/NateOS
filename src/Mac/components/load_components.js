const customComponents = document.querySelectorAll('.custom-component');

customComponents.forEach((component) => {
    const componentType = component.dataset.type;

    switch (componentType) {
        case "window-chrome":
            const chromeWindow = createChromeWindow();
            component.parentElement.replaceChild(chromeWindow, component);
            break;

        case "taskbar-app":
            const taskbarApp = createTaskbarApp(component.dataset.icon, component.dataset.appname, component.dataset.appid);
            component.parentElement.replaceChild(taskbarApp, component);
            break;

        case "navBar":
            const navBar = createNavBarOptions(component.dataset.appid);
            component.parentElement.replaceChild(navBar, component);
            break;
        case "test":
            const test = createTestComp(component.dataset.name, component.dataset.test);
            component.parentElement.replaceChild(test, component);
            break;
        default:
            console.error(`Unknown component type: ${componentType} in`, component);
            break;
    }
});