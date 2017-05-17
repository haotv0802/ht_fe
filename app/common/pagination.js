"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = (function () {
    // constructor() {
    // }
    function Pagination(slice) {
        this.content = slice.content;
        this.size = slice.size;
        this.number = slice.number + 1;
        this.first = slice.first;
        this.last = slice.last;
        this.numberOfElements = slice.numberOfElements;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map