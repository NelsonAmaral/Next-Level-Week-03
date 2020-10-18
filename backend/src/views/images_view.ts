import Image from '../models/Image';

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://${process.env.IP_HOST}:${process.env.PORT}/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
};
