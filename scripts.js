document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('section.newsletter');
	const input = document.getElementById('email');
	const messageDiv = document.querySelector('.message');

	if (!form || !input || !messageDiv) return;

	// Make message area accessible
	messageDiv.setAttribute('role', 'status');
	messageDiv.setAttribute('aria-live', 'polite');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = input.value.trim();

		// simple email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!email || !emailPattern.test(email)) {
			messageDiv.textContent = 'Please enter a valid email address.';
			return;
		}

		messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
		form.reset();
	});
});