define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'viewmodel1*details', moduleId: 'viewmodels/viewmodel1', nav: true },
                { route: 'viewmodel2*details', moduleId: 'viewmodels/viewmodel2', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});