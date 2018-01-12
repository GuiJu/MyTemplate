/**
 * @file 用于发起http请求的工具类
 */
import $ from '../../node_modules/jquery/dist/jquery.min';

let http = function (request) {

  if (request.dataType === 'json') {
    request.data = JSON.stringify(request.data);
  }

  return new Promise(function (resolve, reject) {
    $.ajax({
      type: request.type || 'GET',
      url: request.url,
      data: request.data || '',
      contentType: request.contentType || 'application/json',
      success: function (result) {
        resolve(result);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        reject(textStatus);
      }
    })
  })
};

let HttpService = {
  http: http
};

export default HttpService;