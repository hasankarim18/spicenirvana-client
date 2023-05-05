import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditProfile = ({ modalIsOpen, setIsOpen, closeModal }) => {
  // const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const { updateUser, user } = useContext(AuthContext);

  const { photoURL, displayName } = user;

  useEffect(() => {
    setName(displayName);
    setPhoto(photoURL);
  }, [displayName, photoURL]);

  const notify = () => toast("Update successful");
  const notify2 = () => toast("Update Failed");

  /**modal */
  let subtitle;

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  /**modal */

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const photoChangeHandler = (event) => {
    setPhoto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUser(user, name, photo)
      .then(() => {
        // Profile updated!
        // ...
        notify();
        closeModal()
      })
      .catch((error) => {
        // An error occurred
        // ...
        //   const errorMessage = error.message;
        notify2();
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        user={user}
        closeModal={closeModal}
        setIsOpen={setIsOpen}
      >
        <h2
          className="text-2xl text-rose-400"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Up Profile (only for not verified email)
        </h2>
        <div>
          <div className="w-96">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  onChange={nameChangeHandler}
                  style={{ border: "1px solid black" }}
                  placeholder="Name"
                  name="name"
                  className=" p-4 rounded-md w-full my-4"
                  type="text"
                  value={name}
                />
              </div>
              <div>
                <input
                  onChange={photoChangeHandler}
                  style={{ border: "1px solid black" }}
                  placeholder="Photo url"
                  name="photo"
                  className=" p-4 rounded-md w-full my-4"
                  type="text"
                  value={photo}
                />
              </div>
              <div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button
            className="btn btn-sm bg-rose-400 border-0  "
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </Modal>

      {/* form below */}
    </>
  );
};

export default EditProfile;
