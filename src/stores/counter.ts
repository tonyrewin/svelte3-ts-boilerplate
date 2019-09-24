import { writable, Writable } from 'svelte/store'

export const count: Writable<number> = writable(0)
