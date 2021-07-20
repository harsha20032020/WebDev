const User = require('../model/user')

module.exports = {
	async store(req, res) {
		try {
			const { email, firstName, lastName, password } = req.body
            console.log(req.body)
		} catch (err) {
			throw Error(`Error while Registering new user :  ${err}`)
		}
	},
}