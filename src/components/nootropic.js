import React from 'react';
import Tooltip from './tooltip';

class Nootropic extends React.Component {
    deSelectNoop = (code) => {
        this.props.onDeSelectNoop(this.props.data.code)
        this.props.exit()
    }
    selectNoop = (code) => {
        this.props.onSelectNoop(this.props.data.code)
        this.props.exit()
    }
    render() {
        let selectBtn, deselectBtn, followButton, closeModalBtn;
        if(this.props.selectable) {
            if(this.props.isSelected) {
                deselectBtn = <button
                className= "noop-select br-red" 
                onClick={() => this.deSelectNoop(this.props.data.code)}>
                remove from stack
            </button>
            } else {
                selectBtn = <button
                className="noop-select br-green" 
                onClick={() => this.selectNoop(this.props.data.code)}>
                add to stack
                </button>
            }
        } else {
            followButton = <button className="br-blue unfollowed">Follow (coming soon)</button>
        }
        closeModalBtn = <i className="material-icons gray right" onClick={() => this.props.closeModal()}>cancel</i>

        return (
            <div className="nootropic align-left">
                <h3>{this.props.data.name}</h3><br/>
                <div className="how-to-take">
                    <h5>How to take:</h5>
                    <p>{this.props.data.how_to_take}</p>
                </div><br/>
                <div className="supports">
                    <h5>Supports:</h5>
                    <ul>
                        {this.props.data.supports.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div><br/>
                <div className="notes">
                    <h5>Notes:</h5>
                    <ul>
                        {this.props.data.notes.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
                <div className="modal-btn-container">
                    {followButton}
                    {selectBtn}
                    {deselectBtn}
                    {closeModalBtn}      
                </div>
            </div>
        )
    }
}
      
export default Nootropic;

