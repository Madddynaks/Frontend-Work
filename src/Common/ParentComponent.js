import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";
import SignInModal from "./SignInModal";

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsModalOpen(true);
    setIsSignInModalOpen(false);
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignInModalOpen(false);
  };

  return (
    <div>
      <Navbar openModal={openSignUpModal} />
      {isModalOpen && <Modal onClose={closeModal} openSignInModal={openSignInModal} />}
      {isSignInModalOpen && <SignInModal onClose={closeModal} />}
    </div>
  );
};

export default ParentComponent;
