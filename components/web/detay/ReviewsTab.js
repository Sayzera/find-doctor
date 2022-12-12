import React from "react"
import { useDispatch } from "react-redux"
import useLang from "../../../hook/lang"
import { setMask } from "../../../redux/generalSlice"
import ReviewsDrawer from "../../drawers/ReviewsDrawer"

export default function ReviewsTab() {
  const lang = useLang()
  const dispatch = useDispatch()

  const handleReviewDrawer = () => {
    dispatch(setMask(true))
  }

  return (
    <div
      className="tab-pane fade"
      id="reviews"
      role="tabpanel"
      aria-labelledby="reviews-tab"
    >
      <div className="reviews-container">
        <div className="row">
          <div className="col-lg-3">
            <div id="review_summary">
              <strong>4.7</strong>
              <div className="rating">
                <i className="icon_star voted"></i>
                <i className="icon_star voted"></i>
                <i className="icon_star voted"></i>
                <i className="icon_star voted"></i>
                <i className="icon_star"></i>
              </div>
              <small>4 {lang["Değerlendirme"]}</small>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "0%",
                    }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <small>
                  <strong>5 {lang["Yıldız"]}</strong>
                </small>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "95%",
                    }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <small>
                  <strong>4 {lang["Yıldız"]}</strong>
                </small>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "60%",
                    }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <small>
                  <strong>3 {lang["Yıldız"]}</strong>
                </small>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "20%",
                    }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <small>
                  <strong>2 {lang["Yıldız"]}</strong>
                </small>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "0%",
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-lg-2 col-3">
                <small>
                  <strong>1 {lang["Yıldız"]}</strong>
                </small>
              </div>
            </div>
            {/* /row */}
          </div>
        </div>
        {/* /row */}

        <hr />

        <div className="review-box clearfix">
          <figure className="rev-thumb">
            <img src="http://via.placeholder.com/150x150.jpg" alt="" />
          </figure>
          <div className="rev-content">
            <div className="rating">
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star"></i>
            </div>
            <div className="rev-info">Admin – April 03, 2016:</div>
            <div className="rev-text">
              <p>
                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
                pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
              </p>
            </div>
          </div>
        </div>
        {/* /review-box */}

        <div className="review-box clearfix">
          <figure className="rev-thumb">
            <img src="http://via.placeholder.com/150x150.jpg" alt="" />
          </figure>
          <div className="rev-content">
            <div className="rating">
              <i className="icon-star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star"></i>
            </div>
            <div className="rev-info">Ahsan – 01 Nisan 2022</div>
            <div className="rev-text">
              <p>
                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
                pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
              </p>
            </div>
          </div>
        </div>
        {/* End review-box */}

        <div className="review-box clearfix">
          <figure className="rev-thumb">
            <img src="http://via.placeholder.com/150x150.jpg" alt="" />
          </figure>
          <div className="rev-content">
            <div className="rating">
              <i className="icon-star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star voted"></i>
              <i className="icon_star"></i>
            </div>
            <div className="rev-info">Sara – 03 Mart 2022</div>
            <div className="rev-text">
              <p>
                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
                pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
              </p>
            </div>
          </div>
        </div>
        {/* End review-box */}
        <hr />
        <div className="text-right">
          <span
            data-drawer-target="doktor-reviews-drawer"
            data-drawer-show="doktor-reviews-drawer"
            aria-controls="doktor-reviews-drawer"
            data-drawer-placement="right"
            data-drawer-backdrop="false"
            onClick={handleReviewDrawer}
            className="btn_1 add_bottom_15"
          >
            {lang["Yorum Yap"]}
          </span>
        </div>
      </div>
      {/* End review-container */}
    </div>
  )
}
