<script>
  import Button from "../lib/components/primitives/Button.svelte";
  import Checkbox from "../lib/components/primitives/Checkbox.svelte";
  import Input from "../lib/components/primitives/Input.svelte";
  import Select from "../lib/components/primitives/Select.svelte";
  import Slider from "../lib/components/primitives/Slider.svelte";
  import Switch from "../lib/components/primitives/Switch.svelte";
  import Tabs from "../lib/components/primitives/Tabs.svelte";
  import Textarea from "../lib/components/primitives/Textarea.svelte";
  import Send from "../lib/icons/Send.svelte";
  import { useToast } from "../lib/components/utils/toast";
</script>

<main>
  <h2>Button</h2>
  <div class="components-container">
    <Button>Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="soft">Soft</Button>
    <Button variant="plain">Plain</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="brand">Brand</Button>
  </div>
  <div class="components-container">
    <Button disabled>Solid</Button>
    <Button variant="outline" disabled>Outline disabled</Button>
    <Button variant="soft" disabled>Soft disabled</Button>
    <Button variant="plain" disabled>Plain disabled</Button>
    <Button variant="danger" disabled>Danger disabled</Button>
    <Button variant="brand" disabled>Brand disabled</Button>
  </div>
  <div class="components-container">
    <Button size="lg">Large</Button>
    <Button>Medium</Button>
    <Button size="sm">Small</Button>
  </div>
  <div class="components-container">
    <Button href="#">Solid</Button>
    <Button variant="outline" href="#">Outline link</Button>
    <Button variant="soft" href="#">Soft link</Button>
    <Button variant="plain" href="#">Plain link</Button>
    <Button variant="danger" href="#">Danger link</Button>
    <Button variant="brand" href="#">Brand link</Button>
  </div>
  <div class="components-container">
    <Button variant="brand"><Send /> Icon</Button>
    <Button variant="brand"><Send /></Button>
  </div>
  <h2>Checkbox</h2>
  <div class="components-container">
    <Checkbox />
    <Checkbox variant="brand" />
    <Checkbox checked />
    <Checkbox variant="brand" checked />
  </div>
  <div class="components-container">
    <Checkbox disabled />
    <Checkbox variant="brand" disabled />
    <Checkbox checked disabled />
    <Checkbox variant="brand" checked disabled />
  </div>
  <h2>Input</h2>
  <div class="components-container">
    <Input placeholder="Type text here" />
  </div>
  <div class="components-container">
    <Input placeholder="Type text here" disabled />
  </div>
  <h2>Select</h2>
  <div class="components-container">
    <Select placeholder="Select value here" />
  </div>
  <div class="components-container">
    <Select placeholder="Select value here" disabled />
  </div>
  <h2>Slider</h2>
  <div class="components-container">
    <Slider />
    <Slider variant="brand" />
  </div>
  <div class="components-container">
    <Slider disabled />
    <Slider variant="brand" disabled />
  </div>
  <h2>Switch</h2>
  <div class="components-container">
    <Switch />
    <Switch variant="brand" />
    <Switch checked />
    <Switch variant="brand" checked />
  </div>
  <div class="components-container">
    <Switch disabled />
    <Switch variant="brand" disabled />
    <Switch checked disabled />
    <Switch variant="brand" checked disabled />
  </div>
  <h2>Tabs</h2>
  <div class="components-container">
    <Tabs tabs={["Tab 1", "Tab 2", "Tab 3"]} />
    <Tabs tabs={["Tab 1", "Tab 2", "Tab 3"]} variant="brand" />
  </div>
  <div class="components-container">
    <Tabs tabs={["Tab 1", "Tab 2", "Tab 3"]} disabled />
    <Tabs tabs={["Tab 1", "Tab 2", "Tab 3"]} variant="brand" disabled />
  </div>
  <h2>Textarea</h2>
  <div class="components-container">
    <Textarea resize={true} />
    <Textarea resize={false} />
    <Textarea resize="auto" />
  </div>
  <div class="components-container">
    <Textarea resize={true} disabled />
    <Textarea resize={false} disabled />
    <Textarea resize="auto" disabled />
  </div>
  <h2>Toast</h2>
  <div class="components-container">
    <Button on:click={() => useToast("Danger example", "danger")}>
      Danger
    </Button>
    <Button on:click={() => useToast("Warning example", "warning")}>
      Warning
    </Button>
    <Button on:click={() => useToast("Success example", "success")}>
      Success
    </Button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    height: calc(100vh - 3.5rem);
    overflow: auto;
  }
  .components-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
  }
</style>
