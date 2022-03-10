type Constructor<T> = new (...args: any[]) => T;
type ValuesConstructor<ValuesType> = Constructor<{ values: () => IterableIterator<ValuesType> }>;
function getConcatinatableMap<T extends ValuesConstructor<string>>(Base: T) {
    return class extends Base {
        concatinate(): string {
            let total = '';
            for (const value of this.values()) {
                total += value + '\n';
            }
            return total;
        }
    }
}
const ConcatinatableMap = getConcatinatableMap(Map);
const map = new ConcatinatableMap();
map.concatinate() 🤯