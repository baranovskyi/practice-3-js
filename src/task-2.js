
export default class EnhancedSet extends Set {

    union(s) {
        return new EnhancedSet([...Array.from(this), ...Array.from(s)])
    }

    intersection(s) {
        const concatSet = new EnhancedSet([...this, ...s])
        const diffSet = new EnhancedSet();
        for (let value of concatSet.values()) {
            if (this.has(value) && s.has(value)) {
                diffSet.add(value)
            }
        }
        return diffSet
    }

    difference(s) {
        const newEnhancedSet = new EnhancedSet([...this]);
        for (const item of s.values()) {
            if (newEnhancedSet.has(item)) {
                newEnhancedSet.delete(item);
            }
        }
        return newEnhancedSet;
    }

    symmetricDifference(s) {
        const diffSet = new EnhancedSet();

        for (const value1 of this.values()) {
            if (!s.has(value1)) {
                diffSet.add(value1);
            }
        }
        for (const value2 of s.values()) {
            if (!this.has(value2)) {
                diffSet.add(value2)
            }
        }
        return diffSet;
    }

    isSuperset(s) {
        return [...s.values()].every(value => this.has(value));   
    }

    isSubset(s) {
        return [...this.values()].every(value => s.has(value))
    }
}
