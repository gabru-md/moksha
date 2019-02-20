import { helper } from '@ember/component/helper';

export function secondaryName(params/*, hash*/) {
  var str = params[0];
  if (str.split(':').length < 2){
    return false;
  }
  return str.split(':')[1].trim();
}

export default helper(secondaryName);
