export const version = process.argv[2] || 0

export function getTab(test) {
    if (version == 'last') {
        return test[test.length-1];
    }
    return test[version];
}

export function getTabLine(test) {
    return getTab(test).split('\n').map(line => line.trim())
}

export function getTabGrid(test) {
    return getTab(test).split('\n').map(line => line.trim().split(''))
}

export function getTabList(test) {
    return getTab(test).split(',').map(n => parseInt(n))
}

export function log(...message) {
    version != 'last' && console.log(...message);
}

export function range(start, end) {
    return start <= end
        ? new Array(end - start + 1).fill(0).map((_, i) => i + start)
        : new Array(start - end + 1).fill(0).map((_, i) => start - i)
}