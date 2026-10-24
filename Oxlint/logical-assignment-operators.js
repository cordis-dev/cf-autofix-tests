export function withDefaults(options) {
    let timeout = options.timeout;
    timeout = timeout || 1000;
    return timeout;
}
