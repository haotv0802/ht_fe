System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Credential;
    return {
        setters:[],
        execute: function() {
            Credential = (function () {
                function Credential() {
                    this.user = "admin123";
                    this.pass = "admin";
                    this.lang = "en";
                }
                return Credential;
            }());
            exports_1("Credential", Credential);
        }
    }
});
//# sourceMappingURL=credential.js.map