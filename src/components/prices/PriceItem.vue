<script lang="ts">
import { CoinGecko } from '@/services/prices.api.ts'

export default {
	props: {
		token: Object,
		time: Date
	},
	data() {
		return {
			fiat: import.meta.env.VITE_GECKO_API_FIAT,
			show: false,
			timeSinceLastUpdate: this.token ? Math.round(Math.abs(new Date(this.token.last_updated).getTime() - new Date().getTime())/1000) : 0
		}
	},
	created(){
		window.setInterval(
			() => {
				if(this.token != null)
					if(this.token)
						this.timeSinceLastUpdate = Math.round(Math.abs(new Date(this.token.last_updated).getTime() - new Date().getTime())/1000);
			}, 2000
		)
	},
	methods:{
		calcHeight() : object
			{
			const elHeight = 24;
			var maxHeight = 0;
			if( this.token != null && this.show)
				maxHeight = elHeight * Object.keys(this.token).length
			const maxHeightPx = maxHeight + 'px'
			return {
				'max-height': maxHeightPx
			}
		}
	}
}
</script>

<template>
	<div class="item" @click="this.show = !this.show">
		<img :src="this.token.image">
		<!-- <i class='fas fa-angle-down' /> -->
		<div class="info">
			<h3>{{ this.token.name }} [{{ this.token.symbol.toUpperCase() }}]</h3>
			<span class="detail">Last Update:</span> {{this.timeSinceLastUpdate}}s<br/>
			{{ this.token.current_price }} {{this.fiat}}
		</div>
		<div class="collapsable" :style="calcHeight()">
			<div class="details" v-for="(detail, index) in this.token" :key="index">
				<span class="detail">{{index}}:</span> {{detail}}
			</div>
		</div>
	</div>
</template>

<style>

.collapsable {
	height: auto;
	overflow: hidden;
	transition: max-height 1.5s ease-in-out;
	transition-delay: 0s;
}

.item {
	display: flex;
	border: 1px solid var(--color-border);
	padding: 10px;
}

.details {
	margin-left: 1rem;
}

.info {
	margin-left: 1rem;
}

.detail{
	color: var(--color-heading);
}

h3 {
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 0.4rem;
	color: var(--color-heading);
	transition: 0.3s;
}

.item:hover h3{
	color: var(--color-text)
}

img{
	width: 32px;
	height: 32px;
}

/* 
.item {
	margin-top: 0;
	padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
}

i {
	display: flex;
	place-items: center;
	place-content: center;

	color: var(--color-text);
	}

@media (min-width: 1024px) {
	.item {
		margin-top: 0;
		padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
	}

	i {
		min-width: 50px;
		margin-right: 10px;
		top: calc(50% - 25px);
		left: -26px;
		position: absolute;
		border: 1px solid var(--color-border);
		background: var(--color-background);
		border-radius: 8px;
		width: 50px;
		height: 50px;
	}
	.item:before {
		content: ' ';
		border-left: 1px solid var(--color-border);
		position: absolute;
		left: 0;
		bottom: calc(50% + 25px);
		height: calc(50% - 25px);
	}

	.item:after {
		content: ' ';
		border-left: 1px solid var(--color-border);
		position: absolute;
		left: 0;
		top: calc(50% + 25px);
		height: calc(50% - 25px);
	}

	.item:first-of-type:before {
		display: none;
	}

	.item:last-of-type:after {
		display: none;
	} 
}
*/
</style>
