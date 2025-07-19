class ListNode<k,v>{

}
declare class HashMap<k, v> {
    private buckets: ListNode<k, v>[];
    private size: number;
    constructor(size?: number);
    private hash(key: k): number;
    set(key: k, value: v): void;
    get(key: k): v | undefined;
    has(key: k): boolean;
    delete(key: k): boolean;
    clear(): void;
    keys(): k[];
    values(): v[];
    entries(): [k, v][];
}