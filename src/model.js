function model(data) {
  return function(target) {
    data.forEach(key => {
      Object.defineProperty(target, key,{
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


@model(['firstName', 'lastName'])
class Employee {}

const employee = new Employee();
employee.firstName = 'Mary';
employee.lastName = 'Smith';
