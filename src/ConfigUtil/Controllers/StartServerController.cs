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
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Configuration;
using ConfigUtil.Common;
using ConfigUtil.Models;

namespace ConfigUtil.Controllers
{
    [Route("api/[controller]")]
    public class StartServerController : Controller
    {
        private readonly IConfiguration config;
        public StartServerController(IConfiguration config)
        {
            this.config = config;
        }

        // POST api/startserver
        [HttpPost]
        public void Post()
        {
            var serverPath = this.config.GetOSVRServerDirectory();
            OSVRServer.Start(serverPath);
        }
    }
}
