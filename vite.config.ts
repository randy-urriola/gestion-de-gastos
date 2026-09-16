import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	optimizeDeps: {
		include: ['prop-types'], // 👈 aquí forzamos que Vite/Rolldown lo trate como dependencia ESM
	},
});
