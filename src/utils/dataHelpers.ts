export function createNewId<T extends { id: number }>(array: T[]): number {
    return Math.max(0, ...array.map(item => item.id)) + 1;
}