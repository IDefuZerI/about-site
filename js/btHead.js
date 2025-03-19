document.addEventListener('DOMContentLoaded', function() {
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const popups = document.querySelectorAll('.popup');

    function adjustPopupPosition(popup) {
        const rect = popup.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        // Скидаємо попередні стилі
        popup.style.left = '';
        popup.style.right = '';
        popup.style.transform = '';

        if (rect.right > viewportWidth) {
            // Якщо попап виходить за праву межу
            popup.style.left = 'auto';
            popup.style.right = '0';
            popup.style.transform = 'none';
        } else if (rect.left < 0) {
            // Якщо попап виходить за ліву межу
            popup.style.left = '0';
            popup.style.right = 'auto';
            popup.style.transform = 'none';
        }
    }

    // Відкриття/закриття попапу при кліку на тригер
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const popup = this.nextElementSibling;
            popup.classList.toggle('active');

            if (popup.classList.contains('active')) {
                adjustPopupPosition(popup);
            }
        });
    });

    // Перевірка позиції при зміні розміру вікна
    window.addEventListener('resize', function() {
        popups.forEach(popup => {
            if (popup.classList.contains('active')) {
                adjustPopupPosition(popup);
            }
        });
    });

    // Закриття попапу при кліку поза ним
    document.addEventListener('click', function(e) {
        popups.forEach(popup => {
            if (!popup.contains(e.target) && !e.target.classList.contains('popup-trigger')) {
                popup.classList.remove('active');
            }
        });
    });

    // Закриття попапу при натисканні клавіші Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            popups.forEach(popup => {
                popup.classList.remove('active');
            });
        }
    });
});