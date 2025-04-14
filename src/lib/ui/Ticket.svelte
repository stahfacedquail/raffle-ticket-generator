<script lang="ts">
  import { getOrdinalSuffix } from "$lib/utils";

  export let displayStart: string | null;
  export let price: number;
  export let drawDate: Date;
  export let prizes: string[];
  export let event: string | null;
</script>

<div id="ticket">
  <div>
    <p>{displayStart}</p>
  </div>

  <div>
    <img src="amec-logo.png" alt="AME Church logo" />

    <h1>A.M.E. Church</h1>
    <h2>Songozwi Point</h2>
    <h3>{event ?? "[event name]"}</h3>

    <div id="drawDetails">
      <div><em>Ticket:</em> <strong>R{price ?? "[??]"}</strong></div>
      <div><u>Date of draw:</u> {drawDate ?? "[??]"}</div>
    </div>

    <table id="prizes">
      {#each prizes as prize, index}
        <tr>
          <td>{index + 1}{getOrdinalSuffix(index + 1)} prize:</td>
          <td>{prize}</td>
        </tr>
      {/each}
    </table>
  </div>

  <div>
    <p>{displayStart}</p>
  </div>
</div>

<style>
  div#ticket {
    display: grid;
    grid-template-columns: 1.35cm 6.39cm 5.74cm;
  }

  div#ticket > div {
    border: 1px solid black;
    border-right: none;
  }

  div#ticket > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div#ticket > div:first-child > p {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin: 0;
    font-size: 1.75rem;
  }

  div#ticket > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div#ticket > div:nth-child(3) > p {
    display: block;
    flex-grow: 2;
    text-align: center;
    margin: 0;
    font-size: 4.5rem;
  }  

  div#ticket > div:nth-child(1),
  div#ticket > div:nth-child(3) {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }

  div#ticket > div:last-child {
    border-right: 1px solid black;
  }

  div#ticket > div:nth-child(2) {
    position: relative;
    padding: 3px;
    font-family: Garamond, 'Times New Roman', Times, serif;
    font-size: 0.75rem;
  }

  div#ticket > div:nth-child(2) > img {
    display: block;
    position: absolute;
    top: 3px;
    left: 3px;
    height: 2rem;
  }

  div#ticket > div:nth-child(2) > h1,
  div#ticket > div:nth-child(2) > h2 {
    font-variant-caps: small-caps;
  }

  div#ticket > div:nth-child(2) > h1,
  div#ticket > div:nth-child(2) > h2,
  div#ticket > div:nth-child(2) > h3 {
    margin: 0;
    text-align: center;
    font-size: 0.8rem;
  }

  div#ticket > div:nth-child(2) > div#drawDetails {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
  }

  div#ticket > div:nth-child(2) > table#prizes  td {
    padding: 0;
  }
</style>