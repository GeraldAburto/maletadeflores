import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

import './directory-menu.styles.scss';

class DirectoryMenu extends React.Component {  

    constructor(){
        super();

        this.state = {
            sections : [
                { title: 'Vestidos', subtitle:'', imageURL: 'http://sc01.alicdn.com/kf/HTB1hM9Rtb9YBuNjy0Fgq6AxcXXac/new-fashion-dropship-wholesale-modern-clothes-china.jpg' },
                { title: 'Blusas', subtitle:'', imageURL: 'https://image.freepik.com/foto-gratis/muchas-blusas-blancas-perchas-vestuario_38039-102.jpg' },
                { title: 'Pantalones', subtitle:'', imageURL: 'http://pfa-bd.com/images/page_bg/blondes-women-jeans-photography-fashion-celebrity-high-heels-chain-link-fence-denim-clothing-1920-wallpaper-1024x768-www.wallpaperswa.com-948x363_1436629898.jpg' },
                { title: 'Hombres', subtitle:'', imageURL: 'https://dress-trends.com/wp-content/uploads/2018/11/mens-jeans-2019-best-jeans-for-men-2019-ripped-jeans-for-men-2019-mens-skinny-jeans-2019-stylish-look-mens-jeans-2019-best-jeans-for-men-2019-rippes-jeans-for-men-2019-mens-skinny-jeans-2019.jpg', size: 'large' },
                { title: 'Mujeres', subtitle:'', imageURL: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/182765/182765_00_2x.jpg?20190823143524', size: 'large' }
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, subtitle, imageURL, size }, id) => <MenuItem key={id} title={title} subtitle={subtitle} imageURL={imageURL} size={size}/>)
                }
            </div>
        );
    }
}

export default DirectoryMenu;