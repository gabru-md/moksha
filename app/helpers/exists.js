import { helper } from '@ember/component/helper';

export function exists(params/*, hash*/) {
  var str = params[0];
  if (str === "None")
    return false;
  return true;
}

export default helper(exists);
