define(['plugins/router'], function(router) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'viewmodel1',
            fromParent:true
        }).map([
            { route: 'subview1',      moduleId: '../viewmodels/subview1',       title: 'subview 1',  nav: true},
        ])
        .buildNavigationModel();

    return {
        router: childRouter
    };
});