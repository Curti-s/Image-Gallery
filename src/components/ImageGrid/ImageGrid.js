import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions/index';
import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                <button
                    style={{
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    onClick={this.props.loadImages}
                >
                    Load Images
                </button>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => {
    return { isLoading, images, error };
};

const mapDispatchToProps = dispatch => {
    return { loadImages: () => dispatch(loadImages()) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
