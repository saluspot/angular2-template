System.register(['@angular/platform-browser-dynamic', "./components/home/home"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, home_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(home_1.Home);
        }
    }
});
//# sourceMappingURL=main.js.map