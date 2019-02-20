import { helper } from '@ember/component/helper';

export function eventnameHelper(params/*, hash*/) {
  var eventName = params[0];
  console.log(eventName);
  var en = eventName.split('-');
  var res = []
  en.forEach(element => {
    res.push(element.trim());
  });
  console.log(res);
  return res[0] + "<pre>" + res[1] + "</pre>";
}

export default helper(eventnameHelper);
