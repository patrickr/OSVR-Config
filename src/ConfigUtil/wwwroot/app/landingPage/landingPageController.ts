﻿/// OSVR-Config
///
/// <copyright>
/// Copyright 2016 Sensics, Inc.
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
/// </copyright>
/// 
module app.landingPage {
    class LandingPageController {
        currentConfig: any = {};
        static $inject = ["$http", "$log", "app.common.ConfigService"];
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private configService: app.common.IConfigService) {
            configService.getCurrent().then(currentConfig => this.currentConfig = currentConfig);
        }
    }

    angular.module("app.landingPage", ["app.common.ConfigService", "ui.router"])
        .config(["$stateProvider", ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider.state("landingPage", {
                url: "/",
                templateUrl: "app/landingPage/landingPage.html",
                controller: "app.landingPage.LandingPageController as vm"
            });
        }])
        .controller("app.landingPage.LandingPageController", LandingPageController);
}
