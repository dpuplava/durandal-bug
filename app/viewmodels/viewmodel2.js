define(['plugins/router'], function(router) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'collections',
            fromParent:true
        }).map([
            { route: 'subview2',      moduleId: '../viewmodels/subview2',       title: 'subview 2',  nav: true},
        ])
        .buildNavigationModel();

    return {
        router: childRouter
    };
});