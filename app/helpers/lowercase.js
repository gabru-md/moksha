import { helper } from '@ember/component/helper';

export function lowercase(params/*, hash*/) {
  var str = params[0];
  str = str.split(':')[0].trim();
  return str.toLowerCase();
}

export default helper(lowercase);
