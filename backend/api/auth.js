const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req,res) => {
        if(!req.body.email || !req.body.password) {
             return res.status(400).send('Email ou senha não informados!')
        }
        const user = app.db('users')
                        .where({email:req.body.email})
                        .first()
                            
        if(!user) return res.status(400).send('Usuario não encontrado')

        const isMatch = bcrypt.compareSync(req.params.password,user.password)
        if(!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 *3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload,authSecret)
        })
    }

    const validateToken = async (req,res) =>{
        const userData = req.body
        try {
           if(userData){
               const token = jwt.decode(userData.token,authSecret)

               if(new Date(token.exp * 1000) < new Date()){
                   return res.send(true)
               }
               res.send()
           } 
        } catch (error) {
           // 
        }
        res.send(false)
    }

    return {signin, validateToken}
}