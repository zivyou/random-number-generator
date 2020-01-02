'use strict'


var checkBoxes = new Vue({
    el: '#app',
    data: {
        names: [],
        inputValue: '',
        luckGuy: '^_^',
        sign: false,
    },
    methods: {
        onSubmit: function () {
            this.names.push(this.inputValue);
            this.inputValue = '';
        },
        onLiClick: function (liIndex) {
            this.names.splice(liIndex, 1);
        },
        onDraw: function () {
            this.sign = true;
            beginToChoose();
        },
        onStop: function () {
            this.sign = false;
        }
    }
});

function beginToChoose() {
    var guys = checkBoxes.$data.names;
    if (checkBoxes.$data.sign) {
        var luckGuyIndex = Math.floor(guys.length * Math.random());
        checkBoxes.$data.luckGuy = guys[luckGuyIndex]
        setTimeout(beginToChoose, 50);
    }
}
