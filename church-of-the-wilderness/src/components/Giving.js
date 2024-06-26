import React from 'eact';

function Giving() {
  return (
    <div className="giving">
      <h2>Give Online</h2>
      <form>
        <label>
          Amount:
          <input type="number" />
        </label>
        <button type="submit">Give</button>
      </form>
    </div>
  );
}

export default Giving;