export const getColorFromCategory = (category:string) => {
    switch(category){
        case 'Sustainability': return 'lime';
        case 'Innovation' : return 'cyan';
        case 'Security' : return 'violet';
        default : return 'fuchsia'
    }
}