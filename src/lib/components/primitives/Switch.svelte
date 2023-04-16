<script lang="ts">
  export let name: string = "";
  export let id: string = "";
  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let variant: "default" | "brand" = "default";
</script>

<label class="switch {disabled ? 'disabled' : 'enabled'}">
  <input type="checkbox" bind:checked {disabled} {name} {id} aria-label={id} />
  <span class="slider round {variant}" />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 2.75rem;
    height: 1.5rem;
    margin: 0.25rem;
  }

  .switch.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--light-accent);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 0.25rem;
    bottom: 0.25rem;
    -webkit-transition: 0.1s;
    transition: 0.1s;

    background-color: var(--light-primary);
  }

  .slider.round {
    border-radius: 99999px;
  }

  .slider.round:before {
    border-radius: 99999px;
  }

  input:checked + .slider.default {
    background-color: var(--dark-primary);
  }

  input:checked + .slider.brand {
    background-color: var(--brand-primary);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.25rem);
    -ms-transform: translateX(1.25rem);
    transform: translateX(1.25rem);
  }

  input:enabled:focus + .slider {
    outline: 2px solid;
    outline-offset: 2px;
  }

  input:enabled:focus + .slider.default {
    outline-color: var(--light-secondary);
  }

  input:enabled:focus + .slider.brand {
    outline-color: var(--brand-accent);
  }

  :global(.dark) .slider {
    background-color: var(--dark-accent);
  }

  :global(.dark) .slider:before {
    background-color: var(--dark-primary);
  }

  :global(.dark) input:checked + .slider.default {
    background-color: var(--light-primary);
  }

  :global(.dark) input:checked + .slider.brand {
    background-color: var(--brand-primary);
  }

  :global(.dark) input:enabled:focus + .slider.default {
    outline-color: var(--dark-secondary);
  }

  :global(.dark) input:enabled:focus + .slider.brand {
    outline-color: var(--brand-accent);
  }
</style>
