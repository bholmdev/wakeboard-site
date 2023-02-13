import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const CommentForm = ({ parkId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button
                outline
                onClick={() => setModalOpen(true)}
            >
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader
                    toggle={() => setModalOpen(false)}
                >
                    Add Comment
                </ModalHeader>
                <ModalBody>park: {parkId}</ModalBody>
            </Modal>
        </>
    );
};

export default CommentForm;