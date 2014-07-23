/// <reference path="lib/jquery.d.ts" />
var MicroApp = (function () {
    function MicroApp(AppID, TargetDiv) {
        this.AppID = "MicroApp";
        this.TargetDiv = "#Main";
        this.InternalApp = $(TargetDiv);
    }
    return MicroApp;
})();
