import useContent from '../../hooks/useContent'
import { useState } from 'react';

import Searchbar from '../SearchBar/Searchbar';
import InputModal from '../Modals/InputModal/InputModal';

import './Content.css'

const Content = () => {

  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className="content-container">
        <Searchbar />
        <div className="content-description">
          <h1>{content.name}</h1>
          <p>{content.description}</p>
        </div>
        <button className="add-button" onClick={() => toggleModal()}>Add new</button>
        <InputModal 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          id={content}
        />
    </section>
  )
}

export default Content