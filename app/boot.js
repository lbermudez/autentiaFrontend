System.register(["angular2/platform/browser", "./components/home/home", "angular2/core", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, home_1, core_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_1.HomePage, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: "/" })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map