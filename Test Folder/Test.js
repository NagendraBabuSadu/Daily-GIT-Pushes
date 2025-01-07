const count =  (() => {
    let i = 0;  
    function common () {
        i++;
        console.log("i", i);
        return i;
    }
    common.reset = function () {
        console.log("called Reset");
        i = 0;
    }

    return common;
})();

count();
count();
console.log("count", count());
count.reset();

count();