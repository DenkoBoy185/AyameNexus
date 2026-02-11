// Ayame's Nexus Scripts - WhatsApp Edition

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const periodBtn = document.getElementById('period-btn');
    const chocoBtn = document.getElementById('choco-btn');
    const sosMoneyBtn = document.getElementById('sos-money-btn');
    const allowanceBtn = document.getElementById('allowance-btn');
    const talkBtn = document.getElementById('talk-btn');
    const watchBtn = document.getElementById('watch-btn');
    const sendHeroBtn = document.getElementById('send-hero-btn');
    const specialWishInput = document.getElementById('special-wish-input');

    // Configuration
    const TARGET_PHONE = "18014272857"; // Format: CountryCode + Number

    // Helper Function to Send WhatsApp Message
    function sendWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${TARGET_PHONE}?text=${encodedMessage}`;
        window.open(url, '_blank');
    }

    // Button Click Handlers

    // Period Mode
    periodBtn.addEventListener('click', () => {
        // Toggle heart color visually
        const heart = periodBtn.querySelector('.heart');
        if (heart) heart.textContent = heart.textContent === '❤️' ? '💖' : '❤️';

        sendWhatsApp("【体調】あやめが「生理中モード」になりました。優しくしてね❤️");
    });

    // Chocolate Emergency
    chocoBtn.addEventListener('click', () => {
        sendWhatsApp("【甘味】チョコ緊急事態発生！あやめが甘いものを求めています🍫");
    });

    // SOS Money (High Priority)
    sosMoneyBtn.addEventListener('click', () => {
        sendWhatsApp("【最優先】あやめから緊急のサポート依頼が届きました！💸");
    });

    // Allowance Top-Up
    allowanceBtn.addEventListener('click', () => {
        sendWhatsApp("【お小遣い】あやめがお小遣いの補充をおねだりしています🎀");
    });

    // Talk Tonight
    talkBtn.addEventListener('click', () => {
        sendWhatsApp("【時間】今夜、あやめがお話ししたがっています🌙");
    });

    // Watch Something
    watchBtn.addEventListener('click', () => {
        sendWhatsApp("【時間】あやめが「一緒に何か見よう」と誘っています📺");
    });

    // Send Special Wish
    sendHeroBtn.addEventListener('click', () => {
        const wish = specialWishInput.value.trim();
        if (wish) {
            sendWhatsApp(`【特別】あやめからのお願い: 「${wish}」✨`);
            specialWishInput.value = ''; // Clear input
        } else {
            // Shake effect for empty input
            specialWishInput.style.border = "2px solid #ff6b6b";
            setTimeout(() => { specialWishInput.style.border = "2px solid #eee"; }, 500);
        }
    });

    // Add kawaii click effects (simple scale) to all buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('touchend', () => {
            btn.style.transform = 'scale(1)';
        });
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});
