export const sum = ( array: number[]) : number => {
    return array.reduce((acc, val) => acc + val, 0);
}
