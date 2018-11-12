var expect = require("expect");

var { generateMessage } = require("./message.js");

describe("generateMessage", () => {
    it("should generate correct message object", () => {
        var from = "Ernany";
        var text = "Pipipipopopo";
        var message = generateMessage(from,text);
        console.log(typeof message.createdAt);

        //expect(messsage.createdAt).to.be.a("number");
        expect(message).toMatchObject({from,text});
    });
});