import { getElementError } from "@testing-library/react";
function FeedBacks(){
return (
    <div id="fed">
        <form action="https://localhost:7227/FeedBacks" method="get">
          <button type="submit" className="btn btn-light input-group border-secondary">Feedback us</button>
        </form>
    </div>
)
}
export default FeedBacks;