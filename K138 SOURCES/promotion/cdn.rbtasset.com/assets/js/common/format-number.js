function formatAccNo(num, jsonArray) {
    var res = "";
    if (num == "-") return num;
    if (num == null) num = "0";
    num = num.toString().replace(/[^0-9+Ee.]/g, '');
    if (isNaN(num)) return "0";

    var lgt = num.length;
    if (lgt > jsonArray[jsonArray.length - 1].lgth) {
        num = num.substring(0, jsonArray[jsonArray.length - 1].lgth);
        lgt = jsonArray[jsonArray.length - 1].lgth;
    }

    var format = jsonArray[0].fmt;
    for (var x = 0; x < jsonArray.length; x++) {
        if (lgt <= jsonArray[x].lgth) {
            format = jsonArray[x].fmt;
            break;
        }
    }

    var indexofformat = 1;
    for (var i = 0; i < lgt; i++) {
        res += num[i];
        if (format[i + indexofformat] == "-") {
            if (i != lgt - 1) {
                indexofformat += 1;
                res += "-";
            }
        }

    }
    return res;
}

function formatCurrency(num, inputType, decimal, max) {
    if (num == "-") return num;
    if (num == null) num = "0";
    dec2 = 0;
    if (decimal > 0) {
        dec = num.toString().split(".");
        if (dec.length > 1) {
            dec2 = dec[1];
        }
    }
    num = num.toString().replace(/[^0-9+\-Ee.]/g, '');
    sign = (num == (num = Math.abs(num)));
    if (isNaN(num)) num = "0";
    if (max != null && max > 0 && sign) {
        if (num > max) {
            num = max;
        }
    }
    num = Math.floor(num * 100 + 0.50000000001);
    num = Math.floor(num / 100).toString();
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
        num.substring(num.length - (4 * i + 3));
    if (num != '0' || (decimal != null && dec2 > 0)) {
        prefix = sign ? '' : '-';
        if (decimal != null && decimal > 0) {
            dec2 = 0 + "." + dec2;
            dec2 = parseFloat(dec2).toFixed(decimal);
            dec = dec2.toString().split(".");
            dec2 = dec[1];
            num += "." + dec2;
        }
        if (inputType == null) {
            if (prefix == '-') {
                num = "0";
            }
        } else {
            num = prefix + num;
        }

    } else if (num == '0') {
        num = '0';
        if (decimal != null && decimal > 0) {
            dec2 = 0 + "." + dec2;
            dec2 = parseFloat(dec2).toFixed(decimal);
            dec = dec2.toString().split(".");
            dec2 = dec[1];
            num += "." + dec2;
        }
    } else num = '';
    return num;
}