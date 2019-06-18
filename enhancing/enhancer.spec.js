// const enhancer = require('./enhancer.js');
// test away!
const {repair} = require('./enhancer.js');
const {succeed} = require('./enhancer.js');
const {fail} = require('./enhancer.js');

const weapon = {
    name: "Poison Dagger",
    durability: 18,
    enhancement: 1
}

describe('enhancer.js', () => {

    // REPAIR TEST
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 89 }).durability).toBe(100);
            expect(repair({ durability: -89 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 })).toEqual({ durability: 100 });
        });
    });

    // SUCCEED TEST
    describe("Your weapon has been enhanced", () => {
        it("Weapon has reached max enhancement of 20", () => {
            expect(succeed(weapon)).toEqual({ ...weapon, enhancement: weapon.enhancement + 1 });
        })
        it("Weapon has already been enhanced to the max of 20", () => {
            expect(succeed({ ...weapon, enhancement: 20 })).toEqual({ ...weapon, enhancement: 20 })
        })
    })

    // FAIL TEST
    describe("Your weapon failed to repair", () => {
        it("Weapon has reached max enhancement of 20", () => {
            expect(fail(weapon)).toEqual({ ...weapon, durability: weapon.durability - 4 });
        })
    })
})

// function makeItem(name, durability) {
//     return {
//         name,
//         durability
//     }
// }

// enhancer.repair should make durability 100