alert("Bot by cdskl loaded. Page by Sparksammy.");
var nums = [6, 7]

function main() {
    var key = ((nums[Math.floor(Math.random() * nums.length)].toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()));
    var key2 = ((Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()));
    var key3 = ((Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()));
    var code = (key + " " + key2 + " " + key3)
    document.getElementById("pin").value = code;
    Roblox.GameCard.redeemCode();
}

setInterval(function() {
    main();
}, 500);
