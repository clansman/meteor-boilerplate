Meteor.startup(function() {
    Accounts.ui.config({
        passwordSignupFields: 'EMAIL_ONLY'
    });

    AccountsEntry.config({
        homeRoute: '/',
        dashboardRoute: '/dashboard',
        profileRoute: '/profile',
        language: 'ru',
        showSignupCode: false,
        extraSignUpFields: [{
            field: "name",
            label: "Your Name",
            type: "text",
            required: true
        }]
    });
});
