import chai from "chai";
import EnhancedSet from "../../src/task-2";

const assert = chai.assert;


describe("Task 2: Enhanced Set", () => {
    const set = new EnhancedSet([1, 2, "3", 4, 5, {}]);
    const set2 = new EnhancedSet([4, 51, "3", 3]);
    const emptySet = new EnhancedSet();


    describe("union", () => {
        it("should return new EnhancedSet object", () => {
            const result = set.union(set2);
            assert.notEqual(set, result);
            assert.instanceOf(result, EnhancedSet);
        });

        it("should contain same elements when combined with empty set", () => {
            assert.deepEqual(set.union(emptySet), set);
        });

        it("should contain same elements when empty set is combined with it", () => {
            assert.deepEqual(emptySet.union(set), set);
        });

        it("should return a new set which contains elements of both sets", () => {
            assert.deepEqual(set.union(set2), new EnhancedSet([1, 2, "3", 4, 5, {}, 51, 3]));
        });
    });

    describe("intersection", () => {
        it("should return new EnhancedSet object", () => {
            const result = set.intersection(set2);
            assert.notEqual(set, result);
            assert.instanceOf(result, EnhancedSet);
        });

        it("should return empty set if intersected with empty set", () => {
            assert.deepEqual(set.intersection(emptySet), emptySet);
            assert.deepEqual(emptySet.intersection(set), emptySet);
        });

        it("Should return a new set which contains only elements that are present in both sets", () => {
            assert.deepEqual(set.intersection(set2), new EnhancedSet(["3", 4]));
        });
    });

    describe("difference", () => {
        it("should return new EnhancedSet object", () => {
            const result = set.difference(set2);
            assert.notEqual(set, result);
            assert.instanceOf(result, EnhancedSet);
        });

        it("should return same set for diff with empty set", () => {
            assert.deepEqual(set.difference(emptySet), set);
        });

        it("should return empty set for diff between empty set and any other", () => {
            assert.deepEqual(emptySet.difference(set), emptySet);
            assert.deepEqual(emptySet.difference(emptySet), emptySet);
        });

        it("should return empty set for diff between a set and itself", () => {
            assert.deepEqual(set.difference(set), emptySet);
        });

        it("Should return a new set which contains elements that are present in this set not in an other", () => {
            assert.deepEqual(set.difference(set2), new Set([1, 2, 5, {}]));
        });
    });

    describe("symmetricDifference", () => {
        it("should return new EnhancedSet object", () => {
            const result = set.symmetricDifference(set2);
            assert.notEqual(set, result);
            assert.instanceOf(result, EnhancedSet);
        });

        it("should return empty set for diff between set and itself", () => {
            assert.deepEqual(set.symmetricDifference(set), emptySet);
        });

        it("should return same set for diff with empty set", () => {
            assert.deepEqual(set.symmetricDifference(emptySet), set);
            assert.deepEqual(emptySet.symmetricDifference(set), set);
        });

        it("Should return a set which contains elements that are not present in both sets", () => {
            assert.deepEqual(set.symmetricDifference(set2), new EnhancedSet([1, 2, 5, {}, 51, 3]));
        });
    });

    describe("isSuperset", () => {
        it("should return true for empty set", () => {
            assert.isTrue(set.isSuperset(emptySet));
        });

        it("empty set is a superset of an empty set", () => {
            assert.isTrue(emptySet.isSuperset(emptySet));
        });

        it("set is a superset of itself", () => {
            assert.isTrue(set.isSuperset(set));
        });

        it("should return true if set contains other set", () => {
            assert.isTrue(set.isSuperset(new EnhancedSet(["3", 4, 5])));
        });

        it("should return false if set doesnt contain other set", () => {
            assert.isFalse(set.isSuperset(set2));
        });
    });

    describe("isSubset", () => {
        it("should return false for empty set", () => {
            assert.isFalse(set.isSubset(emptySet));
        });

        it("empty set is a subset of an empty set", () => {
            assert.isTrue(emptySet.isSubset(emptySet));
        });

        it("set is a subset of itself", () => {
            assert.isTrue(set.isSubset(set));
        });

        it("should return true if set is contained in other set", () => {
            assert.isTrue(new EnhancedSet(["3", 4, 5]).isSubset(set));
        });

        it("should return false if set isnt contained in other set", () => {
            assert.isFalse(set.isSubset(set2));
        });
    });

});
