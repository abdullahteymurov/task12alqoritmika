import React from 'react'
import { useState } from 'react'
const Modal = () => {



  const [isTextVisible, setIsTextVisible] = useState(false);

  const openText = () => {
    setIsTextVisible(true);
  };


  const closeText = () => {
    setIsTextVisible(false);
  };
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <button onClick={openText} type="button" className="btn btn-primary">
            Уведомления
          </button>
        </div>
      </div>
      {isTextVisible && (
        <div>
          <div className="modal-header">
            <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
          </div>
          <div className="modal-body">
            <p>
              Заберите его в пункте выдачи до 15 апреля включительно, потом
              заказ придется отменить.
              <br />
              Вход в пункт выдачи только в маске и перчатках.
            </p>
          </div>

          <div className="modal-footer">
            <button onClick={closeText} type="button" className="btn btn-secondary">
              Закрыть
            </button>
          </div>
        </div>
      )}

    </div>
  )

}
export default Modal
