import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';

function ArchiveItem({callback, title, date, _id}) {
    return (
        <div className="archive-item">
            <a onClick={() => callback(_id)} className="archive-item__title">{title}</a>
            <div className="archive-item__date">
                { date.getMonth() + 1}/{ date.getDate() }/{ date.getFullYear() - 2000 }
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
                        this.props.newsletters.map(newsletter => {
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