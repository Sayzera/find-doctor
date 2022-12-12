import React from "react"

export default function GeneralTab() {
  return (
    <div
      className="tab-pane fade"
      id="general"
      role="tabpanel"
      aria-labelledby="general-tab"
    >
      <p className="lead add_bottom_30">
        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
        leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit.
      </p>
      <div className="indent_title_in">
        <i className="pe-7s-user"></i>
        <h3>Professional statement</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis.</p>
      </div>
      <div className="wrapper_indent">
        <p>
          Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
          sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
          aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
          vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet
          nibh nec urna. In nisi neque, aliquet vel, dapi.
        </p>
        <h6>Specializations</h6>
        <div className="row">
          <div className="col-lg-6">
            <ul className="bullets">
              <li>Abdominal Radiology</li>
              <li>Addiction Psychiatry</li>
              <li>Adolescent Medicine</li>
              <li>Cardiothoracic Radiology </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="bullets">
              <li>Abdominal Radiology</li>
              <li>Addiction Psychiatry</li>
              <li>Adolescent Medicine</li>
              <li>Cardiothoracic Radiology </li>
            </ul>
          </div>
        </div>
        {/* /row*/}
      </div>
      {/* /wrapper indent */}

      <hr />

      <div className="indent_title_in">
        <i className="pe-7s-news-paper"></i>
        <h3>Education</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis.</p>
      </div>
      <div className="wrapper_indent">
        <p>
          Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
          neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis.
          Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
          neque, aliquet vel, dapi.
        </p>
        <h6>Curriculum</h6>
        <ul className="list_edu">
          <li>
            <strong>New York Medical College</strong> - Doctor of Medicine
          </li>
          <li>
            <strong>Montefiore Medical Center</strong> - Residency in Internal
            Medicine
          </li>
          <li>
            <strong>New York Medical College</strong> - Master Internal Medicine
          </li>
        </ul>
      </div>
      {/*  End wrapper indent */}

      <hr />

      <div className="indent_title_in">
        <i className="pe-7s-cash"></i>
        <h3>Prices &amp; Payments</h3>
        <p>Mussum ipsum cacilds, vidis litro abertis.</p>
      </div>
      <div className="wrapper_indent">
        <p>
          Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec
          id agam eius. Te pri facete latine salutandi, scripta mediocrem et
          sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci
          volutpat has in.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Service - Visit</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New patient visit</td>
                <td>$34</td>
              </tr>
              <tr>
                <td>General consultation</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Back Pain</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Diabetes Consultation</td>
                <td>$55</td>
              </tr>
              <tr>
                <td>Eating disorder</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Foot Pain</td>
                <td>$35</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/*  End wrapper_indent */}
    </div>
  )
}
