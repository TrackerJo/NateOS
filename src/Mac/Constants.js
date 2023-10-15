const appMenuItems = {
   
    'finder': {
        'name': 'Finder',
         'menuItems': [
            {
                name: 'Finder',
                submenuItems: [
                    {
                        name: 'About Finder',
                        id: 'about'
                    }
                ]
            },
            {
                name: 'File',
                submenuItems: []
            },
            {
                name: 'Edit',
                submenuItems: []
            },
            {
                name: 'View',
                submenuItems: []
            },
            {
                name: 'Go',
                submenuItems: []
            },
            {
                name: 'Window',
                submenuItems: []
            },
            {
                name: 'Help',
                submenuItems: [] 
            }
         ]

            
    },
    'chrome': {
        'name': 'Google Chrome',
        'menuItems': [
            {
                name: 'Chrome',
                submenuItems: [
                    {
                        name: 'About Google Chrome',
                        id: 'about'
                    },
                    {
                       id: 'divider'
                    },
                    {
                        name: 'Settings...',
                        id: 'settings'
                    },
                    {
                        id: 'divider'
                    },
                    {
                        name: 'Clear Browsing Data...',
                        id: 'clearbrowsingdata'
                    },
                    {
                        name: 'Import Bookmarks and Settings...',
                        id: 'import'
                    },
                    {
                        id: 'divider'
                    },
                    {
                        name: 'Hide Google Chrome',
                        id: 'hide'
                    },
                    {
                        id: 'divider'
                    },
                    {
                        name: 'Quit Google Chrome',
                        id: 'quit'
                    }
                ]
            }
        ]
    }


}

const appleSubmenuItems = [
    {
        name: 'About this Mac' ,
        id: 'about'
    },
    {id: 'divider'},
    {
        name: 'System Preferences' ,
        id: 'preferences'
    },
    {
        name: 'App Store' ,
        id: 'appstore'
    },
    {
        id: 'divider'
    },
    {
        name:'Force Quit' ,
        id: 'forcequit'
    },
    {id: 'divider'},
    {
        name: 'Sleep' ,
        id: 'sleep'
    },
    {
        name: 'Restart...' ,
        id: 'restart'
    },
    {
        name: 'Shut Down...' ,
        id: 'shutdown'
    },
    {id: 'divider'},
    {
        name: 'Lock Screen' ,
        id: 'lockscreen'
    }
]

const appContextMenuItems = {
    'finder': {
        'name': 'Finder',
            'menuItems': [
                {
                    name: 'New Finder Window',
                    id: 'newfinderwindow'
                },
                {
                    id: 'divider'
                },
                {
                    name: 'Folders...',
                    id: 'folders'
                },
                {
                    id: 'divider'
                },
                {
                    name: 'Show All Windows',
                    id: 'showallwindows'
                },
                {
                    name: 'Hide',
                    id: 'hide'
                }
            ]
    },
    'chrome': {
        'name': 'Google Chrome',
        'menuItems': [
            {
                name: 'New Window',
                id: 'new-window'
            },
            {
                id: 'divider'
            },
            {
                name: 'Show All Windows',
                id: 'show-all-windows'
            },
            {
                name: 'Hide',
                id: 'hide'
            },
            {
                name:'Quit',
                id: 'quit'
            }
        ]
    }
}
           
