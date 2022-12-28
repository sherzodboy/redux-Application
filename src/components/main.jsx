import { useSelector } from "react-redux";
import Loader from "./../ui/loader";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.article);
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <div className="col mt-5" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                className="bg-light"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-jWZ9zMMN1g2g7X__VPJ7p_LoekF2mQFzA&usqp=CAU"
                alt="img"
              />
              <div className="card-body">
                <p className="card-text m-0 fw-bold">{item.title}</p>
                <p className="card-text ">{item.description}</p>
              </div>
              <div className="d-flex card-footer justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                    onClick={() => navigate(`/article/${item.slug}`)}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-warning"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
                <small className="text-muted fw-bold text-capitalize">
                  {item.author.username}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
