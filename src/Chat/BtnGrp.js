
function BtnGrp() {

    return (
        <div class="btn-group" role="group" aria-label="Basic outlined example\">

            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#staticBackdrop1">
                <i class="material-icons">add_photo_alternate</i>
            </button>

            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="sign" className="btn btn-primary" >Record</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" class="btn btn-secondary">
                <i class="material-icons">videocam</i>
            </button>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="sign" className="btn btn-primary" >Record</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" class="btn btn-secondary">
                <i class="material-icons">keyboard_voice</i>
            </button>

            <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Recording</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="sign" className="btn btn-primary" >Record</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default BtnGrp;
