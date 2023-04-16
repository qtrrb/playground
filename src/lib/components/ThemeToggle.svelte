<script lang="ts">
  import { onMount } from "svelte";
  import Moon from "../icons/Moon.svelte";
  import Sun from "../icons/Sun.svelte";
  import Button from "./primitives/Button.svelte";

  function toggleColorScheme(enableDarkMode = true) {
    if (enableDarkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }

  let darkMode = false;

  $: toggleColorScheme(darkMode);

  onMount(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      darkMode = true;
    }
  });
</script>

<Button variant="plain" on:click={() => (darkMode = !darkMode)}>
  {#if darkMode}
    <Sun />
  {:else}
    <Moon />
  {/if}
</Button>
