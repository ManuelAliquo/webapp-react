export default function Loader() {
  return (
    <>
      <div className="loader-overlay d-flex justify-content-center align-items-center gap-2">
        <h1>Loading...</h1>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
