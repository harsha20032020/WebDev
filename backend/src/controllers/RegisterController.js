const User = require('../model/user')

module.exports = {
	async store(req, res) {
		try {
			const { name, email, phone, password } = req.body
            console.log(req.body)
		} catch (err) {
			throw Error(`Error while Registering new user :  ${err}`)
		}
	},
}