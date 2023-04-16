<script lang="ts">
  export let name: string = "";
  export let id: string = "";
  export let placeholder = "";
  export let value = "";
  export let resize: boolean | "auto" = true;
  export let fullHeight: boolean = false;
  export let disabled: boolean = false;
  export let spellcheck: boolean = false;
  let textarea: HTMLTextAreaElement;

  function handleAutosize() {
    if (resize === "auto") {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.style.overflowY = "hidden";
    }
  }
</script>

<textarea
  bind:value
  bind:this={textarea}
  {placeholder}
  {disabled}
  {name}
  {id}
  aria-label={id}
  {spellcheck}
  on:input={() => handleAutosize()}
  class={resize === true ? "resizeable" : ""}
  style={fullHeight === true ? "height: 100%;" : ""}
/>

<style>
  textarea {
    display: inline-flex;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    border: 1px solid;
    border: none;
    resize: none;
    min-height: 4rem;
    margin: 0.25rem;
    min-width: 0;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-color: var(--light-primary);
    color: var(--dark-primary);
    border: 1px solid var(--light-accent);
  }

  .resizeable {
    resize: vertical;
  }

  textarea:focus:enabled {
    outline: solid 2px;
    outline-offset: 2px;

    outline-color: var(--light-secondary);
  }

  textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :global(.dark) textarea {
    background-color: var(--dark-primary);
    color: var(--light-primary);
    border: 1px solid var(--dark-accent);
  }

  :global(.dark) textarea:focus:enabled {
    outline-color: var(--dark-secondary);
  }
</style>
