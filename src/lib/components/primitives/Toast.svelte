<script lang="ts">
  import { onMount } from "svelte/internal";
  import { fly } from "svelte/transition";

  export let message = "";
  export let variant: "danger" | "warning" | "success" = "danger";

  let visible: boolean = false;

  export function createToast() {
    new this({
      target: document.body,
    });
  }

  export function changeColor() {
    alert("hello world");
  }

  onMount(async () => {
    visible = true;
    await new Promise((r) => setTimeout(r, 3000));
    visible = false;
  });
</script>

{#if visible}
  <div class="toast {variant}" transition:fly={{ y: -60, duration: 200 }}>
    {message}
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);

    display: inline-flex;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    min-height: 2.5rem;
    padding: 0.5rem 1.25rem;
    border: 1px solid;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
  }

  .danger {
    background-color: var(--danger-primary);
    color: var(--light-primary);
    border-color: var(--danger-accent);
  }

  .warning {
    background-color: var(--warning-primary);
    color: var(--light-primary);
    border-color: var(--warning-accent);
  }

  .success {
    background-color: var(--success-primary);
    color: var(--light-primary);
    border-color: var(--success-accent);
  }
</style>
