Router.map(function() {

    this.route('home', {
        path: '/'
    });

    this.route('dashboard', {
        path: '/dashboard',
        loginRequired: 'entrySignIn',
        waitOn: function() {
            return this.subscribe("projects");
        },
        data: {
            projects: Projects.find({})
        },
        onAfterAction: function() {
            SEO.set({
                title: 'Dashboard | ' + SEO.settings.title
            });
        }
    });

    this.route('profile', {
        path: '/profile',
        data: function() {
            return Meteor.user();
        }
    });

    this.route('articles', {
        path: '/articles',
        data: function() {
            return {
                articles: [{
                    Title: 'Article title',
                    Content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, rem voluptatum explicabo sint adipisci, aliquam suscipit sed culpa reiciendis iure itaque incidunt excepturi ad pariatur voluptates! Quod culpa ea excepturi.'
                }, {
                    Title: 'Another Cool Story',
                    Content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nam iste doloribus itaque cupiditate, voluptates error reprehenderit, consectetur ratione unde iure. Possimus quam voluptatem dicta est doloremque cumque eos voluptatum!'
                }]
            };
        }
    });

    this.route('notFound', {
        path: '*',
        where: 'server',
        action: function() {
            this.response.statusCode = 404;
            this.response.end(Handlebars.templates['404']());
        }
    });

});
