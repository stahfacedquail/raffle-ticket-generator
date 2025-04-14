<script lang="ts" context="module">
  type TicketParams = {
    quantity: number;
    price: number;
    start: number;
    event: string;
    drawDate: Date;
    prizes: string[];
  };

  let params: Readable<TicketParams>;

  export const setTicketParams = (p: TicketParams) => {
    params = readable(p);
  };

  export const getTicketParams = () => {
    return params;
  };
</script>

<script lang="ts">
  import { getOrdinalSuffix } from "$lib/utils";
    import { readable, type Readable } from "svelte/store";

  export let id: number | null;
  export let price: number;
  export let drawDate: Date;
  export let prizes: string[];
  export let event: string | null;

  function getDisplayDate(dt?: typeof drawDate) {
    if (!dt) return undefined;

    const year = dt.getFullYear();
    const month = dt.getMonth() + 1; // Months are zero-based
    const paddedMonth = month < 10 ? `0${month}` : month;
    const day = dt.getDate();
    const paddedDay = day < 10 ? `0${day}` : day;
    return `${paddedDay}/${paddedMonth}/${year}`;
  }

  $: displayDate = getDisplayDate(drawDate);

  function getDisplayId(_id?: typeof id) {
    if (!_id)
      return "0000";

    if (_id < 1000) {
      let padding = "";
      for (let i = 0; i < (4 - `${_id}`.length); i++)
        padding += "0";

      return `${padding}${_id}`;
    }

    return _id.toString();
  }

  $: displayId = getDisplayId(id);
</script>

<div class="ticket">
  <div>
    <p>{displayId}</p>
  </div>

  <div>
    <img src="amec-logo.png" alt="AME Church logo" />

    <h1>A.M.E. Church</h1>
    <h2>Songozwi Point</h2>
    <h3>{event ?? "[event name]"}</h3>

    <div class="draw-details">
      <div><em>Ticket:</em> <strong>R{price ?? "[??]"}</strong></div>
      <div><u>Date of draw:</u> {displayDate ?? "[??]"}</div>
    </div>

    <table class="prizes">
      {#each prizes as prize, index}
        <tr>
          <td>{index + 1}{getOrdinalSuffix(index + 1)} prize:</td>
          <td>{prize}</td>
        </tr>
      {/each}
    </table>
  </div>

  <div>
    <p>{displayId}</p>
  </div>
</div>

<style>
  div.ticket {
    display: grid;
    grid-template-columns: 1.35cm 6.39cm 5.74cm;
  }

  div.ticket > div {
    border: 1px solid black;
    border-right: none;
  }

  div.ticket > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.ticket > div:first-child > p {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin: 0;
    font-size: 1.75rem;
  }

  div.ticket > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.ticket > div:nth-child(3) > p {
    display: block;
    flex-grow: 2;
    text-align: center;
    margin: 0;
    font-size: 4.5rem;
  }  

  div.ticket > div:nth-child(1),
  div.ticket > div:nth-child(3) {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }

  div.ticket > div:last-child {
    border-right: 1px solid black;
  }

  div.ticket > div:nth-child(2) {
    position: relative;
    padding: 3px;
    font-family: Garamond, 'Times New Roman', Times, serif;
    font-size: 0.75rem;
  }

  div.ticket > div:nth-child(2) > img {
    display: block;
    position: absolute;
    top: 3px;
    left: 3px;
    height: 2.25rem;
  }

  div.ticket > div:nth-child(2) > h1,
  div.ticket > div:nth-child(2) > h2 {
    font-variant-caps: small-caps;
  }

  div.ticket > div:nth-child(2) > h1,
  div.ticket > div:nth-child(2) > h2,
  div.ticket > div:nth-child(2) > h3 {
    margin: 0;
    text-align: center;
    font-size: 0.8rem;
  }

  div.ticket > div:nth-child(2) > div.draw-details {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
  }

  div.ticket > div:nth-child(2) > table.prizes  td {
    padding: 0;
  }
</style>