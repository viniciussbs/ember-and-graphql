import { helper } from '@ember/component/helper';
import { set } from '@ember/object';

function setTargetValue([target, key]) {
  return (event) => set(target, key, event.target.value);
}

export default helper(setTargetValue);
