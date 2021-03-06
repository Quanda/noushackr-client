import React from 'react';
import Nootropic from './nootropic';
import Stack from './stack';

export function ModalContainer(props) {
    if(props.type === 'nootropic') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="modal-content">
                    <Nootropic 
                        data={props.data}
                        exit={props.onExit}
                        selectable={props.selectable}
                        isSelected={props.isSelected}
                        onSelectNoop={props.onSelectNoop}
                        onDeSelectNoop={props.onDeSelectNoop}
                        closeModal={props.closeModal}
                        isFollowed={props.isFollowed}
                    />
                </div>
            </div>
        )
    }
    else if(props.type === 'stack') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="modal-content">
                    <Stack
                        env={props.env}
                        data={props.data}
                        saved={props.saved}
                        public={props.public}
                        exit={props.onExit}
                        closeModal={props.closeModal}
                    />
                </div>
            </div>
        )
    } else if(props.type === 'stackBuilder') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="modal-content align-center">
                    {props.stackBuilder}
                    <div className="modal-btn-container">
                    </div>
                </div>
            </div>
        )
    } else if(props.type === 'nootropicLibrary') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="modal-content">
                    {props.nootropicLibrary}
                    <div className="modal-btn-container">
                    </div>
                </div> 
            </div>
        )
    } else if(props.type === 'trendingStacks') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="modal-content">
                    {props.trendingStacks}
                    <div className="modal-btn-container">
                    </div>
                </div> 
            </div>
        )
    } else if(props.type === 'savedStacks') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="modal-content">
                    {props.savedStacks}
                    <div className="modal-btn-container">
                    </div>
                </div>
            </div> 
        )
    } else if(props.type === 'confirmAction') {
        return (
            <div className="modal-container">
                {props.header}
                <div className="confirm-dialog">
                    <p>Are you sure?</p>
                    <button onClick={() => props.confirmTrue()}>Yes</button>
                    <button onClick={() => props.confirmFalse()}>No</button>
                </div>
            </div>
        )
    } else if(props.type === 'nlmAbstract') { 
        return (
            <div>
                {props.header}
                <div className="modal-content">
                    <h3>{props.data.pubYear} - {props.data.journalTitle._text}</h3><br/>
                    <h3>{props.data.abstractTitle._text}</h3><br/>
                    <p>{props.data.abstractText}</p><br/>
                    <a href={props.data.refLink} target="_blank" rel="noopener noreferrer">Source</a>
                    <div className="modal-btn-container">
                    </div>
                </div> 
            </div>
        )
    }
}
      
export default ModalContainer;

