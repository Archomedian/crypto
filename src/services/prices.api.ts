export class PancakeSwap{
	baseURL: string = import.meta.env.PANCAKE_API_URL;
	constructor(_baseURL: string){
		this.baseURL = _baseURL;
	}

	public async getTokens(uri: string){
		
		const tokens = await (await fetch(this.baseURL + uri)).json();
		return tokens.data;
	}
}

export class CoinGecko{
	baseURL: string = import.meta.env.VITE_GECKO_API;
	constructor(_baseURL: string = import.meta.env.VITE_GECKO_API){
		this.baseURL = _baseURL;
	}

	public async getCoinsMarkets(uri: string, currency: string,	per_page: number, page: number){
		const tokens = await(await fetch(this.baseURL + uri + '?vs_currency=' + currency + '&order=market_cap_desc&per_page=' + per_page + '&page=' + page)).json();
		return tokens;
	}

	public async getCoinsList(uri: string, include_plat: boolean){
		const coins = await(await fetch(this.baseURL + uri + '?include_platform=' + include_plat)).json();
		return coins;
	}
}