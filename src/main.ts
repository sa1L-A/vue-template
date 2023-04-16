import { createApp } from 'vue';
import { store, storeKey } from '@/store';
import './style.css';
import App from '@/App.vue';

createApp(App).use(store, storeKey).mount('#app');
