import { onWindowLoaded } from '../functions/DOM-utility-functions.js';

onWindowLoaded(function () {
    configurePreventSpam();
    configureDisabledAfterFirstClick();
    configureInstantClick();

    function configurePreventSpam() {
        const DEFAULT_PREVENT_SPAM_DURATION_TIME = 1500;
        const INACTIVE_CLASS_NAME = 'js-inactive';

        const elements = document.querySelectorAll('.js-prevent-spam');

        elements.forEach(function (element) {
            element.addEventListener('click', onClickHandler);
        });

        function onClickHandler(event) {
            const element = event.currentTarget;

            const preventSpamDuration = parseInt(element.getAttribute('data-prevent-spam-duration'))
                || DEFAULT_PREVENT_SPAM_DURATION_TIME;

            element.classList.add(INACTIVE_CLASS_NAME);

            setTimeout(function () {
                element.classList.remove(INACTIVE_CLASS_NAME);
            }, preventSpamDuration);
        }
    }

    function configureDisabledAfterFirstClick() {
        const DISABLED_CLASS_NAME = 'js-disabled';

        const elements = document.querySelectorAll(".js-disabled-after-first-click");
    
        elements.forEach(function (element) {
            element.addEventListener('click', onClickHandler);
        });
    
        function onClickHandler(event) {
            const element = event.target;

            if (element.classList.contains(DISABLED_CLASS_NAME)) {
                event.preventDefault();
                return;
            }

            element.classList.add(DISABLED_CLASS_NAME);

            if (element.tagName === 'BUTTON') {
                element.disabled = true;
            }
        }
    }

    function configureInstantClick() {
        const elements = document.querySelectorAll(".js-trigger-click");
    
        elements.forEach(function (element) {
            const event = new Event("click");
            element.dispatchEvent(event);
        });
    }
});
