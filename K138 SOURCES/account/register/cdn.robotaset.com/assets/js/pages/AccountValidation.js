class AccountValidation {

    constructor(element, value) {
        this.element = element;
        this.value = value;
        this.rule = {};
        this.label = "";
        this.message = "";
        this.html = "";
    }

    set() {
        this.setType();

        this.html = '<div class="alert ' + this.type + ' alert-dismissible fade-in show" role="alert">';
        this.html += this.message;
        this.html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
        this.html += '<span aria-hidden="true">&times;</span>';
        this.html += '</button>';
        this.html += '</div>';
    }

    check() {
        //		AccountValidation.rules();
        this.value = this.element.val();

        switch (this.element.attr("id")) {
            case "Username":
            case "HL_Username":
            case "LP_Username":
                this.username();
                break;
                //			case "Email":		 this.email(); 			break;
            case "OldPassword":
                this.oldPassword();
                break;
            case "Password":
            case "HL_Password":
            case "LP_Password":
                this.password();
                break;
            case "CPassword":
                this.cpassword();
                break;
            case "FirstName":
                this.firstName();
                break;
                //			case "LastName":	 this.lastName(); 		break;
            case "MobileNumber":
                this.mobileNumber();
                break;
            case "Referral":
                this.referral();
                break;
            case "Captcha":
                this.captcha();
                break;
        }
    }

    isValidate() {
        if (this.message != "") {
            this.setError();
        } else {
            this.setSuccess();
        }
    }

    username() {
        var minlength = this.element.attr("minlength");
        var maxlength = this.element.attr("maxlength");
        var pattern = new RegExp('^[a-zA-Z0-9]+$');

        if (this.value == "") {
            this.message = validationMsg.required.replace("%s", this.label);
        } else if (pattern.test(this.value) == false) {
            this.message = (validationMsg.alpha_numeric.replace("%s", this.label));
        } else if (this.value.length < minlength) {
            this.message = validationMsg.min_length.replace("%s", this.label).replace("%d", minlength);
        } else if (this.value.length > maxlength) {
            this.message = validationMsg.max_length.replace("%s", this.label).replace("%d", maxlength);
        } else {
            this.message = "";
        }

        this.isValidate();
    }

    oldPassword() {
        var minlength = this.element.attr("minlength");
        var maxlength = this.element.attr("maxlength");

        if (this.value == "") {
            this.message = validationMsg.required.replace("%s", this.label);
        } else if (this.value.length < minlength) {
            this.message = validationMsg.min_length.replace("%s", this.label).replace("%d", minlength);
        } else if (this.value.length > maxlength) {
            this.message = validationMsg.max_length.replace("%s", this.label).replace("%d", maxlength);
        } else {
            this.message = "";
        }

        this.isValidate();
    }

    password() {
        var minlength = this.element.attr("minlength");
        var maxlength = this.element.attr("maxlength");

        if (this.value == "") {
            this.message = validationMsg.required.replace("%s", this.label);
        } else if (this.value.length < minlength) {
            this.message = validationMsg.min_length.replace("%s", this.label).replace("%d", minlength);
        } else if (this.value.length > maxlength) {
            this.message = validationMsg.max_length.replace("%s", this.label).replace("%d", maxlength);
        } else {
            this.message = "";
        }

        this.isValidate();
    }

    cpassword() {
        var passwordvalue = $("#Password").val();

        if (passwordvalue != "") {
            if (this.value != passwordvalue) {
                this.message = validationMsg.matches.replace("%s", this.label).replace("%s", "Password");
            } else {
                this.message = "";
            }
        } else {
            this.message = validationMsg.required.replace("%s", this.label);
        }

        this.isValidate();
    }

    /*email() {
    	var pattern = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    	
    	if( this.value == "" ) {
    		this.message = validationMsg.required.replace("%s", this.label);
    	} else if( pattern.test(this.value) == false ) {
    		this.message = (validationMsg.valid_email);
    	} else {
    		this.message = "";
    	}

    	this.isValidate();
    }*/

    firstName() {
        var pattern = new RegExp(/^[a-zA-Z ]+$/);

        if (this.value == "") {
            this.message = validationMsg.required.replace("%s", this.label);
        } else if (pattern.test(this.value) == false) {
            this.message = validationMsg.alpha_spaces.replace("%s", this.label);
        } else {
            this.message = "";
        }

        this.isValidate();
    }

    /*lastName() {
    	var pattern = new RegExp(/^[a-zA-Z ]+$/);
    	
    	if( this.value != "" ) {
    		if( pattern.test(this.value) == false ) {
    			this.message = validationMsg.alpha_spaces.replace("%s", this.label);
    			this.setError();
    		} else {
    			this.message = "";
    			this.setSuccess();
    		}
    	} else {
    		this.message = "";
    		this.setSuccess();
    	}
    }*/

    mobileNumber() {
        var minlength = this.element.attr("minlength");
        var pattern = new RegExp(/^[0-9]+$/);

        if (this.value == "") {
            this.message = validationMsg.required.replace("%s", this.label);
        } else if (pattern.test(this.value) == false) {
            this.message = (validationMsg.digit);
        } else if (this.value.length < minlength) {
            this.message = validationMsg.min_length.replace("%s", this.label).replace("%d", minlength);
        } else {
            this.message = "";
        }

        this.isValidate();
    }

    referral() {
        //		var fieldname = this.getFieldName(this.element);
        var pattern = new RegExp('^[a-zA-Z0-9]+$');

        if (this.value != "") {
            if (pattern.test(this.value) == false) {
                this.message = validationMsg.valid_referral;
                this.setError();
            } else {
                this.message = "";
                this.setSuccess();
            }
        } else {
            this.message = "";
            this.setSuccess();
        }
    }

    captcha() {
        //var pattern = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$');
        //var maxlength = this.element.attr("maxlength");

        if (this.value == "") {
            this.message = validationMsg.required.replace("%s", this.label);
            //		} else if( this.value.length < maxlength || this.value.length > maxlength ) {
            //			this.message = validationMsg.captcha + maxlength + " characters";
            //		} else if( pattern.test(this.value) == false ) {
            //			this.message = validationMsg.valid_captcha;
        } else {
            this.message = "";
        }

        this.isValidate();
    }

    setError() {
        this.element.closest(".textfield-wrap").removeClass("validation-pass").addClass("validation-error");
        this.element.next("i").removeClass("fa-check-circle").addClass("fa-times-circle").css("opacity", "1");
        this.element.closest(".textfield-wrap").find("[data-area=message]").text(this.message);
    }

    setSuccess() {
        this.element.closest(".textfield-wrap").addClass("validation-pass").removeClass("validation-error");
        this.element.next("i").addClass("fa-check-circle").removeClass("fa-times-circle").css("opacity", "1");
        this.element.closest(".textfield-wrap").find("[data-area=message]").text("");
    }

    setFocus() {
        var element = $(".validation-error").first();
        $('html, body').animate({
            scrollTop: element.offset().top - 60
        }, 0);
        element.find("input").focus();
    }

    isError() {
        return $(".validation-error").length == 0 ? false : true;
    }

}