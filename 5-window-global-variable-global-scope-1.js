// https://web.programming-hero.com/course/video/web-3-25-5-window-global-variable-global-scope

// document === window.document == true == console e dekte hobe
// document === window.console

// document.getElementById == false == ei ta direct pabe nah


function add(num1, num2) { //function global e ase
    var result = n1 + n2;
    console.log('resul inside', result);
    return result;
}
//console.log('resul outside', result); == error coz result = local scope e ase
var sum = add(13, 21);
console.log(sum);






var name = 'Khan' // name = Global variable
function add(num1, num2) {
    var result = n1 + n2;
    console.log('resul inside', name);

    function double(num1) { // function local e ase
        var total = num1 * 2
    }
    return result;
}

// console.log('resul outside', result); => error coz => eta aage deya hoise tai variable ta ke pai e nai jei tai value ase
//console.log('resul outside', result); == error coz result local scope e ase
var sum = add(13, 21);
console.log(sum);
console.log('resul outside', result); // no error





function add(num1, num2) { //function global e ase
    var result = n1 + n2; // result is global for scope
    result = n1 + n2; // result is global
    window.result = n1 + n2; // result is global
    console.log('resul inside', result);
    return result;
}
var sum = add(13, 21);
console.log(sum);