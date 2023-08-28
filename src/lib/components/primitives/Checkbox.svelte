<script lang="ts">
  export let checked = false;
  export let variant: "default" | "brand" = "default";
</script>

<input
  class={variant}
  type="checkbox"
  bind:checked
  {...$$restProps}
/>

<style>
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    border: 1px solid;
    border-radius: 2px;
    height: 1rem;
    width: 1rem;
    margin: 0.25rem;

    border-color: var(--light-accent);
  }
  input[type="checkbox"]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  input[type="checkbox"]:focus:enabled {
    outline: 2px solid;
    outline-offset: 2px;
  }

  input[type="checkbox"].default:focus:enabled {
    outline-color: var(--light-secondary);
  }

  input[type="checkbox"].brand:focus:enabled {
    outline-color: var(--brand-accent);
  }

  input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;

    width: 5px;
    border-bottom: 1px solid;
    height: 10px;
    border-right: 1px solid;

    transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);

    left: 4px;
  }

  input[type="checkbox"].default:checked::after {
    color: var(--dark-primary);
  }

  :global(.dark) input[type="checkbox"] {
    border-color: var(--dark-accent);
  }

  :global(.dark) input[type="checkbox"].default:focus {
    outline-color: var(--dark-secondary);
  }

  :global(.dark) input[type="checkbox"].default:checked::after {
    color: var(--light-primary);
  }

  input[type="checkbox"].brand:checked::after {
    color: var(--brand-primary);
  }
</style>
