import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useAppContext();

  console.log(useAppContext());

  return (
    <section className="home">
      <button className="show-modal-btn btn" onClick={openModal}>
        Show Modal
      </button>
      <button className="show-sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
    </section>
  );
};
export default Home;
