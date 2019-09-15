import { IMAGES } from '../constants';

const loadImages = () => {
    return {
        type: IMAGES.LOAD,
    };
};

const setImage = images => {
    return {
        type: IMAGES.LOAD_SUCCESS,
        images,
    };
};

const setError = error => {
    return { type: IMAGES.LOAD_FAIL, error };
};

export { loadImages, setImage, setError };
