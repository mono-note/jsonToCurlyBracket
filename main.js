$(function () {
  myData = {
    divName: "myData",
    scriptName: "show-col",
    json: "data.json"
  };
  loadJsonToHTML(myData)
});

function loadJsonToHTML(tmp) {
  $.getJSON(tmp.json, function (n) {
    var itemsHTML = n.map(function (data) {
      return ajustTemplate($("#"+tmp.scriptName).html(), data);
    }).join("");
    $("."+tmp.divName).append(itemsHTML);
  });
}

function ajustTemplate(src, data) {
  return src.replace(/\{\{([\w\-_\.]+)\}\}/gi, function (index, keyword) {
    var value = data;
    keyword.split(".").forEach(function (part) {
      value = value[part];
    });
    return value;
  });
}