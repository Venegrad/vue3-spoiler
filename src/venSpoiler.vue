<template lang="pug">
.ven-spoiler(:class="{'ven-active': open}")
	button.ven-spoiler__button(@click.prevent="open = !open" type="button")
		slot(name="button")
			span.ven-spoiler__title 
				span {{ title  }}
		slot(name="angle")
			span.ven-spoiler__angle
				span
	transition(name="accordionitem" @enter="startTransition" @after-enter="endTransition" @before-leave="startTransition" @after-leave="endTransition")
		.ven-spoiler__hidden(v-if="open")
			.ven-spoiler__hidden-wrap
				slot
</template>


<script setup>
import { ref, computed, watch } from "vue"

const props = defineProps({
	title: [String, Number],
	open: Boolean,
	modelValue: {
		type: Boolean,
		default: undefined
	}
})

const emit = defineEmits(['update:modelValue', 'open', 'close', 'changed'])

const open = props.modelValue !== undefined ? computed({
	get() {
		return props.modelValue
	},
	set(val) {
		emit("update:modelValue", val)
	}
}) : ref(props.open)

watch(() => open.value, val => {
	emit('changed', val)
	val ? emit("open", new Date()) : emit("close", new Date())
})


const startTransition = (el) => {
	el.style.height = el.scrollHeight + "px";
}

const endTransition = (el) => {
  el.style.height = "";
}
</script>

<style>

.ven-spoiler {
		border: 1px solid #555;
	}

	.ven-spoiler__button {
		cursor: pointer;
		user-select: none;
		text-align: left;
		padding: 15px 15px;
		gap: 10px;
		transition: all 0.35s ease;
		font-size: 18px;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background: none;
		outline: none;
		box-shadow: none;
		border: 0;
		color: #fff;
	}

	.ven-spoiler__angle {
		display: block;
		width: 20px;
		height: 20px;
		position: relative;
		transform: scaleY(-1);
	}

	.ven-active .ven-spoiler__angle  {
		transform: scaleY(1);
	}

	.ven-spoiler__angle:before {
		width: 10px;
		height: 2px;
		position: absolute;
		left: 50%;
		top: 40%;
		margin-left: -8px;
		transform: rotate(-45deg);
		background: #fff;
		display: block;
		content: '';
	}

	.ven-spoiler__angle:after {
		width: 10px;
		height: 2px;
		position: absolute;
		right: 50%;
		top: 40%;
		margin-right: -8px;
		transform: rotate(45deg) ;
		background: #fff;
		display: block;
		content: '';
	}

	.ven-spoiler__hidden-wrap {
		padding: 1px 15px 15px 15px;
	}


.accordionitem-enter-active, .accordionitem-leave-active {
	will-change: height;
  transition: height .25s ease;
	overflow: hidden;
}

.accordionitem-enter-from, .accordionitem-leave-to {
	height: 0 !important;
	overflow: hidden;
}
</style>