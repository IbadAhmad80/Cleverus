import React from "react";
import "./styles.css";

const CreateComments = () => {
  return (
    <div>
      <div class="main_wrapper mt-5 pt-5">
        <div class="row">
          <div class="col-2">
            <img
              src="https://i.imgur.com/xELPaag.jpg"
              width="70"
              class="rounded-circle mt-2"
            />{" "}
          </div>
          <div class="col-10">
            <div class="comment-box ml-2">
              <h4>Add a comment</h4>
              <div class="rating">
                {" "}
                <input type="radio" name="rating" value="5" id="5" />
                <label for="5">☆</label>{" "}
                <input type="radio" name="rating" value="4" id="4" />
                <label for="4">☆</label>{" "}
                <input type="radio" name="rating" value="3" id="3" />
                <label for="3">☆</label>{" "}
                <input type="radio" name="rating" value="2" id="2" />
                <label for="2">☆</label>{" "}
                <input type="radio" name="rating" value="1" id="1" />
                <label for="1">☆</label>{" "}
              </div>
              <div class="comment-area mt-5">
                <textarea
                  class="form-control"
                  placeholder="what is your view?"
                  rows="4"
                ></textarea>{" "}
              </div>
              <div class="comment-btns mt-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <div class="pull-left">
                      {" "}
                      <button class="btn btn-success btn-sm p-2 px-5">
                        Create
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateComments;
