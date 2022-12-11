closeElementOnMouseUp(".user-info-balance");
closeSelectDivOnMouseUp();
newPoolCategory();
removeFooterLogo();
reelKingdomBaruTag();
pragmaticOneTag();

function reelKingdomBaruTag() {
    $(document).ready(function() {
        let dataMobile = $("body").data("mobile");
        let parentEl = $('li[class="game sub prk"]');
        let tag = $('<span class="label-new blink" style="top:20px;margin-left:20px;">BARU</span>');
        if (dataMobile) {
            parentEl = $('.provider-item-list').find('.prk');
            tag = $('<span class="label-new blink" style="left:5px">BARU</span>');
        }
        parentEl.prepend(tag);
    });
}

function pragmaticOneTag() {
    $(document).ready(function() {
        let parentEl = $('li[class="game sub pgr"]');
        var dataMobile = $("body").data("mobile");
        if (dataMobile) {
            parentEl = $('ul[class="provider-item-list slot"]').find('.pgr');
        }
        var img = $(parentEl).find("img");
        var oldSrc = $(img).attr("src");
        var newSrc = oldSrc.replace("pp-hot-tag", "pgr-no1");
        $('img[src="' + oldSrc + '"]').attr('src', newSrc).css('top', '-5px');
    });
}

function removeFooterLogo() {
    $(document).ready(function() {
        let dataMobile = $("body").attr("data-mobile");
        if (dataMobile == "true") {
            $(".infini-logo").remove();
        } else {
            $(".rules-agreement").prev().remove();
        }
    });
}

function initializeBankLimit() {
    if (localStorage.lastRequest) {
        let now = Date.now();
        let lastRequest = Number(localStorage.lastRequest);
        if ((lastRequest - now) < 0) {
            localStorage.removeItem("lastRequest");
            getBankLimitTrx();
        }
    } else {
        if (!localStorage.bankLimit && !localStorage.bankList) {
            getBankLimitTrx();
        }
    }
}

function getBankLimitTrx() {
    callApi("/api/bank/limitTrx", null, function(response) {
        let limitTrx = response.data.bankLimit;
        localStorage.bankLimit = JSON.stringify(limitTrx);

        let bankList = response.data.bankList;
        localStorage.bankList = JSON.stringify(bankList);

        let lastRequest = response.data.time;
        localStorage.lastRequest = lastRequest;
    });

    // return axios.get('/api/bank/limitTrx').then(function (response) {
    // 	let limitTrx = response.data.data.bankLimit;
    // 	localStorage.bankLimit = JSON.stringify(limitTrx);

    // 	let bankList = response.data.data.bankList;
    // 	localStorage.bankList = JSON.stringify(bankList);

    // 	let lastRequest = response.data.data.time;
    // 	localStorage.lastRequest = lastRequest;
    // })
    // .catch(function (error) {
    // 	console.log(error);
    // });
}

function confirm_signout() {
    if (confirm(alertMsg.confirmation_logout)) {
        show_loader();
        redirectPage("logout");
    } else {
        return false;
    }
}

function clearBankList(key) {
    if (typeof key === "undefined") {
        localStorage.clear();
    } else {
        localStorage.removeItem(key);
    }
}

// checking balance each provider
$(document).on("click", "span.calibrate", function(e) {
    if (confirm(alertMsg.confirmation_calibrate)) {
        var _this = $(this);
        var obj = _this.parent().prev("td").find('span');
        var main = $("#creditBalance, #main-balance-holder");
        var balance = 0;

        var pvcd = _this.attr("data-id");
        // set loading bar
        obj.html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');

        var data = {
            "pvcd": pvcd
        };
        callApi("/api/wallet/calibrate/provider", data, function(resp) {
            alert(resp.data.message);
            main.html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
            setTimeout(function() {
                if (resp.data.balance == null) {
                    obj.text(alertMsg.retry);
                } else {
                    obj.text(formatCurrency(resp.data.balance, null, 2) + " K");
                }
                if (resp.data.main) {
                    main.text(formatCurrency(resp.data.main, null, 2) + " K");
                }
            }, 1000);
        });
    } else {
        return;
    }
});

var total = [];
var count = 0;

function reload_wallet_2() {
    $("#creditBalance, .main-wallet, .game-wallet, .totalWallet").html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');

    setTimeout(function() {
        // get main wallet
        callApi3("/api/wallet/main/getBalance", "GET", null).then(function(resp) {
            var balance = resp.data.balance;
            total.push({
                "pvcd": "MAIN",
                "balance": balance
            });
            $("#creditBalance, .main-wallet").text(formatCurrency(balance, null, 2) + " K");

            //get provider balance
            if (pvls.length > 0) {
                for (var i = 0; i < pvls.length; i++) {
                    var code = pvls[i].pvcode;
                    if (pvls[i].isMaintenance == false && !disabledPv.includes(code)) {
                        var attrid = "game-balance-" + code.toLowerCase();

                        if (pvls[i].pvst == 1) {
                            var json = {
                                "pvcd": code.toLowerCase(),
                                "curr": pvls[i].pvcurmulti
                            };
                            getProviderBalance(json, attrid);
                        } else {
                            var ele = $("#" + attrid);
                            if (ele.children().is('i')) {
                                ele.children("i").remove();
                                ele.text(formatCurrency(0, null, 2) + " K");
                            }
                        }
                    }
                }
            } else {
                callApi3("/api/wallet/getTotal", "GET", null).then(function(resp) {
                    if (resp.success == true) {
                        var grandtotal = resp.data.balance;
                        $(".totalWallet").html("<b>" + formatCurrency(grandtotal, null, 2) + " K</b>");
                    } else {
                        $(".totalWallet").html("<b>" + formatCurrency(0, null, 2) + " K</b>");
                    }

                    count = 0;
                    done_reload();
                }, errorHandler);
            }
        }, errorHandler);
    }, 1000);
}

function getProviderBalance(json, attrid) {
    callApi3("/api/wallet/provider/getBalance", "POST", json).then(function(resp) {
        var pvcd = json.pvcd.toUpperCase();
        if (resp.success == true) {
            var balance = resp.data.balance;
            $("#" + attrid).text(formatCurrency(balance, null, 2) + " K");
            total.push({
                "pvcd": pvcd,
                "balance": balance
            });
            count++;
        } else {
            $("#" + attrid).text(alertMsg.retry);
            total.push({
                "pvcd": pvcd,
                "balance": null
            });
            count++;
        }

        if (count == pvls_total) {
            var totalBalance = 0;
            for (var i = 0; i < total.length; i++) {
                var bal = total[i].balance;
                if (bal == null) {
                    bal = 0;
                }
                totalBalance = parseFloat(totalBalance) + parseFloat(bal);
            }
            $(".totalWallet").html("<b>" + formatCurrency(totalBalance, null, 2) + " K</b>");
            count = 0;
            total = [];
            done_reload();
        }
    }, errorHandler);
}

function totalBalance(payload) {
    var sum = parseFloat(0);
    for (var i = 0; i < payload.length; i++) {
        var bal = parseFloat(payload[i].balance);
        if (bal == null) {
            bal = parseFloat(0);
        }
        sum = sum + bal;
    }

    return sum;
}

function errorHandler(statusCode) {
    console.log("failed with status", statusCode);
}

function done_reload() {
    $(".game-wallet").each(function() {
        var _this = $(this);
        if (_this.children().is('i')) {
            _this.children("i").remove();
            _this.text(formatCurrency(0, null, 2) + " K");
        }

        counter = 0;
    });
}

function countDown(i) {
    var counter = setInterval(function() {
        i--;
        if (i >= 0 && i < 3) {
            $('#counter').html(i);
        }
        if (i == 0) { //if i is 0, then stop the interval
            clearInterval(counter);
        }
    }, 1000);
}

var hideAlert;

function hide_alert() {
    if ($("div.alert").text().length > 0) {
        hideAlert = setTimeout(function() {
            $("div.alert").removeClass("alert-danger alert-success alert-warning").html("").hide();
        }, 3000);
    }
}

function closeAlert() {
    setTimeout(function() {
        $("#Alert").html("")
            .removeClass("alert-success alert-danger alert-dismissible fade-in show")
            .hide();
    }, 3000);
}

function realDateTime() {
    setInterval(function() {
        var d = new Date();
        var hour = d.getHours(); // Jumlah jam (0-23)
        var minute = d.getMinutes(); // Jumlah menit (0-59)
        var second = d.getSeconds(); // Jumlah menit (0-59)
        var month = d.getMonth(); // Jumlah bulan (0-11)
        var day = d.getDate(); // Hari dari bulan (0-31)
        var year = d.getFullYear(); // current year
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (day < 10) day = '0' + day;
        if (hour < 10) hour = '0' + hour;
        if (minute < 10) minute = '0' + minute;
        if (second < 10) second = '0' + second;

        var datetime = day + ' ' + months[month] + ' ' + year + ', ' + hour + ':' + minute + ':' + second;

        $("#thedate").text(datetime);
    }, 1000); // 60 seconds
}

function popup(module, addr) {
    var hostname = window.location.href;
    var arr = hostname.split("/");
    var host = arr[0] + "//" + arr[2] + "/";
    var name = module;
    var url = addr == "" ? module : module + "/" + addr;
    var width, height;

    switch (module) {
        case "bank":
        case "bonus":
        case "report":
            width = 1100;
            height = 685;
            break;
        case "account":
            width = 1100;
            height = 600;
            break;
        case "common":
            width = 815;
            height = 800;
            name = "_blank";
            url = addr;
            break;
    }

    mywindow = window.open(host + url, name, "scrollbars=yes,resizable=yes,top=20,left=20,width=" + width + ",height=" + height);
    mywindow.focus();
}

function do_login(target /*, id*/ ) {
    $('#LoginPopupModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#target').val(target);
    //	$('#gmsb').val(id);
}

function close_mask() {
    $("#LoginPopupModal").modal("hide").css({
        'z-index': ''
    });
    $('#target').val("");
}

function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function calibrate() {
    if (confirm(alertMsg.confirmation_calibrate)) {
        // show the loader
        $("#dialog-mask").show();

        $.ajax({
            url: '/api/wallet/calibrate',
            type: "GET",
            success: function(response, textStatus, xhr) {
                if (xhr.status == 200 && response.success == true) {
                    alert(response.data.message);

                    // hide the loader
                    $("#dialog-mask").hide();

                    // refresh wallet if total collect ore than 0
                    if (response.data.total > 0) {
                        reload_wallet_2();
                    }
                }
            }
        });
    } else {
        return;
    }
}

function hide_loader() {
    $('#dialog-mask').hide();
}

function show_loader() {
    $('.page-loader').show();
}

function show_popupbanner() {
    $(document).ready(function() {
        $("#loader").hide();
        $("#dialog-mask").show();
    });
}

function close_popupbanner() {
    $(document).on("click", "#CloseBannerPop, .banner-popup-link", function(e) {
        e.preventDefault();
        $("#BannerPop").hide();
        $("#loader").show();
        $("#dialog-mask").hide();

        if ($(this).hasClass("banner-popup-link")) {
            window.open($(".banner-popup-link").attr('href'), '_blank').focus();
        }
        callApi("/api/banner/popup/close", null, function(response) {});
    });
}

function closePopupMobile() {
    $(document).on("click", "button.close, .banner-popup-link", function(e) {
        // if( $(this).hasClass("banner-popup-link") ) {
        // 	window.open($(".banner-popup-link").attr('href'), '_blank').focus();
        // }
        // callApi("/api/banner/popupmb/close", null, function(response) {});
        callApi("/api/banner/popupmb/close", null, function(response) {
            $("#PopupBanner").fadeOut(300);
            $(".modal-backdrop").fadeOut(300);
            $("#PopupBanner, .modal-backdrop").remove();

            if ($(this).hasClass("banner-popup-link")) {
                window.open($(".banner-popup-link").attr('href'), '_blank').focus();
            }
        });
    });
}

function select_language() {
    if ($(".dropMenu:visible").length == 0) {
        $(".dropMenu").show();
    } else {
        $(".dropMenu").hide();
    }
}

function redirectPage(path) {
    var target = baseUrl(path);
    window.location.replace(target);
}

function baseUrl(path) {
    var object = window.location;
    var scheme = object.protocol;
    var host = object.hostname;
    var port = object.port;
    var baseUrl = scheme + "//" + host;
    if (port != "") {
        baseUrl = baseUrl + ":" + port
    }
    //	var baseUrl = port == "" ? scheme + "//" + host : scheme + "//" + host + ":" + port;
    if (typeof path !== "undefined") {
        baseUrl = path.substring(0, 4) == "http" ? path : baseUrl + "/" + path;
    }

    return baseUrl;
}

function digits(e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
        ((e.keyCode == 65 || e.keyCode == 86 || e.keyCode == 67) && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        // let it happen, don't do anything
        return;
    }

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}

function closeElementOnMouseUp(element) {
    $(document).mouseup(function(e) {
        var container = $(element);

        if ($("#popover-balance-content").is(":visible")) {
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $("#popover-balance-content").hide();
            }
        }
    });
}

function closeSelectDivOnMouseUp() {
    $(document).mouseup(function(e) {
        var container = $(".conlist.active");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("active");
        }
    });
}
// function getMainBalance(e) {
// 	$(e).html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
// 	callApi3("/api/wallet/main/getBalance", "GET", null).then(function(resp) {
// 		var balance = resp.data.balance;
// 		$(e).text(formatCurrency(balance, null, 2) + " K");
// 		$(".main-wallet").text(formatCurrency(balance, null, 2) + " K");
// 	});
// }

// $(document).on("click", "#iconReload", function() {
// 	var check = $(this).attr("data-check");
// 	var target = $("#popover-balance-content");
// 	if( target.is(":hidden") ) {
// 		target.show();
// 		if( check == false || check == "false" ) {
// 			reload_wallet_2();
// 			$(this).attr("data-check", true);
// 		}
// 	} else {
// 		target.hide();
// 	}
// });

$(document).on("click", "#creditBalance", function() {
    var target = $("#popover-balance-content");
    target.is(":hidden") ? target.show() : target.hide();
});

$(document).on("click", "#iconReload", function() {
    var target = $("#popover-balance-content");
    if (target.is(":hidden")) {
        $("#creditBalance").html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
        callApi3("/api/wallet/main/getBalance", "GET", null).then(function(resp) {
            var balance = resp.data.balance;
            $("#creditBalance").text(formatCurrency(balance, null, 2) + " K");
            $(".main-wallet").text(formatCurrency(balance, null, 2) + " K");
        });
    } else {
        reload_wallet_2();
    }
});

// SSE feature
// var MAIN_BALANCE = ["#creditBalance","#FromWallet","#ToWallet","#MainAmount > dd","#CurrentBalance","#MainWalletAmount","#mainamt"];
var MAIN_BALANCE = [{
        "name": "#creditBalance",
        "suffix": " K"
    },
    {
        "name": "#mainamt",
        "suffix": " K"
    },
    {
        "name": "#main-balance-holder",
        "suffix": " K"
    },
    // {"name":".totalWallet", "suffix":" K"},
    {
        "name": "#FromWallet",
        "suffix": ""
    },
    {
        "name": "#ToWallet",
        "suffix": ""
    },
    {
        "name": "#MainAmount > dd",
        "suffix": ""
    },
    {
        "name": "#CurrentBalance",
        "suffix": ""
    },
    {
        "name": "#MainWalletAmount",
        "suffix": ""
    }
];

function _sseUpdateBalance(obj) {
    var data = JSON.parse(obj);
    if (data.act == "creditBalanceFeUp") {
        var balance = formatCurrency(data.balance, null, 2);

        for (var i = 0; i < MAIN_BALANCE.length; i++) {
            var el = MAIN_BALANCE[i];
            if ($(el.name).length == 1) {
                // set all
                $(el.name).text(balance + el.suffix);

                var tagName = $(el.name).prop("tagName").toLowerCase();
                if (tagName == "input") {
                    $(el.name).val(formatCurrency(data.balance, null, 0));
                    $(el.name).attr("data-balance", data.balance);
                } else {
                    if (el.name.includes("CurrentBalance")) {
                        $(el.name).text(formatCurrency(data.balance, null, 0));
                        $(el.name).attr("data-balance", data.balance);
                    }

                    // desktop
                    // var popoverBal = $("#popover-balance-content");
                    // if( popoverBal.is(":hidden") && el.name.includes("totalWallet") ) {
                    // }
                    var trFrom = $("#TransferFrom").find("li.selected").data("value");
                    var trTo = $("#TransferTo").find("li.selected").data("value");
                    if (trFrom != "" && trTo != "") {
                        if (trFrom == "MAIN" && trTo != "MAIN" && el.name.includes("ToWallet")) {
                            $(el.name).text(formatCurrency(0, null, 2));
                        }
                        if (trFrom != "MAIN" && trTo == "MAIN" && el.name.includes("FromWallet")) {
                            $(el.name).text(formatCurrency(0, null, 2));
                        }
                    }

                    // mobile
                    var mtrFrom = $("#TransferFrom").find("option:selected").val();
                    var mtrTo = $("#TransferTo").find("option:selected").val();
                    if (mtrFrom != "" && mtrTo != "") {
                        if (mtrFrom == "MAIN" && mtrTo != "MAIN" && el.name.includes("ToWallet")) {
                            $(el.name).text(formatCurrency(0, null, 2));
                        }
                        if (mtrFrom != "MAIN" && mtrTo == "MAIN" && el.name.includes("FromWallet")) {
                            $(el.name).text(formatCurrency(0, null, 2));
                        }
                    }
                }
            }
        }
    }
}

function newPoolCategory() {
    $(document).ready(function() {
        // check if4 element first
        var dataMobile = $("body").data("mobile");
        if (!dataMobile) {
            var ifdWeb = $('a[data-provider="ifd"]');
            if (ifdWeb.length == 1) {
                var el = $("li.lottery");
                // add New elements
                el.prepend('<span class="label-new blink">Baru</span>');
            }
        } else {
            var ifdMobile = $('ul[class="provider-item-list lottery"]');
            if (ifdMobile.length == 1) {
                var elMob = ifdMobile.find('.ifd');
                if (elMob.length == 1) {
                    var el = $("i.lottery");
                    // add New elements
                    el.before('<span class="label-new blink">Baru</span>');
                    el.find("span:last-child");
                }
            }
        }
    });
}

function setLoading(isSet) {
    isSet == true ? $(".page-loader").show() : $(".page-loader").hide();
}