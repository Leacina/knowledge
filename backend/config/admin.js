module.exports = middleware => {
    return (req, res, next) => {
        if (req.params.admin) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuario não é administrador!')
        }
    }
}