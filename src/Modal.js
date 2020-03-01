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
              <form
                className='form'
                name='contact'
                method='POST'
                data-netlify='true'
              >
                <input type='text' name='name' placeholder='name' />
                <input type='email' name='email' placeholder='email' />
                <textarea
                  name='message'
                  id=''
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
