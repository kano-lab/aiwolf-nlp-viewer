<script lang="ts">
  import { IdxToText } from "$lib/constants/translate";

  export let agentIdx: string;
  export let highlight = false;
</script>

<strong class={highlight ? "agent" + agentIdx.padStart(2, "0") : ""}
  >{IdxToText(agentIdx)}</strong
>

<style>
  strong.agent01 {
    background: linear-gradient(
      transparent var(--highlight-width),
      var(--highlight-color-agent01) var(--highlight-width)
    );
  }

  strong.agent02 {
    background: linear-gradient(
      transparent var(--highlight-width),
      var(--highlight-color-agent02) var(--highlight-width)
    );
  }

  strong.agent03 {
    background: linear-gradient(
      transparent var(--highlight-width),
      var(--highlight-color-agent03) var(--highlight-width)
    );
  }

  strong.agent04 {
    background: linear-gradient(
      transparent var(--highlight-width),
      var(--highlight-color-agent04) var(--highlight-width)
    );
  }

  strong.agent05 {
    background: linear-gradient(
      transparent var(--highlight-width),
      var(--highlight-color-agent05) var(--highlight-width)
    );
  }
</style>
