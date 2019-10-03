import { Spot } from '../models';

const session = {
	async store(req, res) {
		return res.json({ ok: true });
	},
};

export default session;
