"use strict";
var main = {
    initialize: function () {
        document.addEventListener('deviceready', main.onDeviceReady, false);
        document.addEventListener("backbutton", main.onBackButton, true);
        addEventListener("orientationchange", main.onOrientationChange, false);
    },

    onDeviceReady: function () {
        $(main.startUp);
        alert('Here');
    },

    onOrientationChange: function () {
        util.setDataDivHeight();
        setTimeout(util.setDataDivHeight, 100);
        setTimeout(util.setDataDivHeight, 500);
        setTimeout(util.setDataDivHeight, 1000);
    },

    startUp: function () {
        cordova.exec(function (pkg) { srv.packageName = pkg; }, function () { }, "Prabandhak", "debug", []);
        alert('Here');
        //server.localVersion()
        //    .then(function (local_version) {
        //        if (device.platform != 'browser' && local_version > version) {
        //            server.loadLocal();
        //        }
        //        else {
        //            db.checkInitialDatabase()
        //                .then(db.readSettings)
        //                .then(fs.setRootFolder)
        //                .then(security.renderInitial)
        //                .then(security.setupPush);
        //        }
        //    })

    },
}

main.initialize();