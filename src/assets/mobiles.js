

var Test = function (callback) {
  var test = {
      addEvent: function (obj, type, fn, ref_obj) {
          if (obj.addEventListener)
              obj.addEventListener(type, fn, false);
          else if (obj.attachEvent) {
              // IE
              obj["e" + type + fn] = fn;
              obj[type + fn] = function () {
                  obj["e" + type + fn](window.event, ref_obj);
              }
              obj.attachEvent("on" + type, obj[type + fn]);
          }
      },
      removeEvent: function (obj, eventName, eventCallback) {
          if (obj.removeEventListener) {
              obj.removeEventListener(eventName, eventCallback);
          } else if (obj.attachEvent) {
              obj.detachEvent(eventName);
          }
      },
      input: "",
      pattern: "38384040373937396665",
      keydownHandler: function (e, ref_obj) {
          if (ref_obj) {
              test = ref_obj;
          } // IE
          test.input += e ? e.keyCode : event.keyCode;
          if (test.input.length > test.pattern.length) {
              test.input = test.input.substr((test.input.length - test.pattern.length));
          }
          if (test.input === test.pattern) {
              test.code(test._currentLink);
              test.input = '';
              e.preventDefault();
              return false;
          }
      },
      load: function (link) {
          this._currentLink = link;
          this.addEvent(document, "keydown", this.keydownHandler, this);
          this.iphone.load(link);
      },
      unload: function () {
          this.removeEvent(document, 'keydown', this.keydownHandler);
          this.iphone.unload();
      },
      code: function (link) {
          window.location = link
      },
      iphone: {
          start_x: 0,
          start_y: 0,
          stop_x: 0,
          stop_y: 0,
          tap: false,
          capture: false,
          orig_keys: "",
          keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
          input: [],
          code: function (link) {
              test.code(link);
          },
          touchmoveHandler: function (e) {
              if (e.touches.length === 1 && test.iphone.capture === true) {
                  var touch = e.touches[0];
                  test.iphone.stop_x = touch.pageX;
                  test.iphone.stop_y = touch.pageY;
                  test.iphone.tap = false;
                  test.iphone.capture = false;
                  test.iphone.check_direction();
              }
          },
          touchendHandler: function () {
              test.iphone.input.push(test.iphone.check_direction());

              if (test.iphone.input.length > test.iphone.keys.length) test.iphone.input.shift();

              if (test.iphone.input.length === test.iphone.keys.length) {
                  var match = true;
                  for (var i = 0; i < test.iphone.keys.length; i++) {
                      if (test.iphone.input[i] !== test.iphone.keys[i]) {
                          match = false;
                      }
                  }
                  if (match) {
                      test.iphone.code(test._currentLink);
                  }
              }
          },
          touchstartHandler: function (e) {
              test.iphone.start_x = e.changedTouches[0].pageX;
              test.iphone.start_y = e.changedTouches[0].pageY;
              test.iphone.tap = true;
              test.iphone.capture = true;
          },
          load: function (link) {
              this.orig_keys = this.keys;
              test.addEvent(document, "touchmove", this.touchmoveHandler);
              test.addEvent(document, "touchend", this.touchendHandler, false);
              test.addEvent(document, "touchstart", this.touchstartHandler);
          },
          unload: function () {
              test.removeEvent(document, 'touchmove', this.touchmoveHandler);
              test.removeEvent(document, 'touchend', this.touchendHandler);
              test.removeEvent(document, 'touchstart', this.touchstartHandler);
          },
          check_direction: function () {
              x_magnitude = Math.abs(this.start_x - this.stop_x);
              y_magnitude = Math.abs(this.start_y - this.stop_y);
              x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
              y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
              result = (x_magnitude > y_magnitude) ? x : y;
              result = (this.tap === true) ? "TAP" : result;
              return result;
          }
      }
  }

  typeof callback === "string" && test.load(callback);
  if (typeof callback === "function") {
      test.code = callback;
      test.load();
  }

  return test;
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = Test;
} else {
      if (typeof define === 'function' && define.amd) {
              define([], function() {
                      return Test;
              });
      } else {
              window.Test = Test;
      }
}

/*
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 */
