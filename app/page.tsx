import ContactEmail from './components/ContactForm';
import EmailTemplate from './template/emailTemplate';
import WelcomeEmail from './template/welcometemplate';

export default function Home() {
	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
		// 	<div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
		// 		<ContactEmail />
		// 	</div>

			<div>
				{/* <WelcomeEmail /> */}
				<EmailTemplate/>
			</div>
		// </main>
	);
}
