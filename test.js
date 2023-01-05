const { expect, assert } = require("chai");

describe("String title",function(){
    let name1="Naveen";

    it("String",function(){
        expect(name1).to.equal("Naveen")
        assert.typeOf(name1,"String")
        // name1..be.a("String")
    })
})