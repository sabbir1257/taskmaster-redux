import Modal from '../ui/Modal';
const  AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt perspiciatis ducimus harum quibusdam libero dicta beatae error consequatur, dolorum tenetur maxime eos aliquid quo nostrum autem impedit temporibus ipsam?</p>
            </Modal>

        </div>
    );
};

export default AddTaskModal;