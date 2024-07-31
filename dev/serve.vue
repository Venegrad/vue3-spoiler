<template>
	<section id="app" class="container">
		<ven-spoiler v-model="isOpen" @open="open" @close="close" @changed="changed" title="V-MODEL WITH ACTION">
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
		</ven-spoiler>

		<ven-spoiler title="STATIC WITHOUT VARIABLE">
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
		</ven-spoiler>

		<ven-spoiler :open="true">
			<template #button>
				<div>CUSTOM BUTTON</div>
			</template>
			<template #angle>
				<div>CUSTOM ANGLE</div>
			</template>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
		</ven-spoiler>

		<ven-spoiler :open="true" title="STATIC WITH OPEN PARAMS">
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nobis deserunt delectus expedita veritatis nam fuga ex laudantium. Fugit a ipsa molestias voluptate molestiae sit laboriosam asperiores velit rerum beatae?</p>
		</ven-spoiler>

	</section>
</template>

<script setup>
import { ref } from 'vue';
import venSpoiler from '@/venSpoiler.vue';

const isOpen = ref(false)
const open = val => alert('open')
const close = val => alert('closed')
const changed = val => alert(val)
</script>

<style>
	body {
		padding: 20px;
		margin: 0;
		background-color: #111;
		color: #fff;
		font-family: 'Tahoma';
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.gtitle {
		width: 100%;
		color: #fff;
	}

	.gtext {
		color: #fff;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #fff;
		margin-top: 60px;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}


	
</style>
