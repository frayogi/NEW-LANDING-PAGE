var callApi = function(api, objData, func) {
    var type = objData == null ? "GET" : "POST";
    var data = objData == null ? "" : JSON.stringify(objData);

    $.ajax({
        url: api,
        dataType: "json",
        type: type,
        contentType: "application/json",
        mimeType: "application/json",
        data: data,
        startTime: performance.now(),
        success: function(response, textStatus, xhr) {
            if (xhr.status == 200) {
                switch (response.code) {
                    case 10021:
                    case 10144:
                    case 10159:
                    case 14000:
                    case 14021:
                    case 15000:
                    case 15143:
                        alert(response.data.message);
                        redirectPage();
                        break;
                    default:
                        func(response);
                }
            }
        },
        error: function(response) {
            console.log("Error", response);
        }
    });
}

var callApi2 = function(url, type, objData, func) {
    var data = objData == null ? "" : JSON.stringify(objData);

    $.ajax({
        url: url,
        dataType: "json",
        type: type,
        contentType: "application/json",
        mimeType: "application/json",
        data: data,
        async: false,
        success: function(response, textStatus, xhr) {
            if (xhr.status == 200) {
                switch (response.code) {
                    case 10021:
                    case 10144:
                    case 10159:
                    case 14000:
                    case 14021:
                    case 15000:
                    case 15143:
                        alert(response.data.message);
                        redirectPage();
                        break;
                    default:
                        func(response);
                }
            }
        },
        error: function(response) {
            console.log("Error", response);
        }
    });
}

var callApi3 = function(url, methodType, data) {
    var json = data == null ? "" : JSON.stringify(data);

    var promiseObj = new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        if (methodType == "POST") {
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        }
        xhr.send(json);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    switch (respJson.code) {
                        case 10021:
                        case 10144:
                        case 10159:
                        case 14000:
                        case 14021:
                        case 15000:
                        case 15143:
                            alert(respJson.data.message);
                            redirectPage();
                            break;
                        default:
                            resolve(respJson);
                    }
                } else {
                    reject(xhr.status);
                    console.log("xhr failed", xhr.status);
                }
            }
        }
    });

    return promiseObj;
}