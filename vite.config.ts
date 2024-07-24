import react from '@vitejs/plugin-react';
import path from 'path';
import { presetWebFonts, presetWind, transformerVariantGroup } from 'unocss';
import { presetUseful } from 'unocss-preset-useful';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	optimizeDeps: {
		include: ['esm-dep > cjs-dep'],
	},
	plugins: [
		react(),
		unocss({
			transformers: [transformerVariantGroup()],
			shortcuts: [
				[
					'primary-gradient',
					'bg-gradient-to-r from-#754DFB from-0.05% to-#F561C0 to-99.93%',
				],
				['trade-info-row', '!table-row [&>div]:(table-cell vertical-mid)'],
			],
			presets: [
				presetWind(),
				presetUseful({
					theme: {
						extend: {
							keyframes: {
								fadeIn: {
									from: { opacity: 0 },
									to: { opacity: 1 },
								},
								fadeOut: {
									from: { opacity: 1 },
									to: { opacity: 0 },
								},
								swipeUp: {
									from: {
										opacity: 0,
										transform: 'translateY(100%)',
									},
									to: {
										opacity: 1,
										transform: 'translateY(0)',
									},
								},
								swipeDown: {
									from: {
										opacity: 1,
										transform: 'translateY(0)',
									},
									to: {
										opacity: 0,
										transform: 'translateY(100%)',
									},
								},
								zoomIn: {
									from: {
										opacity: 0,
										transform: 'scale(0.9)',
									},
									to: {
										opacity: 1,
										transform: 'scale(1)',
									},
								},
								zoomOut: {
									from: {
										opacity: 1,
										transform: 'scale(1)',
									},
									to: {
										opacity: 0,
										transform: 'scale(0.7)',
									},
								},
								checked: {
									'0%': {
										transform: 'scale(2)',
									},
									'75%': {
										transform: 'scale(0.9)',
									},
									'100%': {
										transform: 'scale(1)',
									},
								},
								flashing: {
									from: {
										transform: 'translateX(-100%)',
									},
									to: {
										transform: 'translateX(100%)',
									},
								},
								slideUp: {
									from: {
										opacity: 0,
										transform: 'translateY(2px)',
									},
									to: {
										opacity: 1,
										transform: 'translateY(0)',
									},
								},
								slideDown: {
									from: {
										opacity: 0,
										transform: 'translateY(-2px)',
									},
									to: {
										opacity: 1,
										transform: 'translateY(0)',
									},
								},
							},
							animation: {
								fadeIn: 'fadeIn 150ms ease-out',
								fadeOut: 'fadeOut 150ms ease-in forwards',
								swipeUp: 'swipeUp 200ms ease-out',
								swipeDown: 'swipeDown 100ms ease-in forwards',
								zoomIn: 'zoomIn 200ms ease-out',
								zoomOut: 'zoomOut 100ms ease-in forwards',
								checked: 'checked 150ms ease-in-out',
								flashing: 'flashing 1.5s linear infinite',
								slideUp: 'slideUp 150ms ease-in forwards',
								slideDown: 'slideDown 150ms ease-in forwards',
							},
						},
					},
				}),
				presetWebFonts({
					provider: 'google',
					fonts: {
						sans: { name: 'Poppins', weights: [400, 500, 600, 700] },
					},
				}),
			],
			theme: {
				screen: {
					large: '1728px',
				},
				colors: {
					background: '#141316',
					container: '#232631',
					grey: '#B4B5B9',
					lightgrey: '#ECECEC',
					boldgrey: '#666C81',
					input: 'rgba(102, 108, 129, 0.32)',
					list: 'rgba(255, 255, 255, 0.48)',
					border: 'rgba(255, 255, 255, 0.05)',
					gray: '#9F9F9F',
					red: '#F00',
				},
			},
			preflights: [
				{
					getCSS: ({ theme }) => `
          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-smoothing: grayscale;
          }

          html {
            min-height: 100vh;
            overflow-y: scroll;
            overflow-x: hidden;
            background: rgba(236, 236, 236, 1);
          }

          body {
            min-height: 100%;
            margin: 0;
            color: white;
            overflow-y: scroll;
            overflow-x: hidden;
            font-family: ${theme.fontFamily.sans};
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          input,
          button,
          select {
            font-family: inherit;
            color: ${theme.colors.foreground};
          }
        `,
				},
			],
		}),
		svgr(),
		tsconfigPaths(),
	],
	resolve: {
		alias: {
			process: 'process/browser',
			'@': path.resolve(__dirname, './src/'),
			'@app': path.resolve('./src/App.tsx'),
			'@stores': path.resolve('./src/stores/'),
			'@pages': path.resolve('./src/pages/'),
			'@components': path.resolve('./src/components/'),
			'@utils': path.resolve('./src/utils/'),
			'@contexts': path.resolve('./src/contexts/'),
			'@routes': path.resolve('./src/routes/'),
			'@types': path.resolve('./src/types/'),
			'@assets': path.resolve('./src/assets/'),
			'@configs': path.resolve('./src/configs/'),
			'@hooks': path.resolve('./src/hooks'),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'date-fns': ['date-fns'],
				},
			},
		},
	},
});
