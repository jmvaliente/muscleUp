import React from 'react'
import { Modal, Button } from 'flowbite-react'
import PropTypes from 'prop-types'

const ModalComponent = props => {
  const { visible, setVisible, rate } = props
  return (
    <Modal show={visible} onClose={() => setVisible(false)}>
      <Modal.Header>End of exercise</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Were you able to completely finish all the repetitions of the steps?
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The weight will be increased by {rate}Kg
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => console.log('Accept')}>Yes</Button>
            <Button color="gray" onClick={() => console.log('Decline')}>
              No
            </Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  )
}

ModalComponent.propTypes = {
  props: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  rate: PropTypes.number,
}

export default ModalComponent
