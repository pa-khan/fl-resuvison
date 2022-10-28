document.addEventListener('DOMContentLoaded', () => {
	const classShow = '--show';
	const classCurrent = '--current';
	const classActive = '--active';

	// effects in btns
	const $btns = document.querySelectorAll('.btn');
	if ($btns.length > 0) {
		$btns.forEach(($btn) => {
			$btn.$effectBlock1 = document.createElement('div');
			$btn.$effectBlock1.className = 'btn__effect-default';
			$btn.append($btn.$effectBlock1);

			$btn.$effectBlock2 = document.createElement('div');
			$btn.$effectBlock2.className = 'btn__effect-hover';
			$btn.append($btn.$effectBlock2);

			$btn.addEventListener('mousedown', (e) => {
				var parentOffset = $btn.getBoundingClientRect(),
					relX = e.pageX - (parentOffset.left + window.pageXOffset),
					relY = e.pageY - (parentOffset.top + window.pageYOffset);

				$btn.classList.add(classActive);
				$btn.$effectBlock2.style.top = relY + 'px';
				$btn.$effectBlock2.style.left = relX + 'px';
			});

			// $btn.addEventListener('mouseover', () => {
			// 	$btn.classList.remove(classActive);
			// });

			$btn.addEventListener('mouseup', () => {
				$btn.classList.remove(classActive);
			});
		});
	}

	// toggle nav on mobile
	const $nav = document.querySelector('.nav');
	const $ham = document.querySelector('.ham');

	if ($ham) {
		$ham.addEventListener('click', () => {
			$nav.classList.toggle(classShow);
			$ham.classList.toggle(classShow);
		});
	}


	// navItemsBorder
	const $navItems = document.querySelectorAll('.nav__item');
	const $navBorder = document.querySelector('.nav__border')
	if ($navItems.length > 0) {


		let $navItemCurrent = $navItems[0];

		setStylePropertiesNavBorder($navItems[0]);


		$navItems.forEach(($navItem) => {
			if ($navItem.classList.contains(classCurrent)) {
				setStylePropertiesNavBorder();
			}

			$navItem.addEventListener('mouseover', () => {
				$navItemCurrent = $navItem;
				setStylePropertiesNavBorder();
			});
		});

		window.addEventListener('resize', () => {
			setStylePropertiesNavBorder();
		});


		function setStylePropertiesNavBorder() {
			let diff = $navItemCurrent.getBoundingClientRect().left - $nav.getBoundingClientRect().left
			$navBorder.style.width = $navItemCurrent.offsetWidth + 'px';
			$navBorder.style.left = diff + 'px';
		}
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