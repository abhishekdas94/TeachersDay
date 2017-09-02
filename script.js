$(document).ready(function() {

    var phrases = [
        'Thanks For Giving Me That Key',
        'To My Future.',
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
        timeBetweenRepeat: 2000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });

});
