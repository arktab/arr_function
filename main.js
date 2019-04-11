'use strict';
(function () {

    var start = document.querySelector('.primeBtn');
    start.onclick = startMap;

})();

function startMap(toSquare, arr) {
    var someArr = [1, 2, 3, 4];
    var newArr = [];
    var x = 0;

    function toSquare(arr) {
        for (var i = 0; i <= arr.length; ++i) {
            x = arr[i] *arr[i];
            newArr.push(x);
        }
    }
    toSquare(someArr);
    alert(`Before ${someArr} after ${newArr}`);

}
