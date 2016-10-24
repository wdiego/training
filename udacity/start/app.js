/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

var reSymbols = /[\!\@\#\$\%\^\&\*]/g;
var reNumber = /\d/g;
var reLower = /[a-z]/g;
var reUpper = /[A-Z]/g;
var reNotAllowed = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;

var errors = [];
var errors2 = [];

submit.onclick = function() {
    var pw = firstPasswordInput.value;
    var pw2 = secondPasswordInput.value;

    function checkRequirements() {
        var c1 = new RegExp(reSymbols, "g");
        var c2 = new RegExp(reNumber, "g");
        var c3 = new RegExp(reLower, "g");
        var c4 = new RegExp(reUpper, "g");
        var c5 = new RegExp(reNotAllowed, "g");


        if (pw.length < 16) {
            errors.push("fewer than 16 characters");
        }

        if (pw.length > 100) {
            errors.push("greater than 100 characters");
        }

        if (!pw.match(c1)) {
            errors.push("missing a symbol (!, @, #, $, %, ^, &, *)");
        }

        if (!pw.match(c2)) {
            errors.push("missing a number");
        }

        if (!pw.match(c3)) {
            errors.push("missing a lowercase letter");
        }

        if (!pw.match(c4)) {
            errors.push("missing an uppercase letter");
        }

        var illegalcharGroup = pw.match(c5);
        if (illegalcharGroup) {
            illegalcharGroup.forEach(function(illegalChar) {
                errors.push("includes illegal character: " + illegalChar);
            });
        }
    }

    function getErrors(errorList) {
        var errormsg = "";

        for (var i = 0; i < errorList.length; i++) {
            errormsg = errormsg + errorList[i] + '\n';
        }
        return errormsg;
    }

    errors = [];
    errors2 = [];

    if (pw === pw2 && pw.length > 0) {
        checkRequirements();
        secondPasswordInput.setCustomValidity("");
    } else {
        errors2.push("Passwords must match!");

    }

    if (errors.length + errors2.length === 0) {
        firstPasswordInput.setCustomValidity("");
        secondPasswordInput.setCustomValidity("");
        alert("Password change successful!");
    } else {
        firstPasswordInput.setCustomValidity(getErrors(errors));
        secondPasswordInput.setCustomValidity(getErrors(errors2));
    }

};