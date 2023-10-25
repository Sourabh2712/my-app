import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import EmailTemplate from '../../template/emailTemplate';
import WelcomeEmail from '../../template/welcometemplate';

// Api service to send mail to given email
export async function POST(request: NextRequest) {

	const { receiversEmail, htmlTemplateType } = await request.json();

	const transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.EMAIL,
		to: receiversEmail,
		subject: `Message from (${process.env.EMAIL})`,
	};

	if (htmlTemplateType === "welcomeTemplate") {
		mailOptions.html = render(EmailTemplate())
	} else if (htmlTemplateType === "request") {
		mailOptions.html = render(WelcomeEmail({}))
	}

	try {
		const resp = await transport.sendMail(mailOptions);
		console.log(resp);
		return NextResponse.json({ message: 'Success!', status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'Failed!', status: 500 });
	}
}
