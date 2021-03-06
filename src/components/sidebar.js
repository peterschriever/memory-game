import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setCardColor,
  setOpenColor,
  setPairedColor,
  startNewGame,
  changeBoardChar,
  changeBoardSize
} from '../actions/index';
import MyColorPicker from './my_color_picker';

class SideBar extends Component {
  render() {
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
             {/* TODO: update average playtime */}
             <td>0s (64s)</td>
           </tr>
           <tr>
             <td colSpan="2" className="strong">Karakter op kaarten: </td>
             <td>
               <select name="character"
                 id="character"
                 onChange={(e) => this.props.changeBoardChar(e.target.value)}>
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
               <select name="size" id="size"
                 onChange={(e) => this.props.changeBoardSize(e.target.value)}>
                 <option value="2">2</option>
                 <option value="4">4</option>
                 <option value="6" defaultValue>6</option>
               </select>
             </td>
           </tr>
           <tr><td>&nbsp;</td></tr>
           <tr>
             <td colSpan="3">
               <MyColorPicker color={this.props.colors.closed}
                 title="Kaartkleur"
                 callback={this.props.setCardColor} />
             </td>
           </tr>
           <tr>
             <td colSpan="3">
               <MyColorPicker color={this.props.colors.opened}
                 title="Open"
                 callback={this.props.setOpenColor} />
             </td>
           </tr>
           <tr>
             <td colSpan="3">
               <MyColorPicker color={this.props.colors.paired}
                 title="Gevonden"
                 callback={this.props.setPairedColor} />
             </td>
           </tr>
           <tr>
             <td>
               {/* @TODO: call newGame action */}
               <button className="btn btn-default"
                 onClick={
                   () => this.props.startNewGame(this.props.boardConfig)
                 }>
                 Nieuw Spel
               </button>
             </td>
           </tr>
         </tbody>
       </table>
     );
   }
}

const mapStateToProps = ({colors, boardConfig}) => {
  return {
    colors,
    boardConfig
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      setCardColor,
      setOpenColor,
      setPairedColor,
      startNewGame,
      changeBoardChar,
      changeBoardSize
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
