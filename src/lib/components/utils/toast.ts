import Toast from "../primitives/Toast.svelte";

export function useToast(
  message: string,
  variant: "danger" | "warning" | "success" = "danger"
) {
  new Toast({
    target: document.body,
    props: {
      message: message,
      variant: variant,
    },
  });
}
