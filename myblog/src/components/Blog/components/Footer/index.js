import React from 'react';
import './index.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer-wrapper">
               <section className="widget-footer">
                   <div className="container">Widget footer</div>
               </section>
               {/*./ widget-footer */}

               <section className="copyright-footer text-center">
                   <div className="container">
                       <p>&copy; {new Date().getFullYear()} - Bản quyền thuộc QuangTienIT</p>
                   </div>
               </section>
               {/*./ copyright-footer */}
            </footer>
        );
    }
}
