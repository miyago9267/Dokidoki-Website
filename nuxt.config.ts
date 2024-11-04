import removeConsole from 'vite-plugin-remove-console';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'icon', href: '/logo.ico' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Figtree&display=swap' },
				{ rel: 'stylesheet', href: '"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Zen+Maru+Gothic&display=swap"' }
			],
			script: [
				{
				  src: 'https://www.instagram.com/embed.js',
				  async: true,
				},
			],
			noscript: [{ children: 'Javascript is required.' }],
			title: ''
		},
		keepalive: true,
		baseURL: process.env.BASE_URL || '/',
	},

	buildDir: 'Dokidoki-Website',

	devServer: {
		host: process.env.DEV_SERVER_HOST,
		port: Number(process.env.DEV_SERVER_PORT) || undefined
	},

	devtools: { enabled: false },

	experimental: {
		headNext: true,
		// inlineSSRStyles: false
	},

	imports: {
		dirs: ['./composables/**/*.ts']
	},

	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'nuxt-purgecss',
		'@element-plus/nuxt'
	],

	nitro: {
		compressPublicAssets: true,
		output: {
			dir: 'Dokidoki-Website'
		}
	},

	purgecss: {
		enabled: false,
		safelist: {
			deep: [],
			standard: [
				/-(appear|enter|leave)(|-(active|from|to))$/,
				/--unocss--/,
				/-\[\S+\]/,
				/.*data-v-.*/,
				/:deep/,
				/:global/,
				/:slotted/,
				/^(?!cursor-move).+-move$/,
				/^nuxt-link(|-exact)-active$/,
				/__uno_hash_(\w{6})/,
				'__nuxt',
				'body',
				'html',
				'nuxt-progress'
			]
		}
	},

	ssr: false,

	typescript: {
		tsConfig: {
			compilerOptions: {
				noImplicitOverride: true,
				noUncheckedIndexedAccess: true,
				noUnusedLocals: true,
				noUnusedParameters: true,
				"types": ["element-plus/global"]
			}
		},
		typeCheck: true
	},

	vite: {
		plugins: [removeConsole()]
	},

	elementPlus: {
		themes: ['dark'],
	},

	compatibilityDate: '2024-07-17'
});