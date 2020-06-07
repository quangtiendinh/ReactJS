import React from 'react';
import './index.css';
import SocialsMenu from "../SocialsMenu";
import {faEnvelope, faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faSkype} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer-wrapper">
               <section className="widget-footer">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-5 widget widget-about">
                                 <div className="widget-header">
                                    <h5 className="text-header">
                                        Giới thiệu
                                    </h5>
                                 </div>
                                 {/*./ widget-header*/}
                                 <div className="widget-body">
                                     <div className="inner-content">
                                         <p>
                                             <strong>GP Coder</strong> là trang web cá nhân, được thành lập với mục đích lưu trữ, chia sẽ kiến thức đã học và làm việc của tôi.
                                             Hi vọng góp được chút ít công sức cho sự phát triển cộng đồng Coder Việt.
                                         </p>
                                     </div>
                                     <ul className="list list-unstyled list-contact">
                                        <li>
                                            <FontAwesomeIcon icon={faFacebook}/>
                                            <span>quangtienit</span>
                                        </li>
                                         <li>
                                             <FontAwesomeIcon icon={faSkype}/>
                                             <span>quangtiendinh0907</span>
                                         </li>
                                         <li>
                                             <FontAwesomeIcon icon={faEnvelope}/>
                                             <span>quangtiendinh0907@gmail.com</span>
                                         </li>
                                         <li>
                                             <FontAwesomeIcon icon={faLinkedin}/>
                                             <span>quangtiendinh</span>
                                         </li>
                                     </ul>
                                 </div>
                               {/*./ widget-body*/}
                           </div>
                           {/*./ widget-about*/}
                           <div className="col-md-2 widget widget-list">
                               <div className="widget-header">
                                   <h5 className="text-header">
                                       Khóa học
                                   </h5>
                               </div>
                               {/*./ widget-header*/}
                               <div className="widget-body">
                                   <div className="inner-content">
                                       <ul className="list list-unstyled">
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>Lập trình Java</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>PHP</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>Laravel</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>HTML/CSS</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>Spring boot</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               {/*./ widget-body*/}
                           </div>
                           {/*./ widget-list*/}
                           <div className="col-md-2 widget widget-list">
                               <div className="widget-header">
                                   <h5 className="text-header">
                                       Khóa học
                                   </h5>
                               </div>
                               {/*./ widget-header*/}
                               <div className="widget-body">
                                   <div className="inner-content">
                                       <ul className="list list-unstyled">
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>Lập trình Java</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>PHP</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>Laravel</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>HTML/CSS</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>Spring boot</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               {/*./ widget-body*/}
                           </div>
                           {/*./ widget-list*/}

                           <div className="col-md-3 widget widget-list">
                               <div className="widget-header">
                                   <h5 className="text-header">
                                       Liên kết website
                                   </h5>
                               </div>
                               {/*./ widget-header*/}
                               <div className="widget-body">
                                   <div className="inner-content">
                                       <ul className="list list-unstyled">
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>freetuts.net</span>
                                           </li>
                                           <li>
                                               <FontAwesomeIcon icon={faHandPointRight}/>
                                               <span>gpcoder.com</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               {/*./ widget-body*/}
                           </div>
                           {/*./ widget-list*/}
                       </div>
                   </div>
               </section>
               {/*./ widget-footer */}

               <section className="copyright-footer">
                   <div className="container">
                       <div className="float-left box-copyright">
                           <p>&copy; {new Date().getFullYear()} - Bản quyền thuộc QuangTienIT</p>
                       </div>
                       <div className="float-right">
                           <SocialsMenu/>    
                       </div>
                       <div className="clear"/>
                   </div>
               </section>
               {/*./ copyright-footer */}
            </footer>
        );
    }
}
