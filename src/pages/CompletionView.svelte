<script lang="ts">
  import Button from "../lib/components/primitives/Button.svelte";
  import Textarea from "../lib/components/primitives/Textarea.svelte";
  import Label from "../lib/components/primitives/Label.svelte";
  import Select from "../lib/components/primitives/Select.svelte";
  import Slider from "../lib/components/primitives/Slider.svelte";
  import Input from "../lib/components/primitives/Input.svelte";
  import Switch from "../lib/components/primitives/Switch.svelte";

  import Send from "../lib/icons/Send.svelte";

  import { useToast } from "../lib/components/utils/toast";

  import {
    callApi,
    callApiStream,
    getAvailableModels,
  } from "../lib/services/api";

  import { onMount } from "svelte";

  async function completeStream() {
    buttonDisabledState = true;
    try {
      for await (const tokens of callApiStream(
        currentModel,
        text,
        length,
        temperature,
        stop,
        topP,
        repetition
      )) {
        text += tokens;
      }
      buttonDisabledState = false;
    } catch (error) {
      useToast(`API request failed: ${error.message}`);
      buttonDisabledState = false;
    }
  }

  async function completeNonStream() {
    buttonDisabledState = true;
    try {
      const generatedText = await callApi(
        currentModel,
        text,
        length,
        temperature,
        stop,
        topP,
        repetition
      );
      text += generatedText;
      buttonDisabledState = false;
    } catch (error) {
      useToast(`API request failed: ${error.message}`);
      buttonDisabledState = false;
    }
  }

  async function setAvailableModels() {
    try {
      models = await getAvailableModels();
      currentModel = models[0];
    } catch (error) {
      useToast(`API request failed: ${error.message}`);
    }
  }

  function complete() {
    if (stream) {
      completeStream();
    } else {
      completeNonStream();
    }
  }

  let text: string;
  let models: string[] = [];
  let currentModel: string = "";
  let temperature: number = 0.9;
  let stop: string;
  let length: number = 256;
  let topP: number = 1;
  let repetition: number = 1;
  let stream: boolean = true;

  let buttonDisabledState = false;
  onMount(async () => {
    await setAvailableModels();
  });
</script>

<main>
  <div class="main-container">
    <Textarea
      bind:value={text}
      resize={false}
      fullHeight
      id="completion-text-area"
    />
    <div class="submit-container">
      <Button
        disabled={buttonDisabledState}
        variant="solid"
        name="submit-button"
        on:click={() => complete()}
      >
        <Send /> Submit
      </Button>
    </div>
  </div>
  <div class="parameters-container">
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="model-select">Model</Label>
      </div>
      <Select bind:value={currentModel} name="model-select" id="model-select">
        {#each models as model}
          <option value={model}>{model}</option>
        {/each}
      </Select>
    </div>
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="temperature-slider">Temperature</Label>
        {temperature}
      </div>
      <Slider
        bind:value={temperature}
        name="temperature-slider"
        id="temperature-slider"
        min={0.01}
        max={1}
        step={0.01}
      />
    </div>
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="length-slider">Max new tokens</Label>
        {length}
      </div>
      <Slider
        name="length-slider"
        id="length-slider"
        bind:value={length}
        min={1}
        max={1024}
        step={1}
      />
    </div>
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="stop-input">Stop sequence</Label>
      </div>
      <Input bind:value={stop} name="stop-input" id="stop-input" />
    </div>
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="top-p-slider">Top P</Label>
        {topP}
      </div>
      <Slider
        name="top-p-slider"
        id="top-p-slider"
        bind:value={topP}
        min={0.01}
        max={1}
        step={0.01}
      />
    </div>
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="repetition-slider">Repetition penalty</Label>
        {repetition}
      </div>
      <Slider
        name="repetition-slider"
        id="repetition-slider"
        bind:value={repetition}
        min={0.01}
        max={2}
        step={0.01}
      />
    </div>
    <div class="parameter-container">
      <div class="label-container">
        <Label htmlFor="stream-switch">Stream</Label>
        {stream}
      </div>
      <Switch name="stream-switch" id="stream-switch" bind:checked={stream} />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: calc(100vh - 3.5rem);
  }

  .main-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    flex: 1;
  }

  .parameters-container {
    display: flex;
    flex-direction: column;
    width: 13rem;
    padding: 0.5rem;
    overflow: auto;
  }

  .parameter-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
  }

  .label-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    margin-bottom: 0.5rem;
  }
</style>
