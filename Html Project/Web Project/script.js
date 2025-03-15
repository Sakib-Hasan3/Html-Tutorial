// Countdown Timer
const countdown = document.getElementById('countdown');
const newYearDate = new Date('Jan 1, 2025 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = newYearDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0) {
        countdown.innerHTML = "🎉 Happy New Year 2025! 🎉";
        clearInterval(timer);
    }
};

// Update every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown();
