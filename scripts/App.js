import React, {useState} from 'react';
import ModalWrapper from './ModalWrapper'
import BookingForm from './BookingForm'
import SentForm from './SentForm'
import BookNow from './BookNow'
import '../css/styles.css'

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState('before')

  const openModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)
  const switchToDone = () => setModalContent('after')

  return (
    
    <div className="hero-container">
      <h2 className='hero-text'>TRANSCEND THE ROLE <br/>OF MERE OBSERVER</h2>
      <div className="book-button-container">
      <BookNow onClick={openModal} className="book-button" />
      </div>
      <ModalWrapper
          className='modal-backdrop'
          isModalVisible={isModalVisible}
          closeModal={closeModal}
      >
        {modalContent === 'before' ? (
          <BookingForm 
            switchToDone={switchToDone}
            closeModal={closeModal}
          />
          ) : (
          <SentForm 
            closeModal={closeModal}
          />
        )}
        </ModalWrapper>
    </div>
  )
}

export default App
