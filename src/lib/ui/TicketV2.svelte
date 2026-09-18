<script lang=ts>
  export let num: number;
</script>

<div class="container">
  <div class="id-small"><span>{num}</span></div>
  <div class="details">
    <div class="header">
      <img src="amec-logo-bw.png" />
      <div>
        A.M.E. Church<br>Tshedza Point<br>EBB FUNDRAISING
      </div>
    </div>

    <div class="meta">
      <div>Ticket: <span class="price">R10</span></div>
      <div><span class="date-label">Date of draw:</span> 27/09/2026</div>
    </div>

    <div class="prizes">
      <div>1<sup>st</sup> Prize: Bennett Read Blender</div>
      <div>2<sup>nd</sup> Prize: Kambrook two slice toaster</div>
      <div>3<sup>rd</sup> Prize: Kambrook electric glass kettle</div>
    </div>
  </div>
  <div class="id-big"><span>{num}</span></div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 6fr 3fr;
    height: 100%;

    & > div.details {
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  }

  div.id-small,
  div.id-big {
    font-family:'Courier New', Courier, monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    & > span {
      display: block;
    }
  }

  div.id-small{
    font-size: 1.25rem;

    & > span {
      transform: rotate(-90deg);
    }
  }

  div.id-big {
    font-size: 3rem;
  }

  div.details {
    padding: 3px;

    & > .header {
      position: relative;
      font-variant: small-caps;
      font-size: 0.9rem;
      margin-bottom: 3px;
      font-weight: bold;

      & > img {
        display: block;
        width: 40px;
        position: absolute;
        top: 0;
        left: 0;

        & + div {
          text-align: center;
        }
      }
    }
  }

  div.meta {
    display: flex;
    justify-content: space-between;

    & span.price { font-weight: bold; }
    & span.date-label { text-decoration: underline; }
  }

  div.meta,
  div.prizes {
    font-size: 0.75rem;
  }
</style>