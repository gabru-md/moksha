import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | event-panel', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:event-panel');
    assert.ok(route);
  });
});
