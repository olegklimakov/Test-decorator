"use strict";

var _dec, _class;

function model(data) {
  return function (target) {
    data.forEach(key => {
      Object.defineProperty(target, key, {
        get: () => {
          return target.prototype[key];
        },
        set: itemData => {
          target.prototype[key] = itemData;
        }
      });
    });
  };
}

let Employee = (_dec = model(['firstName', 'lastName']), _dec(_class = class Employee {}) || _class);
const employee = new Employee();
employee.firstName = 'Mary';
employee.lastName = 'Smith';