<script lang="ts">
  export let variant:
    | "solid"
    | "outline"
    | "soft"
    | "plain"
    | "danger"
    | "brand" = "solid";
  export let size: "lg" | "md" | "sm" = "md";
  export let href = "";
</script>

{#if href}
  <a class="{size} {variant}" {href}><slot /></a>
{:else}
  <button class="{size} {variant}" {...$$restProps} on:click><slot /></button>
{/if}

<style>
  button {
    display: inline-flex;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    height: 2.5rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
    column-gap: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    display: inline-flex;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    height: 2.5rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
  }

  a:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .lg {
    height: 3rem;
  }

  .md {
    height: 2.5rem;
  }

  .sm {
    height: 2rem;
  }

  .solid {
    background-color: var(--dark-primary);
    color: var(--light-primary);
  }

  .solid:hover:enabled {
    background-color: var(--dark-secondary);
  }

  .solid:focus:enabled {
    background-color: var(--dark-primary);
    outline: solid 2px var(--dark-secondary);
    outline-offset: 2px;
  }

  :global(.dark) .solid {
    background-color: var(--light-primary);
    color: var(--dark-primary);
  }
  :global(.dark) .solid:hover:enabled {
    background-color: var(--light-secondary);
  }

  :global(.dark) .solid:focus:enabled {
    background-color: var(--light-primary);
    outline: solid 2px var(--light-secondary);
    outline-offset: 2px;
  }

  .outline {
    background-color: var(--light-primary);
    border: 1px solid var(--light-accent);
    color: var(--dark-primary);
  }

  .outline:hover:enabled {
    background-color: var(--light-secondary);
  }

  .outline:focus:enabled {
    background-color: var(--light-primary);
    outline: solid 2px var(--light-secondary);
    outline-offset: 2px;
  }

  :global(.dark) .outline {
    background-color: var(--dark-primary);
    border: 1px solid var(--dark-accent);
    color: var(--light-primary);
  }

  :global(.dark) .outline:hover:enabled {
    background-color: var(--dark-secondary);
  }

  :global(.dark) .outline:focus:enabled {
    background-color: var(--dark-primary);
    outline: solid 2px var(--dark-secondary);
    outline-offset: 2px;
  }

  .soft {
    background-color: var(--light-secondary);
    color: var(--dark-primary);
  }

  .soft:hover:enabled {
    background-color: var(--light-accent);
  }

  .soft:focus:enabled {
    background-color: var(--light-secondary);
    outline: solid 2px var(--light-accent);
    outline-offset: 2px;
  }

  :global(.dark) .soft {
    background-color: var(--dark-secondary);
    color: var(--light-primary);
  }

  :global(.dark) .soft:hover:enabled {
    background-color: var(--dark-accent);
  }

  :global(.dark) .soft:focus:enabled {
    background-color: var(--dark-secondary);
    outline: solid 2px var(--dark-accent);
    outline-offset: 2px;
  }

  .plain {
    background-color: transparent;
    color: var(--dark-primary);
  }

  .plain:hover:enabled {
    background-color: var(--light-secondary);
  }

  .plain:focus:enabled {
    background-color: transparent;
    outline: solid 2px var(--light-secondary);
    outline-offset: 2px;
  }

  :global(.dark) .plain {
    background-color: transparent;
    color: var(--light-primary);
  }

  :global(.dark) .plain:hover:enabled {
    background-color: var(--dark-secondary);
  }

  :global(.dark) .plain:focus:enabled {
    background-color: transparent;
    outline: solid 2px var(--dark-secondary);
    outline-offset: 2px;
  }

  .danger {
    background-color: transparent;
    border: 1px solid var(--danger-accent);
    color: var(--danger-primary);
  }

  .danger:hover:enabled {
    background-color: var(--danger-secondary);
  }

  .danger:focus:enabled {
    background-color: transparent;
    outline: solid 2px var(--danger-secondary);
    outline-offset: 2px;
  }

  .brand {
    background-color: var(--brand-primary);
    color: var(--light-primary);
  }

  .brand:hover:enabled {
    background-color: var(--brand-secondary);
  }

  .brand:focus:enabled {
    background-color: var(--brand-primary);
    outline: solid 2px var(--brand-accent);
    outline-offset: 2px;
  }
</style>
