$(document).ready(function() {
    var account = new Account();
    var validate = new AccountValidation();
    var errorlogin = $("#hdnLoginSession").length == 1 ? true : false;
    var ismobile = $("body").data("mobile");

    ismobile == true ? init_mobile() : init_desktop();

    function init_desktop() {
        // Login through modal popup
        $("#LoginPopup").submit(function(e) {
            e.preventDefault();

            var form = $(this).closest("form");
            //$("#LP_Captcha").val("").focus();
            $("#CaptchaPopupModal").modal({
                    backdrop: "static",
                    keyboard: false
                })
                .on('show.bs.modal', function() {
                    $("#LP_Captcha").val("").focus();
                })
        });

        // Re-generate Captcha
        $("#ReloadCaptcha").on("click", function() {
            if ($("#CaptchaPopupModal").is(":visible")) {
                $("#CaptchaPopupModal").find("#imgCaptcha").attr('src', '/captcha/login/' + new Date().getTime());
                $("#LP_Captcha").val("").focus();
            } else {
                $("#imgCaptcha").attr('src', '/captcha/login/' + new Date().getTime());
                $("#Captcha").val("").focus();
            }
        });

        // Login through Captcha security
        $("#CaptchaPopup").submit(function(e) {
            e.preventDefault();
            setLoading(true);

            var form = $(this).closest("form");

            // checking captcha
            account.type = "login";
            account.captcha = $("#LP_Captcha").val();
            account.setCheckCaptchaData();
            checkCaptcha(account.getData())
                .then(function(response) {
                    var result = response.data;
                    if (result.success == false) {
                        alert(result.data.message);
                        setLoading(false);
                        if ($("#CaptchaPopupModal").is(":visible")) {
                            $("#CaptchaPopupModal").find("#imgCaptcha").attr('src', '/captcha/login/' + new Date().getTime());
                            $("#LP_Captcha").val("").focus();
                        }
                        return;
                    }

                    // do login
                    var prefix = $("#LoginPopupModal").hasClass("show") ? "LP_" : "HL_";
                    var token = $("#token").val();
                    var encpass = sha256(sha256($("#" + prefix + "Password").val()) + token);
                    $("#" + prefix + "Password").val(encpass);
                    account.token = token;
                    account.lang = $("html").attr("lang");
                    account.username = $("#" + prefix + "Username").val();
                    account.password = encpass;

                    account.setLoginData();
                    doLogin(account.getData()).then(function(response) {
                        var targetURL = $("#target").val();
                        if (targetURL != "") {
                            successHandling(response, targetURL);
                        } else {
                            successHandling(response);
                        }
                        //clearBankList();
                    }).catch(function(error) {
                        exceptionHandling(error.response);
                    });
                })
                .catch(function(error) {
                    exceptionHandling(error.response);
                    resetForm(form);
                });
        });

        // Login in the main form (header section)
        $("#HeaderLoginForm").submit(function(e) {
            e.preventDefault();
            $("#CaptchaPopupModal").modal({
                backdrop: "static",
                keyboard: false
            });
            // $("#CaptchaPopupModal").find("#imgCaptcha").attr('src', '/captcha/login/' + new Date().getTime());
            $("#LP_Captcha").val("").focus();
            return false;
        });
    }

    function init_mobile() {
        // Password Show and Hide
        $("#pwd_visibility").on("click", function() {
            var target = $("#Password");
            var type = target.attr("type") == "password" ? "text" : "password";
            target.attr("type", type);
            target.focus();
        });

        // Reload Captcha
        $("#reloadCaptcha").on("click", function() {
            $("#imgCaptcha").attr('src', '/captcha/login/' + new Date().getTime());
            $("#Captcha").val("").focus();
        });

        // Live validating
        $(".input-field > input").on("keyup", function() {
            var element = $(this);

            validate.element = element;
            validate.label = getFieldName(element);
            validate.check();
        });

        // Login button
        $("#LoginButton").on("click", function(e) {
            e.preventDefault();

            var form = $(this).closest("form");
            $(form).find('input').each(function() {
                var element = $(this);

                if ($(this).prop('required')) {
                    validate.element = element;
                    validate.label = getFieldName(element);
                    validate.check();
                }
            });

            if (validate.isError() == false) {
                setLoading(true);

                account.type = "login";
                account.captcha = $("#Captcha").val();
                if (account.captcha == "") {
                    alert(validationMsg.valid_captcha);
                    return;
                }

                // checking captcha
                account.setCheckCaptchaData();
                checkCaptcha(account.getData())
                    .then(function(response) {
                        var result = response.data;
                        if (result.success == false) {
                            alert(result.data.message);
                            setLoading(false);
                            $("#imgCaptcha").attr('src', '/captcha/login/' + new Date().getTime());
                            $("#Captcha").val("").focus();
                            return;
                        }

                        // do login
                        var token = $("#token").val();
                        var encpass = sha256(sha256($("#Password").val()) + token);
                        $("#Password").val(encpass);
                        account.token = token;
                        account.username = $("#Username").val();
                        account.password = encpass;
                        account.devicetoken = $("#DeviceToken").val();
                        account.deviceid = $("#DeviceID").val();
                        account.lang = $("html").attr("lang");

                        account.setLoginData();
                        doLogin(account.getData()).then(function(response) {
                            successHandling(response);
                            //clearBankList();
                        }).catch(function(error) {
                            exceptionHandling(error.response);
                            resetForm(form);
                        });
                    })
                    .catch(function(error) {
                        exceptionHandling(error.response);
                        resetForm(form);
                    });
            } else {
                validate.setFocus();
            }
        });
    }

    /*** FUNCTIONS ***/
    function getFieldName(element) {
        return element.attr("placeholder");
    }

    function resetForm(form) {
        $(form).find("input").each(function(i, obj) {
            var el = $(obj);
            var type = el.attr("type");

            if (type == "text" || type == "password") {
                $(obj).val("");
            }
            if (i == 0) {
                $(obj).focus();
            }
        });
    }

    function doLogin(payload) {
        return axios.post("/v2/api/account/login", payload);
    }

    function checkCaptcha(payload) {
        return axios.post("/api/security/checkCaptcha", payload);
    }

    function successHandling(response, targetURL) {
        var result = response.data;
        var msg = result.data.message;
        var lastLogin = result.data.hasOwnProperty('lastLogin') ? result.data.lastLogin : '';

        alert(msg + lastLogin);
        if (result.success == true && typeof targetURL !== "undefined") {
            window.open(targetURL, '_blank');
        }

        if (typeof result.data.redirect !== "undefined") {
            redirectPage(result.data.redirect);
        } else {
            redirectPage();
        }
    }

    function exceptionHandling(error) {
        if (typeof error !== "undefined") {
            alert("[" + error.status + "] - " + error.data.message);
            setLoading(false);
        }
    }

    function setLoading(isSet) {
        var loader = $(".page-loader");
        isSet == true ? loader.show() : loader.hide();
    }
});