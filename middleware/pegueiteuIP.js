function PegaIP(req) {
    return(`IP: ${req.ip}, METHOD: ${req.method}`);
}

module.exports = PegaIP;