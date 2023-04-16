<script setup lang="ts">
  export let tabs: Array<string>;
  export let value: string = tabs[0];
  export let disabled: boolean = false;
  export let variant: "default" | "brand" = "default";
</script>

<div class="tab-container {disabled === true ? 'disabled' : 'enabled'}">
  {#each tabs as tab}
    <button
      class="{value == tab ? 'focus' : 'plain'} {variant}"
      on:click={() => (value = tab)}
      {disabled}>{tab}</button
    >
  {/each}
</div>

<style scoped>
  .tab-container {
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
    border: 1px solid;
    border-radius: 8px;
    padding: 0 3px;
    margin: 0.25rem;

    border-color: var(--light-accent);
  }

  .tab-container.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .disabled button {
    cursor: not-allowed;
  }

  .tab-container button {
    border-radius: 5px;
  }

  button {
    box-sizing: border-box;
    display: inline-flex;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 6px;
    border: none;
    align-items: center;
    justify-content: center;
  }

  .plain {
    background-color: transparent;

    color: var(--dark-primary);
  }

  .enabled .plain:hover {
    background-color: var(--light-secondary);
  }

  .focus.default {
    background-color: var(--dark-primary);
    color: var(--light-primary);
  }

  .focus.brand {
    background-color: var(--brand-primary);
    color: var(--light-primary);
  }

  :global(.dark) .tab-container {
    border-color: var(--dark-accent);
  }

  :global(.dark) .plain {
    color: var(--light-primary);
  }

  :global(.dark) .enabled .plain:hover {
    background-color: var(--dark-secondary);
  }

  :global(.dark) .focus.default {
    background-color: var(--light-primary);
    color: var(--dark-primary);
  }
</style>
