<script lang="ts">
import PriceItem from './PriceItem.vue';
import { PancakeSwap, CoinGecko } from '@/services/prices.api'
import type { geckoCoinsMarket } from '@/types/tokens';

export default {
	props: {
		apiSource: String
	},
	components: {
		PriceItem
	},
	data() {
		return {
			error: "",
			tokens: {} as geckoCoinsMarket[],
			updateTime: 10000,
			pancake: {
				api: import.meta.env.PANCAKE_API_URL,
				tokensURI: import.meta.env.PANCAKE_API_TOKENS_URI,
				tokens: null
			},
			gecko: {
				apiURL: import.meta.env.VITE_GECKO_API,
				coinsMarket: import.meta.env.VITE_GECKO_API_COINS_MARKET_URI,
				fiat: import.meta.env.VITE_GECKO_API_COINS_MARKET_FIAT,
				per_page: import.meta.env.VITE_GECKO_API_COINS_MARKET_TOKENS_PER_PAGE,
				page: import.meta.env.VITE_GECKO_API_COINS_MARKET_STARTING_NUMBER_OF_PAGES,
			}
		}
	},
	created() {
		switch(this.apiSource) {
			case "gecko":
				this.geckoHandle();
				break;
			case "pancake":
				break;
		}
	},
	methods: {
		geckoHandle(){
			this.geckoFetch(this.gecko.page)
			window.setInterval(
				() => {
					this.geckoFetch(this.gecko.page);
				}, this.updateTime
			)
			window.onscroll = () => {
				let almostbottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - this.gecko.page*window.innerHeight;
				if ( almostbottomOfWindow && this.tokens && (this.tokens.length / this.gecko.per_page == this.gecko.page)) {
					this.gecko.page++;
					this.geckoFetch(this.gecko.page);
					console.log(this.gecko.page)
				}
			};
		},
		async geckoFetch(lastPage=1){
			let tokens = new Array();
			let api = null;
			api = new CoinGecko(this.gecko.apiURL);
			try {
				for(let i = 0; i < lastPage; i++){
					tokens = tokens.concat(await api.getCoinsMarkets(this.gecko.coinsMarket, this.gecko.fiat, this.gecko.per_page, i));
				}
			} catch (error) {
				console.log(error);
				this.error = error as string;
			}
			this.tokens = tokens;
		}
	},
}
</script>

<template>
	<span v-if="this.error">There seems to be an error: <a>{{this.error}}</a></span>
	<PriceItem v-for="(token, index) in tokens" :token="token" :key="index" />
</template>
