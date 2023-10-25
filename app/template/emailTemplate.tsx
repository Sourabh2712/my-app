import {
	Container,
	Column,
	Html,
	Row,
	Section,
	Tailwind,
	Text,
	Preview,
	Body,
} from '@react-email/components';
import React from 'react';

const EmailTemplate = () => {
	const page: React.CSSProperties = {
		position: 'fixed',
		// top: '50%',
		// left: '50%',
		display: 'flex',
		flexDirection: 'column',
		// transform: 'translate(-50%, -50%)',
	};

	const messageContainer: React.CSSProperties = {
		alignSelf: 'stretch',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: '32px',
		display: 'flex',
	};

	const greetingTextMessageContainer: React.CSSProperties = {
		alignSelf: 'stretch',
	};

	const hiText: React.CSSProperties = {
		color: '#203551',
		fontSize: '24px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		lineHeight: '30px',
		wordWrap: 'break-word',
	};

	const userNameText: React.CSSProperties = {
		color: '#203551',
		fontSize: '24px',
		fontFamily: 'Satoshi',
		fontWeight: 700,
		lineHeight: '30px',
		wordWrap: 'break-word',
	};

	const waveHandTextSymbol: React.CSSProperties = {
		color: '#203551',
		fontSize: '24px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		lineHeight: '30px',
		wordWrap: 'break-word',
	};

	const messageTextContainer: React.CSSProperties = {
		alignSelf: 'stretch',
		opacity: 0.7,
		color: '#203551',
		fontSize: '16px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		lineHeight: '24px',
		letterSpacing: '0.30px',
		wordWrap: 'break-word',
	};

	const regardsContainer: React.CSSProperties = {
		display: 'flex',
		flexDirection: 'column',
	};

	const cheersText: React.CSSProperties = {
		color: '#203551',
		fontSize: '16px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		lineHeight: '24px',
		letterSpacing: '0.30px',
		wordWrap: 'break-word',
	};

	const regardsText: React.CSSProperties = {
		color: '#203551',
		fontSize: '16px',
		fontFamily: 'Satoshi',
		fontWeight: 700,
		lineHeight: '24px',
		letterSpacing: '0.30px',
		wordWrap: 'break-word',
	};

	const addressText: React.CSSProperties = {
		alignSelf: 'stretch',
		opacity: 0.7,
		color: 'white',
		fontSize: '14px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		lineHeight: '20px',
		letterSpacing: '0.30px',
		wordWrap: 'break-word',
	};

	const divider: React.CSSProperties = {
		width: '450px',
		height: '0px',
		border: '0.7px rgba(255, 255, 255, 0.20) solid',
	};

	const settingsMessageContainer: React.CSSProperties = {
		alignSelf: 'stretch',
		opacity: 0.7,
	};

	const mailSentText: React.CSSProperties = {
		color: 'white',
		fontSize: '12px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		lineHeight: '18px',
		letterSpacing: '0.30px',
		wordWrap: 'break-word',
	};

	const modifyNotificationText: React.CSSProperties = {
		color: 'white',
		fontSize: '12px',
		fontFamily: 'Satoshi',
		fontWeight: 500,
		textDecoration: 'underline',
		lineHeight: '18px',
		letterSpacing: '0.30px',
		wordWrap: 'break-word',
	};

	const containerStyle: React.CSSProperties =  {
		background: 'linear-gradient(167deg, rgba(59, 40, 204, 0.60) 38.66%, rgba(170, 159, 255, 0.60) 90.8%)',
		filter: 'blur(80px)',
		position: 'absolute',
		bottom: 0,
		right: '234px', // 'position' should be removed from here
		width: '300px',
		height: '200px',
	  };

	return (
		<Html>
			<head />
			<Preview>Welcome Email</Preview>
			<Tailwind>
				<Body style={page}>
					<Container className="border border-solid border-[#d5d1f3] rounded-xl shadow-lg w-[520px] h-[600px]">
						<Container
							className="h-[50%] flex flex-col p-[30px] justify-evenly items-start"
							style={{
								background:
									'linear-gradient(0deg, white 0%, white 100%), linear-gradient(145deg, rgba(59, 40, 204, 0.10) 0%, rgba(255, 255, 255, 0) 100%)',
								opacity: '0.9',
							}}
						>
							<Section className="h-[60px]">
								<svg
									width="128"
									height="48"
									viewBox="0 0 128 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25.145 21.189a5.716 5.716 0 1 0 0-11.433 5.716 5.716 0 0 0 0 11.433ZM14.07 15.623a8.012 8.012 0 0 1 5.857 7.717v9.5H33.93v5.404H14.07v-22.62Zm38.946-.167v14.712h7.344V33H49.944V15.456h3.072Zm12.938 17.856c-2.52 0-4.056-1.464-4.056-3.696 0-2.184 1.584-3.552 4.392-3.768l3.552-.264v-.264c0-1.608-.96-2.256-2.448-2.256-1.728 0-2.688.72-2.688 1.968H62.21c0-2.568 2.112-4.248 5.328-4.248 3.192 0 5.16 1.728 5.16 5.016V33H70.13l-.216-1.752c-.504 1.224-2.112 2.064-3.96 2.064Zm.96-2.208c1.8 0 2.952-1.08 2.952-2.904v-.624l-2.472.192c-1.824.168-2.52.768-2.52 1.728 0 1.08.72 1.608 2.04 1.608Zm7.3 7.392v-2.448h1.752c1.152 0 1.872-.264 2.376-1.656l.336-.888-4.776-12.36h3.096l3.048 8.64 3.216-8.64h3.024L80.478 35.64c-.888 2.208-2.136 3.12-4.08 3.12a8.643 8.643 0 0 1-2.184-.264ZM95.99 21.144h2.928V33h-2.713l-.215-1.584c-.72 1.128-2.256 1.896-3.84 1.896-2.737 0-4.345-1.848-4.345-4.752v-7.416h2.928v6.384c0 2.256.888 3.168 2.52 3.168 1.849 0 2.737-1.08 2.737-3.336v-6.216Zm5.952 17.352V21.144h2.712l.192 1.8c.72-1.368 2.28-2.16 4.08-2.16 3.336 0 5.544 2.424 5.544 6.144 0 3.696-2.016 6.384-5.544 6.384-1.776 0-3.312-.696-4.056-1.896v7.08h-2.928Zm2.952-11.424c0 2.136 1.32 3.6 3.336 3.6 2.064 0 3.288-1.488 3.288-3.6s-1.224-3.624-3.288-3.624c-2.016 0-3.336 1.488-3.336 3.624Z"
										fill="#3B28CC"
									/>
								</svg>
							</Section>
							<Section style={messageContainer}>
								<Text style={greetingTextMessageContainer}>
									<span style={hiText}>Hi</span>
									<span style={userNameText}>Samantha</span>
									<span style={waveHandTextSymbol}>&#128075</span>
								</Text>
								<Text style={messageTextContainer}>
									Your password has been successfully updated!
									<br />
									If you didn&apos;t change your password please contact us
									immediately.
								</Text>
								<Text style={regardsContainer}>
									<span style={cheersText}>Cheers,</span>
									<span style={regardsText}>The Layup Team</span>
								</Text>
							</Section>
						</Container>

						<Container className="bg-black relative h-[50%] p-[30px] flex flex-col justify-evenly items-start ">
							<Section align='left'
								style={containerStyle}
							></Section>
							<Row className="flex flex-row justify-evenly w-full">
								<Column align="right">
									<Text className="text-white">support@layupai.com</Text>
								</Column>
								<Column align="center">
									<Text className="text-white ">(650) 425-0566</Text>
								</Column>
								<Column className="" align="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="white"
										viewBox="0 0 16 16"
									>
										<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
									</svg>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M9.42857 8.96884H13.1429V10.8193C13.6783 9.75524 15.0503 8.79887 17.1114 8.79887C21.0623 8.79887 22 10.9167 22 14.8028V22H18V15.6878C18 13.4748 17.4646 12.2266 16.1029 12.2266C14.2143 12.2266 13.4286 13.5722 13.4286 15.6878V22H9.42857V8.96884ZM2.57143 21.83H6.57143V8.79887H2.57143V21.83ZM7.14286 4.54958C7.14286 4.88439 7.07635 5.21593 6.94712 5.52526C6.81789 5.83458 6.62848 6.11565 6.3897 6.3524C6.15092 6.58915 5.86745 6.77695 5.55547 6.90508C5.24349 7.0332 4.90911 7.09915 4.57143 7.09915C4.23374 7.09915 3.89937 7.0332 3.58739 6.90508C3.27541 6.77695 2.99193 6.58915 2.75315 6.3524C2.51437 6.11565 2.32496 5.83458 2.19574 5.52526C2.06651 5.21593 2 4.88439 2 4.54958C2 3.87339 2.27092 3.22489 2.75315 2.74675C3.23539 2.26862 3.88944 2 4.57143 2C5.25341 2 5.90747 2.26862 6.3897 2.74675C6.87194 3.22489 7.14286 3.87339 7.14286 4.54958Z"
											fill="white"
										/>
									</svg>
								</Column>
							</Row>
							<Section className="h-[170px] flex flex-col justify-evenly items-start">
								<div style={addressText}>
									228 Park Ave. S #16413, New York, NY 10003
									<br />© 2023 Layup Labs. All Rights Reserved.
								</div>
								<div style={divider}></div>
								<div style={settingsMessageContainer}>
									<span style={mailSentText}>
										{' '}
										This message was mailed to [user email] in response to
										<br />
										activity in your Layup account.{' '}
									</span>
									<span style={modifyNotificationText}>
										Modify Notification Settings
									</span>
								</div>
							</Section>
						</Container>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailTemplate;
