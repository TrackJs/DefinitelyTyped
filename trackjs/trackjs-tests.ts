/// <reference path="trackjs.d.ts" />

import {trackJs} from 'trackjs.d.ts';
import {window} from 'trackjs.d.ts';

window._trackJs = {
  token: "abcde"
};

window._trackJs = {
  token: "abcde",
  onError: function (payload) {

    payload.console.push({
      timestamp: "2000-01-01T00:00:00Z",
      severity: "info",
      message: "test"
    });

    payload.network.push({
      startedOn: "2000-01-01T00:00:00Z",
      completedOn: "2000-01-01T00:00:01Z",
      method: "PUT",
      url: "http://example.com",
      statusCode: 418,
      statusText: "I am a teapot"
    });

    payload.visitor.push({
      timestamp: "2000-01-01T00:00:00Z",
      action: "input",
      element: {
        tag: "input",
        attributes: {
          "id": "some-id",
          "placeholder": "stuff"
        },
        value: {
          length: 3,
          pattern: "numeric"
        }
      }
    });

    payload.environment.dependencies["myLib"] = "123";

    return true;
  }
};

trackJs.addMetadata("key", "value");
trackJs.removeMetadata("key");

trackJs.attempt(function () {});

trackJs.attempt(function (a, b) {
  console.log(a, b);
}, {}, 1, "two");

trackJs.configure({
  userId: "user"
});

trackJs.configure({
  onError: function(){ return true; },
  serialize: function(){ return ""; },
  userId: "user",
  sessionId: "session",
  version: "version"
});

trackJs.track("string");
trackJs.track({});
trackJs.track(new Error("error"));

trackJs.console.log("test");
trackJs.console.debug("test","again");
trackJs.console.info({}, false);
trackJs.console.warn([]);
trackJs.console.error(new Error("test"));

var f = trackJs.watch(function(a,b) {
  console.log(a, b);
}, {});

trackJs.watchAll({

  foo: function() {},

  bar: function() {}

});

trackJs.version;
