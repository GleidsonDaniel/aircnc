import { User } from '../models';

const session = {
	async store(req, res) {
		const { email, password } = req.body;
		let user = await User.findOne({ email, password });
		if (!user) {
			user = await User.create({ email, password });
		}
		return res.json(user);
	},
};

export default session;
