"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-typedarray";
exports.ids = ["vendor-chunks/is-typedarray"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-typedarray/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-typedarray/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nmodule.exports = isTypedArray;\nisTypedArray.strict = isStrictTypedArray;\nisTypedArray.loose = isLooseTypedArray;\nvar toString = Object.prototype.toString;\nvar names = {\n    \"[object Int8Array]\": true,\n    \"[object Int16Array]\": true,\n    \"[object Int32Array]\": true,\n    \"[object Uint8Array]\": true,\n    \"[object Uint8ClampedArray]\": true,\n    \"[object Uint16Array]\": true,\n    \"[object Uint32Array]\": true,\n    \"[object Float32Array]\": true,\n    \"[object Float64Array]\": true\n};\nfunction isTypedArray(arr) {\n    return isStrictTypedArray(arr) || isLooseTypedArray(arr);\n}\nfunction isStrictTypedArray(arr) {\n    return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;\n}\nfunction isLooseTypedArray(arr) {\n    return names[toString.call(arr)];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdHlwZWRhcnJheS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBUUM7QUFDdEJBLGFBQWFDLE1BQU0sR0FBR0M7QUFDdEJGLGFBQWFHLEtBQUssR0FBSUM7QUFFdEIsSUFBSUMsV0FBV0MsT0FBT0MsU0FBUyxDQUFDRixRQUFRO0FBQ3hDLElBQUlHLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUVBLFNBQVNSLGFBQWFTLEdBQUc7SUFDdkIsT0FDS1AsbUJBQW1CTyxRQUNuQkwsa0JBQWtCSztBQUV6QjtBQUVBLFNBQVNQLG1CQUFtQk8sR0FBRztJQUM3QixPQUNLQSxlQUFlQyxhQUNmRCxlQUFlRSxjQUNmRixlQUFlRyxjQUNmSCxlQUFlSSxjQUNmSixlQUFlSyxxQkFDZkwsZUFBZU0sZUFDZk4sZUFBZU8sZUFDZlAsZUFBZVEsZ0JBQ2ZSLGVBQWVTO0FBRXRCO0FBRUEsU0FBU2Qsa0JBQWtCSyxHQUFHO0lBQzVCLE9BQU9ELEtBQUssQ0FBQ0gsU0FBU2MsSUFBSSxDQUFDVixLQUFLO0FBQ2xDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JlZW52ZXN0b3IvLi9ub2RlX21vZHVsZXMvaXMtdHlwZWRhcnJheS9pbmRleC5qcz8xMmY5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzICAgICAgPSBpc1R5cGVkQXJyYXlcbmlzVHlwZWRBcnJheS5zdHJpY3QgPSBpc1N0cmljdFR5cGVkQXJyYXlcbmlzVHlwZWRBcnJheS5sb29zZSAgPSBpc0xvb3NlVHlwZWRBcnJheVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgbmFtZXMgPSB7XG4gICAgJ1tvYmplY3QgSW50OEFycmF5XSc6IHRydWVcbiAgLCAnW29iamVjdCBJbnQxNkFycmF5XSc6IHRydWVcbiAgLCAnW29iamVjdCBJbnQzMkFycmF5XSc6IHRydWVcbiAgLCAnW29iamVjdCBVaW50OEFycmF5XSc6IHRydWVcbiAgLCAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nOiB0cnVlXG4gICwgJ1tvYmplY3QgVWludDE2QXJyYXldJzogdHJ1ZVxuICAsICdbb2JqZWN0IFVpbnQzMkFycmF5XSc6IHRydWVcbiAgLCAnW29iamVjdCBGbG9hdDMyQXJyYXldJzogdHJ1ZVxuICAsICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nOiB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBpc1N0cmljdFR5cGVkQXJyYXkoYXJyKVxuICAgIHx8IGlzTG9vc2VUeXBlZEFycmF5KGFycilcbiAgKVxufVxuXG5mdW5jdGlvbiBpc1N0cmljdFR5cGVkQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgYXJyIGluc3RhbmNlb2YgSW50MTZBcnJheVxuICAgIHx8IGFyciBpbnN0YW5jZW9mIEludDMyQXJyYXlcbiAgICB8fCBhcnIgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgfHwgYXJyIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCBhcnIgaW5zdGFuY2VvZiBVaW50MTZBcnJheVxuICAgIHx8IGFyciBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XG4gICAgfHwgYXJyIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XG4gICAgfHwgYXJyIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XG4gIClcbn1cblxuZnVuY3Rpb24gaXNMb29zZVR5cGVkQXJyYXkoYXJyKSB7XG4gIHJldHVybiBuYW1lc1t0b1N0cmluZy5jYWxsKGFycildXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImlzVHlwZWRBcnJheSIsInN0cmljdCIsImlzU3RyaWN0VHlwZWRBcnJheSIsImxvb3NlIiwiaXNMb29zZVR5cGVkQXJyYXkiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsIm5hbWVzIiwiYXJyIiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-typedarray/index.js\n");

/***/ })

};
;