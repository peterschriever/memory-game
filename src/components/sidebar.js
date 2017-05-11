import React from 'react';

export default (props) => {
  return (
    <table id="meta">
      <tbody>
        <tr>
          <td colSpan="3">
            <strong>Top vijf</strong>
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <ol id="topscores">
              <li>Barack Obama: 200</li>
              <li>Bernie Sanders: 300</li>
              <li>Hilary Clinton: 400</li>
              <li>Hilary Clinton: 500</li>
              <li>Hilary Clinton: 600</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td className="strong" colSpan="2">Gemiddelde speeltijd: </td>
          <td>0s (64s)</td>
        </tr>
        <tr>
          <td colSpan="2" className="strong">Karakter op kaarten: </td>
          <td>
            <select name="character" id="character">
              <option value="*">*</option>
              <option value="#">#</option>
              <option value="@">@</option>
              <option value="&amp;">&amp;</option>
              <option value="%">%</option>
              <option value="X">X</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className="strong">Afmeting bord: </td>
          <td>
            <select name="size" id="size">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6" defaultValue>6</option>
            </select>
          </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
          {/* @TODO: color picker component */}
          <td>
            <button className="jscolor btn btn-default">
              Kaartkleur
            </button>
          </td>
          <td colSpan="2">
            <div className="display-color"></div>
          </td>
        </tr>
        <tr>
          {/* @TODO: color picker component */}
          <td>
            <button className="jscolor btn btn-default">
              Open
            </button>
          </td>
          <td colSpan="2">
            <div className="display-color"></div>
          </td>
        </tr>
        <tr>
          {/* @TODO: color picker component */}
          <td colSpan="1">
            <button className="jscolor btn btn-default">
              Gevonden
            </button>
          </td>
          <td colSpan="2">
            <div className="display-color"></div>
          </td>
        </tr>
        <tr>
          <td>
            {/* @TODO: call newGame action */}
            <button className="btn btn-default">
              Nieuw Spel
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
