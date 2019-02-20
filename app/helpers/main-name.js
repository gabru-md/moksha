import { helper } from '@ember/component/helper';

export function mainName(params/*, hash*/) {
  var str = params[0];
  return str.split(':')[0].trim();
}

export default helper(mainName);
