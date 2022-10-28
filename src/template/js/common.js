document.addEventListener('DOMContentLoaded', () => {
	const classShow = '--show';

	// toggle nav on mobile
	const $nav = document.querySelector('.nav');
	const $ham = document.querySelector('.ham');

	if ($ham) {
		$ham.addEventListener('click', () => {
			$nav.classList.toggle(classShow);
			$ham.classList.toggle(classShow);
		});
	}

	// btnUp
	const $btnUp = document.querySelector('.up');

	if ($btnUp) {
		toggleShowBtnUp();
		window.addEventListener('scroll', toggleShowBtnUp);
		function toggleShowBtnUp() {
			if (window.pageYOffset >= 500) {
				$btnUp.classList.add(classShow);
			} else {
				$btnUp.classList.remove(classShow);
			}
		}
	}


	// cookie alert
	const $alert = document.querySelector('.alert');

	if ($alert) {
		const $alertBtnClose = $alert.querySelector('.alert__btn-close');
		const lsAlertKey = 'alert_close';
		let lsAlertValue = localStorage.getItem(lsAlertKey);
		let isAlertClose = lsAlertValue && lsAlertValue == 'true' ? true : false;

		if (!isAlertClose) {
			$alert.classList.add(classShow);
		}

		$alertBtnClose.addEventListener('click', () => {
			localStorage.setItem(lsAlertKey, true);
			$alert.classList.remove(classShow);
		});
	}


	// auth
	const $auth = document.querySelector('.auth');
	if ($auth) {
		$authShowBtns = document.querySelectorAll('.auth-btn-show, [data-auth-show]');
		$authCloseBtns = document.querySelectorAll('.auth-btn-close, [data-auth-close]');

		$authShowBtns.forEach(($btn) => {
			$btn.addEventListener('click', () => {
				$auth.classList.add(classShow);
			});
		});

		$authCloseBtns.forEach(($btn) => {
			$btn.addEventListener('click', () => {
				$auth.classList.remove(classShow);
			});
		});



	}
});