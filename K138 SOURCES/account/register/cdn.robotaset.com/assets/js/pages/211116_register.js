$(document).ready(function() {
    var alertbox = new Alert();
    var account = new Account();
    var validate = new AccountValidation();
    var ismobile = $("body").data("mobile");

    // handler to check or validate each input field
    $(".input-field > input").on("blur", function() {
        var element = $(this);
        var id = element.attr("id");

        if (id != "Username" && id != "Referral") {
            validate.element = element;
            validate.label = getFieldName(element);
            validate.check();
        }
    });

    // show and hide password
    $(".btn-pwd-visibility").on("click", function() {
        var pwdfield = $(".pwdinput");
        var type = pwdfield.attr("type") == "password" ? "text" : "password";
        var buttontext = type == "password" ? button.show : button.hide;

        $(this).text(buttontext);
        pwdfield.attr("type", type);
    });

    // handler to reload captcha
    $(".btn-reload-captcha").on("click", function() {
        resetCaptcha(true);
    });

    // register button
    $("#RegisterButton").on("click", function(e) {
        setLoading(true);
        e.preventDefault();
        // disabled register button preventing from too many clicks
        var btnReg = $(this);
        btnReg.attr("disabled", "disabled");

        $('#RegisterForm').find('input').each(function() {
            var element = $(this);
            var id = element.attr("id");
            var value = element.val();

            if ($(this).prop('required')) {
                if (id != "Username" && id != "Referral") {
                    validate.element = element;
                    validate.label = getFieldName(element);
                    validate.check();
                }
            }
        });

        if (validate.isError() == false) {
            account.username = $("#Username").val();
            account.password = $("#Password").val();
            account.cpassword = $("#CPassword").val();
            account.firstname = $("#FirstName").val();
            account.countrycode = $('#CountryCode').val();
            account.mobilenumber = $('#MobileNumber').val();
            account.referral = $("#Referral").val();
            account.captcha = $("#Captcha").val();
            account.token = $("#Token").val();
            account.devicetoken = ismobile == true ? deviceToken : "";
            account.lang = $("html").attr("lang");
            account.captcha = $("#Captcha").val();

            // do register
            account.setRegisterData();
            doRegister(account.getData()).then(function(response) {
                setLoading(false);
                alertbox.code = response.data.code;
                alertbox.message = response.data.data.message;
                alertbox.set();
                if (response.data.code != 0) {
                    alertbox.remove();
                    btnReg.removeAttr("disabled");
                    resetCaptcha(true);
                } else {
                    $(".input-field > input").blur();
                    var countdown = 5;
                    var url = response.data.data.redirect;

                    account.emptyform("register");
                    alertbox.redirect(countdown, url);
                }
            }).catch(function(error) {
                setLoading(false);
                alertbox.code = error.response.data.code;
                alertbox.message = error.response.data.data.message;
                alertbox.set();
                alertbox.remove();
                btnReg.removeAttr("disabled");
            });
        } else {
            setLoading(false);
            validate.setFocus();
            btnReg.removeAttr("disabled");
        }
    });

    /*** FUNCTIONS ***/
    function getFieldName(element) {
        var fieldname;
        var label1 = element.parent().prev("label");
        var label2 = element.parent().parent().prev("label");

        if (label1.length > 0) {
            fieldname = label1.text().replace("*", "").trim();
        } else {
            fieldname = label2.text().replace("*", "").trim();
        }

        return fieldname;
    }

    function resetCaptcha(isTriggered) {
        if (isTriggered == true) {
            $("#Captcha").closest(".textfield-wrap").removeClass("validation-pass").removeClass("validation-error");
        }
        $("#imgCaptcha").attr('src', '/captcha/register/' + new Date().getTime());
        $("#Captcha").val("").focus();
    }

    function exceptionHandling(error) {
        if (typeof error !== "undefined") {
            alert("[" + error.status + "] - " + alertMsg.request_failed);
            setLoading(false);
        }
    }

    function setLoading(isSet) {
        var loader = $(".page-loader");
        isSet == true ? loader.show() : loader.hide();
    }

    function doRegister(payload) {
        return axios.post("/api/account/register", payload);
    }

    function checkCaptcha(payload) {
        return axios.post("/api/security/checkCaptcha", payload);
    }
});