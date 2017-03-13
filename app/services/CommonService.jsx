"use strict";

var request = require("superagent");

var httpCodes = {
  OK: 200,
  ERROR: 500,
  NOT_FOUND: 404
};

var CommonService = {
  ajax: function(urlService, params, onSuccess, onError, onFail) {
    $.ajax({
      url: urlService,
      headers: {
        "WebToken": "",
        "Content-Type": "application/json"
      },
      dataType: "json",
      contentType: "application/json",
      method: "POST",
      data: JSON.stringify(params),
      cache: false,
      success: function(data) {
        if(data.code == httpCodes.OK) {
          onSuccess(data);
        } else {
          onError(data);
        }
      }.bind(this),
      error: function(xhr, status, err) {
        onFail(err);
      }.bind(this)
    });
  },
  send: function(urlService, params, onSuccess, onError, onFail) {
    request.post(urlService)
    .query({WebToken: ""})
    .set("WebToken", "")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .accept("application/json")
    .send(JSON.stringify(params))
    .end(function(err, res){
      if(!err && res) {
        if(res.status == httpCodes.OK) {
            onSuccess(res.body);

        } else if(res.status == httpCodes.ERROR){
          onError(res.body);

        } else {
          onFail(res.body);
        }

      } else {
        onFail(err);
      }
    });
  }
};

module.exports = CommonService;
