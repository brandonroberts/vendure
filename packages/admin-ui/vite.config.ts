/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        root: __dirname,
        plugins: [
            angular(),
            viteTsconfigPaths({
                root: '.',
            }),
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['src/test-setup.ts'],
            include: ['**/*.spec.ts'],
            reporters: ['default'],
            passWithNoTests: false,
        },
        define: {
            'import.meta.vitest': mode !== 'production',
        },
    };
});
