<script lang="ts">
  export let name = "";
  export let id = "";
  export let min = 1;
  export let max = 100;
  export let step = 1;
  export let value = 50;
  export let disabled = false;
  export let variant: "default" | "brand" = "default";
</script>

<input
  type="range"
  bind:value
  class={variant}
  {min}
  {max}
  {step}
  {disabled}
  {name}
  {id}
  aria-label={id}
/>

<style>
  input[type="range"] {
    height: 6px;
    border-radius: 99999px;
    margin: 0.5rem 0.25rem;
    min-width: 0;
    outline: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: var(--light-secondary);
  }

  input[type="range"]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
  }

  input[type="range"]::-webkit-slider-thumb:enabled {
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb:enabled {
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
  }

  input[type="range"]:enabled:focus::-moz-range-thumb {
    outline: 2px solid;
    outline-offset: 2px;
  }

  input[type="range"]:enabled:focus::-webkit-slider-thumb {
    outline: 2px solid;
    outline-offset: 2px;
  }

  input[type="range"].default::-webkit-slider-thumb {
    background-color: var(--dark-primary);
  }

  input[type="range"].default::-moz-range-thumb {
    background-color: var(--dark-primary);
  }

  input[type="range"].default:enabled:focus::-moz-range-thumb {
    outline-color: var(--light-accent);
  }

  input[type="range"].default:enabled:focus::-webkit-slider-thumb {
    outline-color: var(--light-accent);
  }

  input[type="range"].brand::-moz-range-thumb {
    background-color: var(--brand-primary);
  }

  input[type="range"].brand::-webkit-slider-thumb {
    background-color: var(--brand-primary);
  }

  input[type="range"].brand:enabled:focus::-moz-range-thumb {
    outline-color: var(--brand-accent);
  }

  input[type="range"].brand:enabled:focus::-webkit-slider-thumb {
    outline-color: var(--brand-accent);
  }

  :global(.dark) input[type="range"] {
    background-color: var(--dark-secondary);
  }

  :global(.dark) input[type="range"].default::-moz-range-thumb {
    background-color: var(--light-primary);
  }

  :global(.dark) input[type="range"].default::-webkit-slider-thumb {
    background-color: var(--light-primary);
  }

  :global(.dark) input[type="range"].default:enabled:focus::-moz-range-thumb {
    outline-color: var(--dark-accent);
  }

  :global(.dark)
    input[type="range"].default:enabled:focus::-webkit-slider-thumb {
    outline-color: var(--dark-accent);
  }
</style>
