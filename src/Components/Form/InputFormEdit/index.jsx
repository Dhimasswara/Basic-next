import React from 'react';
import style from './style.module.css';

const InputFormEdit = ({title, type, name, placeholder }) => {


  function choiceType( type ) {
    switch (type) {
      case 'textarea':
        return (
          <div className={`item mb-5`} id="thumbnail">
            <label for={name} className="text-secondary form-label">{title}</label>
            <textarea className={`form-control ${style.inputTextArea}`} name={name} id="thumbnail" rows="3" placeholder={placeholder}></textarea>
          </div>
        );
      case 'text':
        return (
          <div className={`item my-4`} id="thumbnail">
            <label for="thumbnail " className="form-label text-secondary">{title}</label>
            <input type={type} name={name} className={`form-control ${style.inputForm}`} id="thumbnail" placeholder={placeholder} />
          </div>
        );
      case 'no-title':
        return (
          <div className={`item my-4`} id="thumbnail">
            <input type={type} name={name} className={`form-control ${style.inputForm}`} id="thumbnail" placeholder={placeholder} />
          </div>
        );
    }
  }

  return choiceType(type);
};

export default InputFormEdit;
