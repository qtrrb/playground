<script lang="ts">
  export let htmlFor = "";
</script>

<label for={htmlFor}><slot /></label>

<style>
  label {
    font-size: 0.875rem;
    font-weight: 600;
  }
</style>
