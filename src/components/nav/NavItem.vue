<script lang="ts">

export default {
	props: {
		to: String,
		text: String,
	},
	data() {
		return {
			hover: false
		}
	},
	created() {
	},
	methods:{
	}
}
</script>

<template>
	<div @mouseenter="this.hover = true" @mouseleave="this.hover = false">
		<RouterLink :to="this.to" >
			{{text}}
		</RouterLink>
	</div>
	<slot name="dropdowns" id="dropdown-cnt" v-if="hover"></slot>
</template>

<style scoped>
div {
	display: inline-block;
	/* padding: 0 1rem; */
	/* margin: 1rem 0; */
	border-left: 1px solid var(--color-border);
}

/* #dropdown-cnt {
	display: block;
} */
</style>