<script>
  import Logo from "../icons/Logo.svelte";
  import Button from "./primitives/Button.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header>
  <div class="content-container">
    <nav>
      <Logo />
      <h1>Playground</h1>
      <Button variant="plain" size="sm" href="#">Completion</Button>
      <Button variant="plain" size="sm" disabled>Chat</Button>
    </nav>
    <ThemeToggle />
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 3.5rem;
    border-bottom: 1px solid;
  }

  header h1 {
    margin: 0;
    font-size: 1.375rem;
  }

  header .content-container {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    max-width: 90rem;
  }

  header nav {
    align-items: center;
    display: flex;
    column-gap: 0.25rem;
  }

  :global(.dark) header {
    border-bottom-color: var(--dark-accent);
  }

  :global(.light) header {
    border-bottom-color: var(--light-accent);
  }
</style>
