<script lang="ts">
import NavItem from './NavItem.vue'


export default {
	props: {
	},
	components: {
		NavItem
	},
	data() {
		return {}
	},
	created() {
	},
	methods: {
	},
}
</script>

<template>
	<nav>
		<NavItem to="/" text="Home">
		</NavItem>
		<NavItem to="/dashboard" text="Dashboard" />
		<NavItem to="/controls" text="Controls" />
		<NavItem to="/stats" text="Stats" />
		<NavItem to="/prices" text="Prices" >
			<template #dropdowns>
				<RouterLink to="/sub-example">sub-example</RouterLink>
			</template>
		</NavItem>
		<NavItem to="/about" text="About" />
	</nav>

	<RouterView />
</template>


<style>
a,
.pink {
	text-decoration: none;
	color: var(--paradise-pink);
	transition: 0.4s;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a:hover {
	color: var(--color-text);
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	margin: 1rem 0;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

</style>
