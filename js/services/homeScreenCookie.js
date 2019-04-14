'use strict';

angular.module('angularAddToHomeScreen')
  .factory('$homeScreenCookie', [function() {

    var storageKey = 'homescreen.notification.onDismiss';

    var fetchDate = function() {
      var localDate = localStorage.getItem(storageKey);
      if (localDate) {
        localDate = moment(localDate, "LLLL");
        if (localDate.isValid()) {
          return localDate;
        }
      }
      return null;
    }

    var localDate = fetchDate();

    return {
      isDismissed: function() {
        return localDate && moment().diff(localDate, 'days') < 30;
      },
      dismiss: function() {
        localStorage.setItem(storageKey, moment().format("LLLL"));
      }
    }
  }]);
