import { useState } from 'react';

import Last from './Last';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState();
  function spiritual() {
    setShowModal(true);
  }

  function imposter() {
    setShowModal(false);
  }
 
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div>
        <button className='btn' onClick={spiritual}>
           BUTTON
        </button>
      </div>
      {showModal && <Last onClick={imposter} />}
      {showModal && <Modal changeDate={props.changeDate} changeTitle={props.changeTitle}text='react is tough?'  onClose={imposter} />}
    </div>
  );
}

export default Todo; 