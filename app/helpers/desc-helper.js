import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function descHelper(params/*, hash*/) {
  var desc = params[0];
  desc = desc.replace(/(\r\n|\n|\r)/gm, '<br>');
  return htmlSafe(desc);
}

export default helper(descHelper);
