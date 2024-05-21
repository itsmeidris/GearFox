import jackeImage from '../assets/LpageAssets/JacketPics/jacket1.png';
import jackeVar1 from '../assets/LpageAssets/JacketPics/jacket2.png'
import jackeVar2 from '../assets/LpageAssets/JacketPics/jacket3.png'
import jackeVar3 from '../assets/LpageAssets/JacketPics/jacket4.png'
import jackeVar4 from '../assets/LpageAssets/JacketPics/jacket5.png'

import gloveImage from '../assets/LpageAssets/GlovesPics/gloves01.png'
import gloveVar1 from '../assets/LpageAssets/GlovesPics/gloves03.png'
import gloveVar2 from '../assets/LpageAssets/GlovesPics/gloves3.png'
import gloveVar3 from '../assets/LpageAssets/GlovesPics/gloves04.png'
import gloveVar4 from '../assets/LpageAssets/GlovesPics/gloves4.png'

import helmetImage from '../assets/LpageAssets/HelmetsPics/helmet.png'
import helemetVar1 from '../assets/LpageAssets/HelmetsPics/helmet2.png'
import helemetVar2 from '../assets/LpageAssets/HelmetsPics/helmet4.png'
import helemetVar3 from '../assets/LpageAssets/HelmetsPics/helmet03.png'
import helemetVar4 from '../assets/LpageAssets/HelmetsPics/helmet3.png'

import bootsImage from '../assets/LpageAssets/BootsPics/boot1.png'
import bootVar1 from '../assets/LpageAssets/BootsPics/boot2.png'
import bootVar2 from '../assets/LpageAssets/BootsPics/boot3.png'
import bootVar3 from '../assets/LpageAssets/BootsPics/boot4.png'
import bootVar4 from '../assets/LpageAssets/BootsPics/boot5.png'

export const productsQualities = [
    {
        qualityTitle : 'Durable Construction',
        qualityDescription : 'Built to withstand the rigors of motorcycle riding.',
        qualityNumber : '01'
    },
    {
        qualityTitle : 'Protection',
        qualityDescription : 'Provides essential protection to keep you safe on the road.',
        qualityNumber : '02'
    },
    {
        qualityTitle : 'Comfortable Fit',
        qualityDescription : 'Designed for a snug yet comfortable for freedom of movement.',
        qualityNumber : '03'
    },
    {
        qualityTitle : 'Versatile Style',
        qualityDescription : 'Suitable for both casual and riding wear,for looking good on and off your motorcycle.',
        qualityNumber : '04'
    },
];

export const jacketImages = [
    {
        jacketInfos : 
        {
            title : "Alpinestars GP Plus R v3 Airflow Jacket"
        },
        jacketVariants : 
        {
            img : jackeImage , 
            jacketVar1 : jackeVar1,
            jacketVar2 : jackeVar2,
            jacketVar3 : jackeVar3,
            jacketVar4 : jackeVar4,

        },
        
    }
];

export const glovesImages = [
    {
        glovesInfos : 
        {
            title : "Alpinestars SMX-1 Air v2 Gloves"
        },
        glovesVariants : {
            img : gloveImage ,
            gloveVar1 : gloveVar1,
            gloveVar2 : gloveVar2,
            gloveVar3 : gloveVar3,
            gloveVar4 : gloveVar4
        }
        
    }

];

export const helmetsImages = [
    {
        helmetInfos : 
        {
            title : "Alpinestars Supertech R10 Carbon Helmet"
        },
        helemtsVariants :{
            img  : helmetImage,
            helemetVar1 : helemetVar1,
            helemetVar2 : helemetVar2,
            helemetVar3 : helemetVar3,
            helemetVar4 : helemetVar4
        }
    }

];

export const bootsImages = [
    {
        bootInfos : 
        {
            title : "Alpinestars SMX-1 Air v2 Boots"
        },
        bootsVariants :{
            img : bootsImage,
            bootVar1 : bootVar1,
            bootVar2 : bootVar2,
            bootVar3 : bootVar3,
            bootVar4 : bootVar4
        }
    }
];    