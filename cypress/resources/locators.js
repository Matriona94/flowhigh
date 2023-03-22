export const locators = {

    login: {
        loginButton: '[data-testid=loginModalButton]',
        email: '.login-modal-body .email',
        password: '.login-modal-body .password',
        submitButton: '.login-modal-body .login-button'
    },

    sqlVisualise: {
        newTab: '*[class^="tab-new"]',
        sqlEditor: '#sqlEditor .ace_text-input',
        visualise: '#Visualise',
        diagramSVG: '.diagram-svg',
        collapseHandler: '.collapse-handle',
    }
}