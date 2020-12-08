const version = process.argv[2] || 0

export function getTab(test) {
    return test[version];
}

export function log(...message) {
    version == 0 && console.log(...message);
}