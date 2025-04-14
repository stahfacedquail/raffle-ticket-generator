<script lang="ts">
  import Ticket, { setTicketParams } from "$lib/ui/Ticket.svelte";
  import { getOrdinalSuffix } from "$lib/utils";

  let quantity: number;
  let price: number;
  let start = 0;
  let event: string;
  let drawDate: Date;
  let prizes = ["", "", ""];

  // TODO: Remove this once done testing
  quantity = 25;
  price = 10;
  start = 5061;
  event = "LAY Day";
  drawDate = new Date("2024-06-04");
  prizes = [
    "Phillips Air fryer",
    "Russell Hobbs Steam Iron",
    "Platinum Glass S/S Cordless Kettle",
    "3 Tier Serving Platter",
  ];

  function addPrizeSlot() {
    prizes.push("");
    prizes = prizes;  // trigger reactivity
  }

  function removePrize(index: number) {
    prizes.splice(index, 1);
    prizes = prizes;
  }

  let submitted = false;

  function generateTickets() {
    console.log("Welp");
    setTicketParams({
      quantity,
      price,
      start,
      event,
      drawDate,
      prizes,
    });

    submitted = true;
  }
</script>

{#if submitted}
  {@const TKTS_PER_PAGE = 10}
  {@const TKTS_PER_ROW = 2}
  {@const ROWS_PER_PAGE = TKTS_PER_PAGE / TKTS_PER_ROW}
  {@const PAGES = Math.ceil(quantity / TKTS_PER_PAGE)}

  {#each Array(PAGES) as _, pageIndex}
    <div class="ticket-table">
      {#each Array(ROWS_PER_PAGE) as __, rowIndex}
        <div class="ticket-table-row">
          {#each Array(TKTS_PER_ROW) as ___, tktIndex}
            {@const count = pageIndex * TKTS_PER_PAGE + rowIndex * TKTS_PER_ROW + tktIndex}
            {#if count < quantity}
              {@const ticketId = start + count}
              <div class="ticket-table-cell">
                <Ticket
                  {event}
                  id={ticketId}
                  {price}
                  {drawDate}
                  {prizes} />
              </div>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  {/each}

{:else}
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
  
      <button type="button" on:click={generateTickets}>Generate tickets</button>
    </form>
  
    <div id="preview">
      <Ticket
        {event}
        id={start}
        {price}
        {drawDate}
        {prizes} />
    </div>
  </div>
{/if}


<style>
  div.container {
    display: flex;
  }

  div.ticket-table {
    margin-bottom: 0.25rem;
  }

  div.ticket-table-row {
    display: grid;
    grid-template-columns: repeat(2, min-content);
  }
</style>