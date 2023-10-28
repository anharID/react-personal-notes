import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addDatas(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="bg-light mx-auto p-4 my-4 col-12 col-md-6 justify-content-center align-items-center">
          <h2 className="text-center mb-4">Tambah Catatan</h2>
          <form onSubmit={this.onSubmitEventHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label fs-5">
                Judul
              </label>
              <input type="title" id="title" className="form-control" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Isikan judul" required />
              <p className="text-end text-muted text-gray-500">{this.state.limit - this.state.title.length} sisa karakter</p>
            </div>
            <div className="mb-3">
              <label htmlFor="note" className="form-label fs-5">
                Catatan
              </label>
              <textarea className="form-control" id="note" value={this.state.body} onChange={this.onBodyChangeEventHandler} rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-4">
              Tambah Catatan
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormInput;
