<script lang="ts">
    export let name: string;
    export let slug: string;
    export let active: boolean;

    import { classes } from "$lib/helper/classes";
</script>

<li>
    <a href={`/categories${slug}`}
    class={classes("hover:text-blue-500 duration-300",
    active ? 'text-blue-500 underline' : 'text-white')}>
    {name}
    </a>
</li>