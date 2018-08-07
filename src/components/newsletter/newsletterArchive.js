import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';

function ArchiveItem({callback, title, date, _id}) {
    const parsedDate = new Date(date);

    return (
        <div className="archive-item">
            <a onClick={() => callback(_id)} className="archive-item__title">{title}</a>
            <div className="archive-item__date">
                { parsedDate.getMonth() + 1}/{ parsedDate.getDate() }/{ parsedDate.getFullYear() - 2000 }
            </div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className="newsletter-archive">
                <div className="newsletter-archive__title">Archive</div>
                <div className="newsletter-archive__items">
                    {
                        this.props.newsletters.map((newsletter, index) => {
                            if (index > 0)
                                return <ArchiveItem callback={id => history.push(`/newsletter/detail/${id}`)} key={newsletter._id} {...newsletter}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;

    return {
        newsletters
    }
}

export default connect(mapStateToProps)(NewsletterArchive);