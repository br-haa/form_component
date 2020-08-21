module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'HAA Form',
            description: 'Plug and Play Form (or thats the goal anyway)'
        }
    },

    themeConfig: {
        repoLabel: 'Contribute!',
        // git repo here... gitlab, github
        repo: '',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    { text: 'Getting Started', link: '/guide' },
                    { text: 'Components', link: '/components/' },
                    // external link to git repo...again
                    { text: 'GitHub', link: 'https://github.com/HoglundAnalytics/Form-Component' }
                ],
                sidebar: {
                    '/components/': [
                        {
                            title: 'Components',
                            collapsable: false,
                            children: ['FormController']
                        }
                    ]
                }
            }
        }
    }
}