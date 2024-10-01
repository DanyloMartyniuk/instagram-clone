/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

/**
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
window.Pusher = Pusher;
const pusherKey = import.meta.env.VITE_PUSHER_APP_KEY;
const pusherCluster = import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1';
const pusherHost = import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${pusherCluster}.pusher.com`;
const pusherPort = import.meta.env.VITE_PUSHER_PORT ?? 80;
const pusherScheme = import.meta.env.VITE_PUSHER_SCHEME ?? 'https';
if (!pusherKey) {
    console.error('Pusher key is missing in the environment variables.');
}
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: pusherKey,
    cluster: pusherCluster,
    wsHost: pusherHost,
    wsPort: pusherPort,
    wssPort: pusherPort ?? 443,
    forceTLS: pusherScheme === 'https',
    enabledTransports: ['ws', 'wss'],
    // Додавання обробки помилок для підключення
    encrypted: true,
});
window.Echo.connector.pusher.connection.bind('error', function(err) {
    console.error('WebSocket connection error:', err);
});
window.Echo.connector.pusher.connection.bind('connected', function() {
    console.log('Successfully connected to Pusher WebSocket.');
});
 */
