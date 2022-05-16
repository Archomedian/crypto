/// <reference types="vite/client" />

interface ImportMeta {
	readonly env: {
		readonly VITE_COIN_MARKET_CAP_KEY: string
		readonly VITE_PANCAKE_API_URL: string
		readonly VITE_PANCAKE_API_TOKENS_URI: string
		
		readonly VITE_GECKO_API: string
		
		readonly VITE_GECKO_API_COINS_MARKET_URI: string
		readonly VITE_GECKO_API_COINS_MARKET_FIAT: string
		readonly VITE_GECKO_API_COINS_MARKET_TOKENS_PER_PAGE: number
		readonly VITE_GECKO_API_COINS_MARKET_STARTING_NUMBER_OF_PAGES: number

		readonly VITE_GECKO_API_COINS_LIST_URI: string
		readonly VITE_GECKO_API_COINS_LIST_INCLUDE_PLATFORM: boolean

		// more env variables...
	}
}