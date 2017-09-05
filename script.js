$(document).ready(function() {

    var phrases = [
        'I may not have always shown it, but Im gratefull to have had such an awesome teacher like you.',
        'Thank You',
        'For Being A WonderFull Teacher.',
        'Happy Teachers Day',
        '~From~',
        '~Abhishek :)   ....',
    ];
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#bubble'),
        newText: phrases[index++],
        letterSpeed: 170,
        repeat: Infinity,
        timeBetweenRepeat: 1500,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });

});
