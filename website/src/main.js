import './styles.css';
import { createRouter } from './router.js';

const root = document.querySelector('#app');

if (!root) {
  throw new Error('GKFXL OS app root was not found.');
}

createRouter(root);
