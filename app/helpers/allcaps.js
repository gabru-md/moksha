import { helper } from '@ember/component/helper';

export function allcaps(params/*, hash*/) {
  return params[0].toUpperCase();
}

export default helper(allcaps);
