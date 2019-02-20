import { helper } from '@ember/component/helper';

export function lowercase(params/*, hash*/) {
  var str = params[0];
  str = str.split(':')[0].trim();
  str = str.toLowerCase();
  if(str === "aimbot'19") {
    return "aimbot";
  }
  if(str === "moksha's got talent") {
    return "moksha got talent";
  }
  return str;
}

export default helper(lowercase);
