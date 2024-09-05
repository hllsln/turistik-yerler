import User from '../../models/model.user.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
import sendMail from '../../nodemailer.js';
import generator from 'generate-password';

const signup = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const existingEmail = await User.findOne({ email });

		if (existingEmail) {
			return res.status(400).json({
				type: 'email',
				message: 'Email already registered.',
			});
		}

		const existingUsername = await User.findOne({ username });

		if (existingUsername) {
			return res.status(400).json({
				type: 'username',
				message: 'Username already registered.',
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const date = new Date();

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			membershipDate: date,
		});

		await newUser.save();

		res.status(200).json({
			message: 'Registration successful.',
			user: newUser,
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({
			type: 'unknown',
			message: 'Registration failed.',
			error,
		});
	}
};

const signin = (req, res) => {
	passport.authenticate('local', (error, user, info) => {
		if (error) {
			return res
				.status(400)
				.json({ type: 'unknown', message: info.message });
		}
		if (!user) {
			return res
				.status(400)
				.json({ type: 'incorrect', message: info.message });
		}
		req.logIn(user, (err) => {
			if (err) {
				return res.status(400).json({ type: 'password', message: err });
			}
			res.status(200).json({ message: 'Login successful.', user: user });
		});
	})(req, res);
};

const signout = (req, res) => {
	req.logout((error) => {
		if (error) {
			return res.status(500).json({ message: 'Logout failed.' });
		}
		res.status(200).json({ message: 'Logout successful.' });
	});
};

const forgotPassword = async (req, res) => {
	const { email } = req.body;

	try {
		const foundUser = await User.findOne({ email: email });

		if (foundUser) {
			const generatedPassword = generator.generate({
				length: 10,
				numbers: true,
			});

			console.log(generatedPassword);

			const hashedPassword = await bcrypt.hash(generatedPassword, 10);

			await User.updateOne(
				{ email: email },
				{
					password: hashedPassword,
				}
			);

			await sendMail(email, generatedPassword);
		}

		res.status(200).json({
			message:
				'Eğer e-mail adresi kayıtlıysa yeni şifrenizi içeren bir mail alacaksınız.',
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export { signup, signin, signout, forgotPassword };
