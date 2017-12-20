function minCoin() {
    var Sum = document.getElementById("totalCoins").value;
    var coins = [1, 2, 5, 10, 50];
    if (!Number(Sum)) {
        alert("Please Enter Valid Coin Value");
        return;
    }
    Sum = Number(Sum);
    var table = [Sum + 1];
    table[0] = 0;
    var coin = 0;
    var count = 0;
    for (var i = 1; i <= Sum; i++)
        table[i] = Number.MAX_VALUE;
    for (var i = 1; i <= Sum; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                coin = coins[j];
                var sub_res = table[i - coins[j]];
                if (sub_res != Number.MAX_VALUE && sub_res + 1 < table[i])
                    table[i] = sub_res + 1;
            }
        }
    }
    document.getElementById("minCoin").innerText = table[Sum];
    numberOfCoins(Sum, coins);
}

function numberOfCoins(num, arr) {
    var ans = [];
    var text = "";
    // var count = 0;
    for (var i = num - 1; i >= 0; i--) {
        while (num >= arr[i]) {
            num -= arr[i];
            ans.push(arr[i]);
        }
    }
    var count = {};
    ans.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
    var filters = []
    filters.push(count);
    filters.forEach(function(obj, index) {
        var c = 0
        for (var key in obj) {
            text += key + "*" + obj[key];
            c++
            if (c < Object.keys(obj).length)
                text += ", "
        }

    });
    document.getElementById("coinBreakDown").innerText = text;
}