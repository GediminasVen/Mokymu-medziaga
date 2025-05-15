import './Feedback.scss';

const Feedback = ({ title, items }) => {
  return (
    <div className="feedback text-center py-5" id='testimonials'>
      <h2 className="section-title">{title}</h2>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-12 col-md-4 mb-4">
              <div className="feedback-item p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <p className="feedback-text">{item.text}</p>
                <strong className="d-block mt-2">- {item.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
