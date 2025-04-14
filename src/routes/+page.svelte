<script lang="ts">
  import Ticket from "$lib/ui/Ticket.svelte";
  import { getOrdinalSuffix } from "$lib/utils";

  let quantity: number;
  let price: number;
  let start = 0;
  let event: string;
  let drawDate: Date;
  let prizes = ["", "", ""];

  function addPrizeSlot() {
    prizes.push("");
    prizes = prizes;  // trigger reactivity
  }

  function removePrize(index: number) {
    prizes.splice(index, 1);
    prizes = prizes;
  }

  function getDisplayStart() {
    if (start === null)
      return "0000";

    if (start < 1000) {
      let padding = "";
      for (let i = 0; i < (4 - `${start}`.length); i++)
        padding += "0";

      return `${padding}${start}`;
    }

    return start.toString();
  }

  $: displayStart = (start || true) ? getDisplayStart() : null;

  function generateTickets() {

  }
</script>

<h1>Generate raffle tickets</h1>
<div class="container">
  <form>
    <div>
      <label for="quantity">How many?</label>
      <input name="quantity" type="number" min=1 bind:value={quantity} />
    </div>
  
    <div>
      <label for="price">Ticket price</label>
      <span>R</span><input name="price" type="number" min=0 bind:value={price} />
    </div>
  
    <div>
      <label for="start">Start ticket IDs at</label>
      <input name="start" bind:value={start} type="number" min=0 />
    </div>
  
    <div>
      <label for="event">Event name</label>
      <input name="event" bind:value={event} />
    </div>
  
    <div>
      <label for="draw-date">Date of draw</label>
      <input name="draw-date" type="date" bind:value={drawDate} />
    </div>
  
    <div>
      <h2>Prizes</h2>
      {#each Array(prizes.length) as p, index (p ?? index)}
        <div>
          <label for="prize-{index + 1}">{index + 1}{getOrdinalSuffix(index + 1)} prize</label>
          <input name="prize-{index + 1}" bind:value={prizes[index]} />
          <button type="button" on:click={() => removePrize(index)}>Remove</button>
        </div>
      {/each}
      <div><button type="button" on:click={addPrizeSlot}>Add {prizes.length > 0 ? "another" : "a"} prize</button></div>
    </div>
  
    <button type="submit" on:submit|preventDefault={generateTickets}>Generate tickets</button>
  </form>

  <div id="preview">
    <Ticket
      {event}
      {displayStart}
      {price}
      {drawDate}
      {prizes} />
  </div>
</div>

<style>
  div.container {
    display: flex;
  }
</style>