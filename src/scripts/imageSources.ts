import Image from './Image';
import ls1 from '../img/landskapes/first.jpg';
import ls2 from '../img/landskapes/second.jpg';
import ls3 from '../img/landskapes/third.jpg';
import ls4 from '../img/landskapes/fourth.jpg';
import ls5 from '../img/landskapes/fifth.jpg';
import mountaints1 from '../img/mountaints/first.jpg';
import mountaints2 from '../img/mountaints/second.jpg';
import mountaints3 from '../img/mountaints/third.jpg';
import mountaints4 from '../img/mountaints/fourth.jpg';
import mountaints5 from '../img/volcano/fifth.jpg';
import volcano1 from '../img/volcano/first.jpg';
import volcano2 from '../img/volcano/second.jpg';
import volcano3 from '../img/volcano/third.jpg';
import volcano4 from '../img/volcano/fourth.jpg';
import volcano5 from '../img/volcano/fifth.jpg';
import sky1 from '../img/sky/first.jpg';
import sky2 from '../img/sky/second.jpg';
import sky3 from '../img/sky/third.jpg';
import sky4 from '../img/sky/fourth.jpg';
import sky5 from '../img/sky/fifth.jpg';

export default function getImgSrc(): Image[][] {
    const createImg = function(src: string, classList: string[] = []): HTMLImageElement {	
        let img = document.createElement('img');
        for (let className of classList ) {
            img.classList.add( className );
        }
        
        img.setAttribute('src', src);
        return img;
    }
    
    return [   
        {
            sources: [volcano1, volcano2, volcano3, volcano4, volcano5],
            cathegory: 'cars'
        }, 
        {
            sources: [sky1, sky2, sky2, sky2, sky5],
            cathegory: 'sky'
        }].map( obj => {
            const arr: Image[] = [];
            for (let src of obj.sources)
                arr.push(new Image( createImg(src, ['preview-image']), obj.cathegory ));
            return arr;
        });
}