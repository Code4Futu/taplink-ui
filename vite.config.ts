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
					'primary-gradient-inactive',
					'bg-gradient-to-r from-#004851 from-0% to-sub to-100%',
				],
				[
					'primary-gradient-active',
					'bg-gradient-to-r from-sub to-primary opacity-100',
				],
				[
					'portfolio-gradient',
					'bg-gradient-to-r from-[rgba(255,255,255,0.10)] from-0% to-[rgba(78,180,254,0.12)] to-100%',
				],
				[
					'btn',
					'flex items-center justify-center h-24px font-700 text-16px hover:not-disabled:cursor-pointer transition-all duration-1000 ease-linear disabled:pointer-events-none',
				],
				[
					/^btn-(.*)$/,
					([, c]) =>
						`bg-${c} text-#fff hover:not-disabled:bg-op-75 disabled:(cursor-initial text-grey bg-#4c4c54)`,
				],
				[
					/^btn-outline-(.*)$/,
					([, c]) =>
						`b-1px b-${c} b-solid bg-transparent text-${c} hover:text-panel hover:bg-${c} disabled:(cursor-initial text-grey b-#4c4c54)`,
				],
				[
					'modal-button',
					'btn h-16px ml-5 text-14px leading-16px font-400 c-primary underline hover:op-60 transition-all duration-200 ease-in-out disabled:c-grey',
				],
				//PAGE
				[
					'page-content',
					'max-w-100% xl:max-w-1200px px-15px py-30px mx-auto w-100% h-100% lg:py-48px',
				],
				//MENU ITEM
				[
					'menu-item',
					'flex items-center h-100% font-500 text-14px hover:text-primary',
				],
				// ACCOUNT MENU
				['account-menu', 'h-48px text-14px font-500 cursor-pointer'],
				[
					'account-menu-item',
					'w-100% p-0 m-0 flex text-14px leading-16px font-normal c-grey',
				],
				// UNDERLINE
				['line-under', 'b-b-dashed b-b-1px b-b-#615D5D'],
				['line-under-1', 'underline underline-#615D5D decoration-dashed'],
				// TRADER
				[
					'trade-info-row',
					'!table-row [&>div]:(table-cell text-12px 2xl:text-14px vertical-mid) hover:(bg-gradient-to-r from-transparent via-secondary via-op-50 to-transparent)',
				],
				// TOAST
				[
					'toast-container',
					'rd-5px bg-panel b-border py-14px px-16px [&_[data-icon]]:(mr-10px) [&_[data-content]]:(gap-4px)',
				],
				[
					'toast-close-button',
					'right-0 left-auto translate-x-35% -translate-y-35% c-white bg-panel b-border hover:op75 [&[data-disabled=true]]:(hidden)',
				],
				['toast-title', 'font-600 text-13px'],
				['toast-description', 'font-400 text-13px leading-18px !text-white'],
				// LOADER
				[
					'loading-container',
					'flex items-center justify-center h-100vh w-100vw !bg-background op-70 [&>img]:w-250px',
				],
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
				colors: {
					background: '#141316',
					container: '#232631',
					grey: '#B4B5B9',
					lightgrey: '#ECECEC',
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
