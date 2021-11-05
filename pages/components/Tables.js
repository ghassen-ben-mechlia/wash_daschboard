import React from 'react'
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Nav from './Nav'
export default function Tables() {
    return (
      <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.wrappixel.com/templates/adminpro/"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/favicon.png"
        />

        <link
          rel="stylesheet"
          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/apexcharts/dist/apexcharts.css"
        />
        <link
          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/extra-libs/css-chart/css-chart.css"
          rel="stylesheet"
        />

        <link
          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/jvectormap/jquery-jvectormap.css"
          rel="stylesheet"
        />

        <link
          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/css/style.min.css"
          rel="stylesheet"
        />

        <script
          async
          src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"
        ></script>
        <script
          async
          src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/jquery/dist/jquery.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/app.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/app.init.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/app-style-switcher.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/extra-libs/sparkline/sparkline.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/waves.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/sidebarmenu.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/feather.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/custom.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/apexcharts/dist/apexcharts.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/libs/jvectormap/jquery-jvectormap.min.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/extra-libs/jvector/jquery-jvectormap-us-aea-en.js"
        ></script>
        <script
          async
          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/dist/js/pages/dashboards/dashboard3.js"
        ></script>
     
      </Head>
      <div id="main-wrapper">
       

        <div className="page-wrapper">
          <div className="container-fluid">
          
          
            <div className="flex flex-row">
                <div className="w-1/12 ">

                </div>
                <div className="w-10/12 flex flex-col ">
                <div className="h-1/6 "></div>
<div className="h-4/6 ">
            <div className="d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-md-flex">
                    <div>
                      <h4 className="card-title">
                        <span className="lstick d-inline-block align-middle"></span
                        >Projects of the Month
                      </h4>
                    </div>
                    <div className="ms-auto">
                      <select className="form-select">
                        <option selected="">January 2021</option>
                        <option value="1">February 2021</option>
                        <option value="2">March 2021</option>
                        <option value="3">April 2021</option>
                      </select>
                    </div>
                  </div>
                  <div className="table-responsive mt-3">
                    <table className="table v-middle no-wrap mb-0">
                      <thead>
                        <tr>
                          <th className="border-0" colSpan="2">Assigned</th>
                          <th className="border-0">Name</th>
                          <th className="border-0">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{width: "50px"}}>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/1.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Sunil Joshi</h6>
                            <small className="text-muted">Web Designer</small>
                          </td>
                          <td>Elite Admin</td>
                          <td>
                            <span className="badge bg-success rounded-pill"
                              >Low</span
                            >
                          </td>
                        </tr>
                        <tr className="active">
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/2.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Andrew</h6>
                            <small className="text-muted">Project Manager</small>
                          </td>
                          <td>Real Homes</td>
                          <td>
                            <span className="badge bg-info rounded-pill"
                              >Medium</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/3.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">
                              Bhavesh patel
                            </h6>
                            <small className="text-muted">Developer</small>
                          </td>
                          <td>MedicalPro Theme</td>
                          <td>
                            <span className="badge bg-primary rounded-pill"
                              >High</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/4.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Nirav Joshi</h6>
                            <small className="text-muted">Frontend Eng</small>
                          </td>
                          <td>Elite Admin</td>
                          <td>
                            <span className="badge bg-danger rounded-pill"
                              >Low</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/5.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Micheal Doe</h6>
                            <small className="text-muted">Content Writer</small>
                          </td>
                          <td>Helping Hands</td>
                          <td>
                            <span className="badge bg-success rounded-pill"
                              >High</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/6.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Johnathan</h6>
                            <small className="text-muted">Graphic</small>
                          </td>
                          <td>Digital Agency</td>
                          <td>
                            <span className="badge bg-info rounded-pill">High</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="h-1/6 "></div>

         </div>
         
        </div>
   
         </div>

          <footer className="footer text-center">
            All Rights Reserved by Adminpro admin.
          </footer>
        </div>
      </div>
      </div>
    )
}
{/* <div className="flex flex-row">
                <div className="w-3/12 ">

                </div>
                <div className="w-6/12 flex flex-col ">
                <div className="h-1/6 "></div>
<div className="h-4/6 ">
            <div className="d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-md-flex">
                    <div>
                      <h4 className="card-title">
                        <span className="lstick d-inline-block align-middle"></span
                        >Projects of the Month
                      </h4>
                    </div>
                    <div className="ms-auto">
                      <select className="form-select">
                        <option selected="">January 2021</option>
                        <option value="1">February 2021</option>
                        <option value="2">March 2021</option>
                        <option value="3">April 2021</option>
                      </select>
                    </div>
                  </div>
                  <div className="table-responsive mt-3">
                    <table className="table v-middle no-wrap mb-0">
                      <thead>
                        <tr>
                          <th className="border-0" colspan="2">Assigned</th>
                          <th className="border-0">Name</th>
                          <th className="border-0">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{width: "50px"}}>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/1.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Sunil Joshi</h6>
                            <small className="text-muted">Web Designer</small>
                          </td>
                          <td>Elite Admin</td>
                          <td>
                            <span className="badge bg-success rounded-pill"
                              >Low</span
                            >
                          </td>
                        </tr>
                        <tr className="active">
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/2.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Andrew</h6>
                            <small className="text-muted">Project Manager</small>
                          </td>
                          <td>Real Homes</td>
                          <td>
                            <span className="badge bg-info rounded-pill"
                              >Medium</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/3.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">
                              Bhavesh patel
                            </h6>
                            <small className="text-muted">Developer</small>
                          </td>
                          <td>MedicalPro Theme</td>
                          <td>
                            <span className="badge bg-primary rounded-pill"
                              >High</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/4.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Nirav Joshi</h6>
                            <small className="text-muted">Frontend Eng</small>
                          </td>
                          <td>Elite Admin</td>
                          <td>
                            <span className="badge bg-danger rounded-pill"
                              >Low</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/5.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Micheal Doe</h6>
                            <small className="text-muted">Content Writer</small>
                          </td>
                          <td>Helping Hands</td>
                          <td>
                            <span className="badge bg-success rounded-pill"
                              >High</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ><img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/assets/images/users/6.jpg"
                                alt="user"
                                width="50"
                                className="rounded-circle"
                            /></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Johnathan</h6>
                            <small className="text-muted">Graphic</small>
                          </td>
                          <td>Digital Agency</td>
                          <td>
                            <span className="badge bg-info rounded-pill">High</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="h-1/6 "></div>

         </div>
         
        </div>
    */}
 
