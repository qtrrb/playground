const endpoint = import.meta.env.VITE_ENDPOINT;

export async function getAvailableModels(): Promise<string[]> {
  const url = endpoint + "models";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function* callApiStream(
  model: string,
  prompt: string,
  length: number,
  temperature: number,
  stop: string,
  topP: number,
  repetition: number
): AsyncGenerator<string> {
  const url = endpoint + "completion_stream";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      prompt: prompt,
      max_new_tokens: length,
      temperature: temperature,
      stopping_criteria: stop,
      top_p: topP,
      repetition_penalty: repetition,
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const reader = response.body.getReader();
  let result = await reader.read();
  while (!result.done) {
    const tokens = new TextDecoder().decode(result.value);
    console.log(result.value);
    console.log(tokens);
    yield tokens;
    result = await reader.read();
  }
}

export async function callApi(
  model: string,
  prompt: string,
  length: number,
  temperature: number,
  stop: string,
  topP: number,
  repetition: number
): Promise<string> {
  const url = endpoint + "completion";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      prompt: prompt,
      max_new_tokens: length,
      temperature: temperature,
      stopping_criteria: stop,
      top_p: topP,
      repetition_penalty: repetition,
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const generatedText = await response.text();
  return generatedText;
}
