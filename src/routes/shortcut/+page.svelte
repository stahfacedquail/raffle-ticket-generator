<script>
  import Ticket from "$lib/ui/TicketV2.svelte";

  const NUM_TABLES = 50;
  let t = 8000;

</script>
{#each Array(NUM_TABLES) as __, p}
<div class="table">
  {#each Array(5) as _, r}
  <div class="row {r === 0 ? 'top' : r === 4 ? 'bottom' : ''}">
    <div class="cell left"><Ticket num={t + p * 10 + r}></Ticket></div>
    <div class="cell right"><Ticket num={t + p * 10 + r + 5}></Ticket></div>
  </div>
  {/each}
</div>
{/each}

<style>
  :global(body) {
    margin: 0;
  }

  .table {
    width: 25.7cm;
    height: 642px;
  }

  .row {
    height: 20%;
    width: 100%;
    display: flex;
  }

  .cell {
    width: 50%;
    height: 100%;
    outline: 1px solid black;
  }
</style>