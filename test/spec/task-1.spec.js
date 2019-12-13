import chai from "chai";
import { NORTH, EAST, SOUTH, WEST, Rover } from "../../src/task-1";

const assert = chai.assert;
const directions = [NORTH, EAST, SOUTH, WEST];

describe("Task 1: OOP Rover", () => {

    it("Should throw exception for incorrect constructor params", () => {
        assert.throws(() => {
            const r = new Rover(6.7, 19); // eslint-disable-line no-unused-vars
        }, TypeError);

        assert.throws(() => {
            const r = new Rover(6, 19, "my-direction"); // eslint-disable-line no-unused-vars
        }, TypeError);

        assert.throws(() => {
            const r = new Rover("6", {}); // eslint-disable-line no-unused-vars
        }, TypeError);
    });

    it("Should throw exception for incorrect move() param", () => {
        const r = new Rover();

        assert.throws(() => {
            r.move(5.5);
        }, TypeError);

        assert.throws(() => {
            r.move("7");
        }, TypeError);
    });

    it("Should keep initial position when didn't move", () => {
        const r = new Rover(5, 6, EAST);

        assert.deepEqual(r.getPosition(), { x: 5, y: 6 });
        r.left().right().right().right();
        assert.deepEqual(r.getPosition(), { x: 5, y: 6 });
    });

    it("Should change direction when turns left or right", () => {
        const r = new Rover(5, 6, NORTH);

        for (let i = 0; i < 4; i++) {
            assert.equal(r.getDirection(), directions[i % 4]);
            r.right();
        }

        for (let i = 4; i >= 0; i--) {
            assert.equal(r.getDirection(), directions[i % 4]);
            r.left();
        }
    });

    it("Should behave correctly when many methods are chained", () => {
        const r = new Rover(0, 0, NORTH);
        r.move(5).right().move(3).right().move(1).right().move(15).left().move(-5);

        assert.deepEqual(r.getPosition(), { x: -12, y: 9 });
        assert.equal(r.getDirection(), SOUTH);
    });
});
