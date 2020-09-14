
function isEmpty(obj) {

    // 检验 undefined 和 null


    if (!obj && obj !== 0 && obj !== '') {
        return true;
    }

    if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) { return true; }

    if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) { return true; }
    return false;
}