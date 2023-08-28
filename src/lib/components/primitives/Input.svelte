<script lang="ts">
  export let value = "";
</script>

<input bind:value {...$$restProps} />

<style>
  input {
    display: inline-flex;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
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
  }

  input:focus:enabled {
    outline: solid 2px;
    outline-offset: 2px;

    outline-color: var(--light-secondary);
  }

  input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :global(.dark) input {
    background-color: var(--dark-primary);
    color: var(--light-primary);
    border-color: var(--dark-accent);
  }

  :global(.dark) input:focus:enabled {
    outline-color: var(--dark-secondary);
  }
</style>
