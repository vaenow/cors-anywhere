
var corsHostList = trimEnvArray(process.env.CORS_HOST_LIST)

function randomPickCorsHost() {
    var host = corsHostList[randomRange(0, corsHostList.length-1)]
    return host || ""
}

function randomRange(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min
}

function trimEnvArray(env) {
    return (env || '')
        .split(/,/g)
        .map((v) => v.trim())
        .filter((v) => v)
}

module.exports = {
    randomPickCorsHost,
}
