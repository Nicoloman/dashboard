import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ContentRowTable from './ContentRowTable'
import Footer from './Footer';
function ContentWrapper(){
    let moviesInDB = {
        title: 'Movies In Database',
        color: 'primary',
        quantity: 21,
        icon: 'fas fa-film fa-2x'
    }
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ContentRowTable/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;