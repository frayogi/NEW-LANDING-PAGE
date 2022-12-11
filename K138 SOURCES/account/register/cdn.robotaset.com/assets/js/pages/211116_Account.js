class Account {
    constructor( /*type*/ /*, method*/ ) {
        this.type = "general";
        //		this.method = method;
        this.lang = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.cpassword = "";
        this.npassword = "";
        this.firstname = "";
        this.lastname = "";
        this.countrycode = "";
        this.mobilenumber = "";
        this.referral = "";
        this.captcha = "";
        this.token = "";
        this.devicetoken = "";
        this.deviceid = "";
        this.response = {};
        this.data = {};
    }

    setLoginData() {
        this.data = {
            username: this.username,
            password: this.password,
            token: this.token,
            devicetoken: this.devicetoken,
            deviceid: this.deviceid,
            captcha: this.captcha,
            type: this.type,
            lang: this.lang
        };
    }

    setRegisterData() {
        this.data = {
            username: this.username,
            //			email: this.email,
            password: this.password,
            cpassword: this.cpassword,
            firstname: this.firstname,
            //			lastname: this.lastname,
            countrycode: this.countrycode,
            mobilenumber: this.mobilenumber,
            referral: this.referral,
            captcha: this.captcha,
            token: this.token,
            devicetoken: this.devicetoken,
            deviceid: this.deviceid,
            lang: this.lang
        };
    }

    setPasswordData() {
        this.data = {
            oldpassword: this.password,
            newpassword: this.npassword,
            cpassword: this.cpassword,
            captcha: this.captcha
        };
    }

    setCheckCaptchaData() {
        this.data = {
            captcha: this.captcha,
            type: this.type
        };
    }

    setCheckEmailData() {
        this.data = {
            email: this.email
        };
    }

    setCheckReferralData() {
        this.data = {
            referral: this.referral
        };
    }

    setCheckUsernameData() {
        this.data = {
            username: this.username
        };
    }

    static getData() {
        return this.data;
    }

    login() {
        this.setLoginData();

        var self = this;
        axios.post("/v2/api/account/login", this.getData())
            .then(function(response) {
                self.response = response.data;
                return self.response;
            })
            .catch(function(error) {
                self.response = error.response;
                return self.response;
            });
    }

    setPassword() {
        this.setPasswordData();

        var self = this;
        callApi2("/api/account/setPassword", "POST", this.getData(), function(response) {
            self.response = response;
            Account.setResponse(self.response);
        });
    }

    register() {
        this.setRegisterData();

        var self = this;
        axios.post("/api/account/register", this.getData())
            .then(function(response) {
                self.response = response.data;
                return self.response;
            })
            .catch(function(error) {
                self.response = error.response;
                return self.response;
            });
    }

    checkEmail() {
        this.setCheckEmailData();

        var self = this;
        callApi2("/api/account/checkEmail", "POST", this.getData(), function(response) {
            self.response = response;
            Account.setResponse(self.response);
        });
    }

    checkCaptcha() {
        this.setCheckCaptchaData();

        var self = this;
        callApi2("/api/security/checkCaptcha", "POST", this.getData(), function(response) {
            self.response = response;
            Account.setResponse(self.response);
        });
    }

    checkUsername() {
        this.setCheckUsernameData();

        var self = this;
        callApi2("/api/account/checkUsername", "POST", this.getData(), function(response) {
            self.response = response;
            Account.setResponse(self.response);
        });
    }

    static setResponse(response) {
        this.response = response;
    }

    getResponse() {
        return this.response;
    }

    /* for testing */
    getData() {
        return this.data;
    }

    emptyform(page) {
        if (page == "register") {
            $(".textfield-wrap").removeClass("validation-pass");
            $("input").val("");
        }
    }
}