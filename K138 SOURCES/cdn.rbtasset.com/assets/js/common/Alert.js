class Alert {
    constructor(code, message) {
        this.code = null;
        this.dismiss = true;
        this.dismissible = "";
        this.message = "";
        this.type = "";
        this.html = "";
        this.countdown = 0;
    }

    setType() {
        if (this.code != 0) {
            this.type = "alert-danger";
        } else {
            this.type = "alert-success";
        }
        //		switch(this.code) {
        //			case -1: this.type = "alert-danger"; break;
        //			case 0: this.type = "alert-success"; break;
        //			case 1: this.type = "alert-warning"; break;
        //		}
    }

    set() {
        this.setType();
        this.dismissible = (this.dismiss == true) ? "alert-dismissible" : "";

        //		this.html = '<div class="alert '+ this.type +' '+ this.dismissible +' fade-in show" role="alert">';
        this.html += this.message;
        if (this.dismiss == true) {
            this.html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
            this.html += '<span aria-hidden="true">&times;</span>';
            this.html += '</button>';
        }
        //		this.html += '</div>';

        $("#Alert").addClass(this.type + " " + this.dismissible + " fade-in show").html(this.html).show();
        //		console.log($("#Alert").html());
        this.setFocus();
        //this.redirect();
    }

    output() {
        return this.html;
    }

    clear() {
        this.html = "";
    }

    remove() {
        //		closeAlert();
        var self = this;
        setTimeout(function() {
            $("#Alert").removeAttr("class").html("");
            $("#Alert").attr("class", "alert").hide();
            self.html = "";
        }, 3000);
    }

    redirect(i, url) {
        var counter = setInterval(function() {
            i--;
            if (i >= 0 && i < 5) {
                $('#counter').html(i);
            }
            if (i == 0) {
                clearInterval(counter);
                //	        	window.location.href = url;
                redirectPage(url);
            }
        }, 1000);
    }

    setFocus() {
        var element = $("#Alert");
        $('html, body').animate({
            scrollTop: element.offset().top - 70
        }, 0);
    }
}