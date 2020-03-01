import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='modal-overlay' />
          <div
            className='modal-wrapper'
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
          >
            <div className='modal'>
              <div className='modal-header'>
                <button
                  type='button'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={hide}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <form name='contact' method='POST' data-netlify='true'>
                <input type='hidden' name='contact' value='contact' />
                <input type='text' name='name' placeholder='Name' />
                <input type='email' name='email' placeholder='Email' />
                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                  placeholder='Your Message here...'
                ></textarea>
                <button type='submit' style={{ fontWeight: 'bold' }}>
                  SEND!
                </button>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
