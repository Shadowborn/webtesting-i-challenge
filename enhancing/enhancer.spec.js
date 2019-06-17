// const enhancer = require('./enhancer.js');
// test away!
const {repair} = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 89 }).durability).toBe(100);
            expect(repair({ durability: -89 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 })).toEqual({ durability: 100 });
        });
    });

    it.todo('should have a max of 100 for durability')
});


// function makeItem(name, durability) {
//     return {
//         name,
//         durability
//     }
// }

// enhancer.repair should make durability 100