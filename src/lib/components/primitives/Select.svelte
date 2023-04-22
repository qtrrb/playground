<script lang="ts">
  export let name = "";
  export let id = "";
  export let placeholder = "";
  export let value = "";
  export let disabled = false;
</script>

<select bind:value {name} {disabled} {id} aria-label={id}>
  {#if placeholder}
    <option value="" disabled selected>{placeholder}</option>
  {/if}
  <slot />
</select>

<style>
  select {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 0.875rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 1.5rem;
    border-radius: 6px;
    border: 1px solid;
    height: 2.5rem;
    margin: 0.25rem;
    min-width: 0;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: var(--light-primary);
    color: var(--dark-primary);
    border-color: var(--light-accent);
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23d4d4d4' ><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/></svg>")
      no-repeat;
    background-position: 98%;
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
  }

  select:focus:enabled {
    outline: solid 2px;
    outline-offset: 2px;

    outline-color: var(--light-secondary);
  }

  select:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :global(option) { 
    background-color: var(--light-primary);
  }

  :global(.dark) select {
    background-color: var(--dark-primary);
    color: var(--light-primary);
    border-color: var(--dark-accent);

    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%233f3f46' ><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/></svg>")
      no-repeat;
    background-position: 98%;
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
  }

  :global(.dark) select:focus:enabled {
    outline-color: var(--dark-secondary);
  }

  :global(.dark) :global(option) { 
    background-color: var(--dark-primary);
  }

</style>
