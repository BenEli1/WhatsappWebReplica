
function BtnGrp() {

    return (
        <div>
            <div className="btn-group" role="group">

                <button type="button" data-toggle="modal" data-target="#imageModal" className="btn btn-secondary">
                    <i className="material-icons">add_photo_alternate</i>
                </button>

                <div className="modal fade" id="imageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel1">Add new contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput1" placeholder="nickname"></input>
                                    <label htmlFor="floatingInput">Contact's Identifier</label>
                                </div>
                                <div id="liveAlertPlaceholder1"></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="sign1" className="btn btn-primary" >Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" className="btn btn-secondary">
                    <i className="material-icons">videocam</i>
                </button>

                <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel2">Add new contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput2" placeholder="nickname"></input>
                                    <label htmlFor="floatingInput">Contact's Identifier</label>
                                </div>
                                <div id="liveAlertPlaceholder2"></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="sign2" className="btn btn-primary" >Add</button>
                            </div>
                        </div>
                    </div>
                </div>


                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" className="btn btn-secondary">
                    <i className="material-icons">keyboard_voice</i>
                </button>

                <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel3">Add new contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput3" placeholder="nickname"></input>
                                    <label htmlFor="floatingInput">Contact's Identifier</label>
                                </div>
                                <div id="liveAlertPlaceholder3"></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="sign3" className="btn btn-primary" >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BtnGrp;
