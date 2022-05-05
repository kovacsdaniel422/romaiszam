QUnit.module('convertalas', function() {
    QUnit.test('A Római függvény létezik e?', function(assert) {
        assert.ok(romai, "létezik a Római");
    });
    QUnit.test('A Római függvény-e?', function(assert) {
        assert.ok(typeof(romai === 'function', "függvény a Római"));
    });
    QUnit.test("romai(1)-->I", function(assert) {
        assert.equal(convertalas(32), "XXXII");
    });
    QUnit.test("romai(2)-->II", function(assert) {
        assert.equal(romai(2), "II");
    });

});