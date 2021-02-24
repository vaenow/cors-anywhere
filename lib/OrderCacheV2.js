let OrderCache = {}

module.exports = class OrderCache {
    static set(key, val, { ttl = -1 } = {}) {
        OrderCache[key] = val
        if (ttl > 0) {
            OrderCache[key + '_ttl'] = Date.now() + ttl
        }
    }

    static get(key, defaultVal) {
        if (OrderCache[key + '_ttl'] < Date.now()) {
            return null
        }

        let cache = OrderCache[key] || defaultVal
        // cache && console.log('Cache get', symbol, swapAction, JSON.stringify(cache))
        return cache
    }

    static remove(symbol) {
        OrderCache.set(symbol, undefined)
        OrderCache.set(symbol + '_ttl', undefined)
    }
}
