import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShowSummary } from "../utils/handleApi";
import "./ShowDetail.css";
import Modal from "react-modal";

const ShowDetail = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getShowSummary(id);
      setSummary(data);
    };
    fetchSummary();
  }, [id]);

  const handleBookTicket = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="show-detail">
      <h2>Show Summary</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      <button onClick={handleBookTicket}>Book a Ticket</button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} className="modal">
        <h2>Book a Ticket </h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <button type="submit">Submit</button>
        </form>
      </Modal>
      
    </div>
  );
};

export default ShowDetail;
