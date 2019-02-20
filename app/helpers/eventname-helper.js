import { helper } from '@ember/component/helper';

export function eventnameHelper(params/*, hash*/) {
  var eventName = params[0];
  var en = eventName.split('-');
  var res = []
  en.forEach(element => {
    res.push(element.trim());
  });
  return res[0] + "<pre>" + res[1] + "</pre>";
}

export default helper(eventnameHelper);
