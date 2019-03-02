import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function descHelper(params/*, hash*/) {
  var desc = params[0];
  desc = desc.replace(/(\r\n|\n|\r)/gm, '<br>');

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '" target="_blank" style="font-weight: bold; color:white; text-decoration-color: white">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }
  return htmlSafe(urlify(desc));
}

export default helper(descHelper);
