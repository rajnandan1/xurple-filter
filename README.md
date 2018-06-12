# xurple-filter
A Lightweight AngularJS fitler to filter rows for ng-repeat using any key (nested) in the array

[Demo](https://jsfiddle.net/rajnandan1/keq9zrjd/9/) - JS fiddle demo

## Installation
Download the js and include it in your project
``` <script src="pat-to-folder/xurple-filter.js"></script> ```
Include the directive in your angular module
```
var myApp = angular.module('app', [
	'xurple-filters'
]);
```
## How to use

Suppose you have a user array that looks something like this in your controller
```
$scope.users=[{
      "name": "Terri Maddox",
      "gender": "female",
      "company": "EXOTECHNO",
      "email": "terrimaddox@exotechno.com",
      "phone": "+1 (947) 425-2928",
      "location": {
        "address": "533 Kenilworth Place, Southmont, Utah",
        "zip": 9685,
        "coords": {
          "lat": -20.158129,
          "lng": 90.507106
        }
      }
}]
```
To Filter this array in the view against name, address and lattitude you can do this

```
<input type="text" ng-model="search.query">
<div ng-repeat="user in users |  xf:search:['name','location.address','location.coords.lat']">
...
</div>
```
