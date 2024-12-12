'use strict';

export function select(selector) {
  return document.querySelector(selector);
}

export function listen(selector, event, callBack) {
  return selector.addEventListener(event, callBack);
}
