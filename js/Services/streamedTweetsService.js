﻿(function () {
    'use strict';

    angular.module('app').factory('$streamedTweetsService',
        ['$pagedDataService', function ($pagedDataService) {
            var service = $.extend(true, {}, $pagedDataService,
                {
                    baseUrl: 'api/StreamedTweets',
                    data: {
                        fixedPage: false,
                        sortOptions: {
                            fields: ["UserName"]
                        },
                        pagingOptions: {
                            pageSize: 10
                        }
                    }
                });

            return service;
        }]);
})();