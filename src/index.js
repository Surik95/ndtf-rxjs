"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("rxjs/fetch");
var rxjs_1 = require("rxjs");
var data$ = (0, fetch_1.fromFetch)('https://api.github.com/search/repositories?q=rxjs').pipe((0, rxjs_1.switchMap)(function (response) {
    if (response.ok) {
        // OK return data
        return response.json();
    }
    else {
        // Server is returning a status requiring the client to try something else.
        return (0, rxjs_1.of)({ error: true, message: "Error ".concat(response.status) });
    }
}), (0, rxjs_1.catchError)(function (err) {
    // Network or other error, handle appropriately
    console.error(err);
    return (0, rxjs_1.of)({ error: true, message: err.message });
}));
data$.subscribe({
    next: function (result) { return console.log(result); },
    complete: function () { return console.log('done'); },
});
